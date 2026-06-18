<?php

namespace App\Http\Controllers\Api\V1\User;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\ConsultationRequest;
use App\Models\Document;
use App\Models\PaymentSchedule;
use App\Models\SupportTicket;
use App\Models\UserNotification;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    use ApiResponds;

    public function dashboard(Request $request)
    {
        $user = $request->user()->load('savedProjects', 'profile');

        $appointments = Appointment::where('user_id', $user->id)->latest()->limit(5)->get();
        $documents = Document::whereHas('users', fn ($q) => $q->whereKey($user->id))->latest()->limit(5)->get();
        $notifications = UserNotification::where('user_id', $user->id)->orWhereNull('user_id')->latest()->limit(5)->get();
        $paymentSchedules = PaymentSchedule::where('user_id', $user->id)->get();

        return $this->success([
            'profile' => [
                'id' => (string) $user->id,
                'fullName' => $user->name,
                'avatar' => $user->avatar ?? '/images/avatar-minh-tuan.jpg',
                'memberLevel' => $user->member_level,
                'memberPoints' => $user->member_points,
                'memberBenefitsCount' => 4,
                'roleLabel' => 'Khach hang',
            ],
            'kpis' => [
                ['id' => 'saved', 'title' => 'Du an da luu', 'value' => $user->savedProjects->count(), 'description' => 'Du an dang quan tam', 'icon' => 'heart', 'href' => '/user/du-an-quan-tam'],
                ['id' => 'appointments', 'title' => 'Lich hen', 'value' => $appointments->count(), 'description' => 'Lich hen dang theo doi', 'icon' => 'calendar', 'href' => '/user/lich-hen-tham-quan'],
                ['id' => 'requests', 'title' => 'Yeu cau tu van', 'value' => ConsultationRequest::where('user_id', $user->id)->count(), 'description' => 'Yeu cau da gui', 'icon' => 'message-circle'],
                ['id' => 'documents', 'title' => 'Tai lieu', 'value' => $documents->count(), 'description' => 'Tai lieu rieng', 'icon' => 'file-text'],
            ],
            'interestedProjects' => $user->savedProjects->map(fn ($project) => [
                'id' => (string) $project->id,
                'name' => $project->name,
                'slug' => $project->slug,
                'location' => $project->location,
                'priceText' => $project->price_text,
                'statusLabel' => $project->status_label,
                'statusType' => 'interested',
                'image' => $project->hero_image,
                'href' => '/du-an/'.$project->slug,
                'isSaved' => true,
            ])->values(),
            'appointments' => $appointments->map(fn ($appointment) => [
                'id' => (string) $appointment->id,
                'title' => $appointment->location ?? 'Lich tu van Vinhomes',
                'date' => optional($appointment->scheduled_at)->format('d'),
                'month' => optional($appointment->scheduled_at)->format('m/Y'),
                'time' => optional($appointment->scheduled_at)->format('H:i'),
                'location' => $appointment->location ?? 'Online',
                'type' => $appointment->type,
                'status' => $appointment->status === 'pending' ? 'pending' : 'confirmed',
            ])->values(),
            'progressProjectName' => $user->savedProjects->first()?->name ?? 'Ho so Vinhomes',
            'progressSteps' => [
                ['id' => 'profile', 'title' => 'Ho so ca nhan', 'statusLabel' => 'Da tao', 'dateText' => now()->format('d/m/Y'), 'status' => 'completed'],
                ['id' => 'consult', 'title' => 'Tu van nhu cau', 'statusLabel' => 'Dang xu ly', 'dateText' => 'Gan day', 'status' => 'active'],
                ['id' => 'payment', 'title' => 'Thanh toan', 'statusLabel' => 'Cho cap nhat', 'dateText' => 'Sau khi dat coc', 'status' => 'pending'],
            ],
            'documents' => $documents->map(fn ($document) => ['id' => (string) $document->id, 'title' => $document->title, 'fileType' => $document->file_type, 'fileSize' => $document->file_size, 'href' => '/api/v1/user/documents/'.$document->id.'/download', 'isNew' => true])->values(),
            'notifications' => $notifications->map(fn ($notification) => ['id' => (string) $notification->id, 'title' => $notification->title, 'description' => $notification->description, 'time' => $notification->created_at->diffForHumans(), 'type' => $notification->type, 'isUnread' => $notification->read_at === null])->values(),
            'supportContacts' => [
                ['id' => 'hotline', 'title' => 'Hotline', 'value' => '1900 0000', 'description' => 'Ho tro nhanh', 'type' => 'hotline'],
                ['id' => 'zalo', 'title' => 'Zalo', 'value' => 'Vinhomes', 'description' => 'Chat voi chuyen vien', 'type' => 'zalo'],
                ['id' => 'email', 'title' => 'Email', 'value' => 'support@vinhomes.local', 'description' => 'Ho tro qua email', 'type' => 'email'],
            ],
            'paymentProgress' => [
                'total' => $paymentSchedules->sum('amount'),
                'paid' => $paymentSchedules->where('status', 'paid')->sum('amount'),
            ],
        ]);
    }

    public function saveProject(Request $request)
    {
        $data = $request->validate(['project_id' => ['required', 'exists:projects,id']]);
        $request->user()->savedProjects()->syncWithoutDetaching($data['project_id']);

        return $this->success(null, 'Da luu du an');
    }

    public function removeSavedProject(Request $request, int $projectId)
    {
        $request->user()->savedProjects()->detach($projectId);

        return $this->success(null, 'Da bo luu du an');
    }

    public function supportTicket(Request $request)
    {
        $data = $request->validate(['subject' => ['required', 'string'], 'message' => ['required', 'string']]);
        $ticket = SupportTicket::create($data + ['user_id' => $request->user()->id]);

        return $this->success($ticket, 'Da tao yeu cau ho tro', [], 201);
    }
}
