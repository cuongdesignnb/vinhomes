<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\AuditLog;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

abstract class CrudController extends Controller
{
    use ApiResponds;

    protected string $model;

    protected array $rules = [];

    public function index(Request $request)
    {
        $limit = min((int) $request->input('limit', 15), 100);
        $query = ($this->model)::query();

        if ($request->filled('keyword')) {
            $keyword = $request->input('keyword');
            $query->where(fn ($q) => $q->where('name', 'like', "%{$keyword}%")->orWhere('title', 'like', "%{$keyword}%"));
        }

        $items = $query->latest()->paginate($limit);

        return $this->success($items->items(), 'Thanh cong', [
            'page' => $items->currentPage(),
            'limit' => $items->perPage(),
            'total' => $items->total(),
            'totalPages' => $items->lastPage(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate($this->rules);
        $data = $this->normalize($data);
        $item = ($this->model)::create($data);
        $this->audit($request, 'created', $item, null, $item->toArray());

        return $this->success($item, 'Tao moi thanh cong', [], 201);
    }

    public function show(int $id)
    {
        return $this->success(($this->model)::findOrFail($id));
    }

    public function update(Request $request, int $id)
    {
        $item = ($this->model)::findOrFail($id);
        $old = $item->toArray();
        $data = $request->validate($this->updateRules());
        $item->update($this->normalize($data));
        $this->audit($request, 'updated', $item, $old, $item->fresh()->toArray());

        return $this->success($item->fresh(), 'Cap nhat thanh cong');
    }

    public function destroy(Request $request, int $id)
    {
        $item = ($this->model)::findOrFail($id);
        $old = $item->toArray();
        $item->delete();
        $this->audit($request, 'deleted', $item, $old, null);

        return $this->success(null, 'Xoa thanh cong');
    }

    protected function normalize(array $data): array
    {
        if (($data['slug'] ?? null) === null && isset($data['name'])) {
            $data['slug'] = Str::slug($data['name']);
        }

        if (($data['slug'] ?? null) === null && isset($data['title'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        return $data;
    }

    protected function updateRules(): array
    {
        return collect($this->rules)->map(fn ($rules) => collect((array) $rules)->map(fn ($rule) => $rule === 'required' ? 'sometimes' : $rule)->all())->all();
    }

    protected function audit(Request $request, string $action, Model $model, ?array $old, ?array $new): void
    {
        AuditLog::create([
            'user_id' => $request->user()?->id,
            'action' => $action,
            'model_type' => $model::class,
            'model_id' => $model->getKey(),
            'old_values' => $old,
            'new_values' => $new,
            'ip_address' => $request->ip(),
        ]);
    }
}
