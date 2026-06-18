<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use App\Models\Lead;
use App\Models\LeadActivity;
use App\Models\LeadNote;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    use ApiResponds;

    public function index(Request $request)
    {
        $query = Lead::with('project', 'assignee')->latest();
        $user = $request->user();

        if ($user->hasRole('SALE')) {
            $query->where('assigned_to', $user->id);
        }

        $leads = $query->paginate(min((int) $request->input('limit', 15), 100));

        return $this->success($leads->items(), 'Thanh cong', ['page' => $leads->currentPage(), 'limit' => $leads->perPage(), 'total' => $leads->total()]);
    }

    public function store(Request $request)
    {
        $lead = Lead::create($request->validate([
            'full_name' => ['required', 'string'],
            'phone' => ['required', 'regex:/^(0|\\+84)[0-9]{9,10}$/'],
            'email' => ['nullable', 'email'],
            'project_id' => ['nullable', 'exists:projects,id'],
            'source' => ['nullable', 'string'],
            'status' => ['nullable', 'string'],
            'assigned_to' => ['nullable', 'exists:users,id'],
            'message' => ['nullable', 'string'],
        ]));

        return $this->success($lead, 'Tao lead thanh cong', [], 201);
    }

    public function show(int $id)
    {
        return $this->success(Lead::with('project', 'assignee', 'notes')->findOrFail($id));
    }

    public function update(Request $request, int $id)
    {
        $lead = Lead::findOrFail($id);
        $old = $lead->toArray();
        $lead->update($request->all());
        $this->audit($request, 'updated', $lead, $old);

        return $this->success($lead->fresh(), 'Cap nhat lead thanh cong');
    }

    public function destroy(int $id)
    {
        Lead::findOrFail($id)->delete();

        return $this->success(null, 'Xoa lead thanh cong');
    }

    public function assign(Request $request, int $id)
    {
        $data = $request->validate(['assigned_to' => ['required', 'exists:users,id']]);
        $lead = Lead::findOrFail($id);
        $old = $lead->toArray();
        $lead->update($data);
        $this->audit($request, 'assigned', $lead, $old);

        return $this->success($lead, 'Phan cong lead thanh cong');
    }

    public function status(Request $request, int $id)
    {
        $data = $request->validate(['status' => ['required', 'string']]);
        $lead = Lead::findOrFail($id);
        $old = $lead->toArray();
        $lead->update($data);
        $this->audit($request, 'status_changed', $lead, $old);

        return $this->success($lead, 'Cap nhat trang thai lead thanh cong');
    }

    public function note(Request $request, int $id)
    {
        $data = $request->validate(['note' => ['required', 'string']]);
        $note = LeadNote::create($data + ['lead_id' => $id, 'user_id' => $request->user()->id]);

        return $this->success($note, 'Them ghi chu thanh cong', [], 201);
    }

    public function activity(Request $request, int $id)
    {
        $data = $request->validate(['type' => ['nullable', 'string'], 'description' => ['nullable', 'string'], 'metadata' => ['nullable', 'array']]);
        $activity = LeadActivity::create($data + ['lead_id' => $id, 'user_id' => $request->user()->id]);

        return $this->success($activity, 'Them hoat dong thanh cong', [], 201);
    }

    private function audit(Request $request, string $action, Lead $lead, array $old): void
    {
        AuditLog::create(['user_id' => $request->user()->id, 'action' => $action, 'model_type' => Lead::class, 'model_id' => $lead->id, 'old_values' => $old, 'new_values' => $lead->fresh()->toArray(), 'ip_address' => $request->ip()]);
    }
}
