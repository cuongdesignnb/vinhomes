<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\ConsultationRequest;
use App\Models\Document;
use App\Models\Payment;
use App\Models\PaymentSchedule;
use App\Models\SupportTicket;
use App\Models\UserNotification;
use Illuminate\Http\Request;

class ResourceController extends Controller
{
    use ApiResponds;

    public function profile(Request $request)
    {
        return $this->success($request->user()->load('profile'));
    }

    public function updateProfile(Request $request)
    {
        $request->user()->update($request->validate(['name' => ['sometimes', 'string'], 'phone' => ['nullable', 'string'], 'avatar' => ['nullable', 'string']]));

        return $this->success($request->user()->fresh('profile'), 'Cap nhat ho so thanh cong');
    }

    public function appointments(Request $request)
    {
        return $this->success(Appointment::where('user_id', $request->user()->id)->latest()->get());
    }

    public function createAppointment(Request $request)
    {
        $appointment = Appointment::create($request->validate(['project_id' => ['nullable', 'exists:projects,id'], 'scheduled_at' => ['nullable', 'date'], 'location' => ['nullable', 'string'], 'type' => ['nullable', 'string'], 'note' => ['nullable', 'string']]) + ['user_id' => $request->user()->id]);

        return $this->success($appointment, 'Tao lich hen thanh cong', [], 201);
    }

    public function cancelAppointment(Request $request, int $id)
    {
        $appointment = Appointment::where('user_id', $request->user()->id)->findOrFail($id);
        $appointment->update(['status' => 'cancelled']);

        return $this->success($appointment, 'Da huy lich hen');
    }

    public function consultationRequests(Request $request)
    {
        return $this->success(ConsultationRequest::where('user_id', $request->user()->id)->latest()->get());
    }

    public function createConsultationRequest(Request $request)
    {
        $consultation = ConsultationRequest::create($request->validate(['project_id' => ['nullable', 'exists:projects,id'], 'message' => ['nullable', 'string']]) + ['user_id' => $request->user()->id, 'full_name' => $request->user()->name, 'phone' => $request->user()->phone, 'email' => $request->user()->email]);

        return $this->success($consultation, 'Gui yeu cau tu van thanh cong', [], 201);
    }

    public function documents(Request $request)
    {
        return $this->success(Document::whereHas('users', fn ($q) => $q->whereKey($request->user()->id))->get());
    }

    public function downloadDocument(Request $request, int $id)
    {
        $document = Document::whereHas('users', fn ($q) => $q->whereKey($request->user()->id))->findOrFail($id);

        return $this->success(['downloadUrl' => $document->file_path], 'Kiem tra quyen thanh cong');
    }

    public function payments(Request $request)
    {
        return $this->success(Payment::where('user_id', $request->user()->id)->latest()->get());
    }

    public function paymentSchedules(Request $request)
    {
        return $this->success(PaymentSchedule::where('user_id', $request->user()->id)->latest()->get());
    }

    public function notifications(Request $request)
    {
        return $this->success(UserNotification::where('user_id', $request->user()->id)->orWhereNull('user_id')->latest()->get());
    }

    public function readNotification(Request $request, int $id)
    {
        $notification = UserNotification::where(fn ($q) => $q->where('user_id', $request->user()->id)->orWhereNull('user_id'))->findOrFail($id);
        $notification->update(['read_at' => now()]);

        return $this->success($notification, 'Da doc thong bao');
    }

    public function readAllNotifications(Request $request)
    {
        UserNotification::where('user_id', $request->user()->id)->update(['read_at' => now()]);

        return $this->success(null, 'Da doc tat ca thong bao');
    }

    public function supportTickets(Request $request)
    {
        return $this->success(SupportTicket::where('user_id', $request->user()->id)->latest()->get());
    }
}
