<?php

namespace App\Http\Controllers\Api\V1\Public;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\ContactRequest;
use App\Models\ConsultationRequest;
use App\Models\Lead;
use App\Models\UserNotification;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    use ApiResponds;

    public function show()
    {
        return $this->success([
            'heroImage' => '/images/contact/contact-hero.jpg',
            'heroImageAlt' => 'Trung tam tu van Vinhomes',
            'contactInfo' => [
                'hotline' => '1900 0000',
                'email' => 'sales@vinhomes.local',
                'website' => 'https://vinhomes.local',
                'address' => 'Ha Noi va TP. Ho Chi Minh',
                'workingHours' => '08:00 - 20:00 hang ngay',
            ],
            'supportItems' => [],
            'offices' => [],
            'mapImage' => '/images/contact/contact-map.jpg',
            'mapImageAlt' => 'Ban do van phong Vinhomes',
            'nearbyPlaces' => [],
            'benefits' => [],
            'faqs' => [],
            'ctaImage' => '/images/contact/cta-city.jpg',
            'ctaImageAlt' => 'Do thi Vinhomes',
        ]);
    }

    public function lead(Request $request)
    {
        $data = $this->validatePublicForm($request);
        $lead = Lead::create($data + [
            'ip_address' => $request->ip(),
            'user_agent' => (string) $request->userAgent(),
            'referrer' => $request->headers->get('referer'),
        ]);

        UserNotification::create(['title' => 'Lead moi', 'description' => $lead->full_name.' vua gui yeu cau tu van', 'type' => 'lead']);

        return $this->success($lead, 'Gui thong tin thanh cong', [], 201);
    }

    public function contactRequest(Request $request)
    {
        $data = $this->validatePublicForm($request);
        $contact = ContactRequest::create($data);

        return $this->success($contact, 'Gui lien he thanh cong', [], 201);
    }

    public function appointment(Request $request)
    {
        $data = $this->validatePublicForm($request) + $request->validate([
            'scheduled_at' => ['nullable', 'date'],
            'location' => ['nullable', 'string'],
            'type' => ['nullable', 'in:visit,consult,online'],
        ]);

        $appointment = Appointment::create($data + ['status' => 'pending']);

        return $this->success($appointment, 'Dat lich thanh cong', [], 201);
    }

    private function validatePublicForm(Request $request): array
    {
        $data = $request->validate([
            'full_name' => ['required', 'string', 'max:255'],
            'phone' => ['required', 'regex:/^(0|\\+84)[0-9]{9,10}$/'],
            'email' => ['nullable', 'email'],
            'area' => ['nullable', 'string'],
            'property_type' => ['nullable', 'string'],
            'demand' => ['nullable', 'string'],
            'message' => ['nullable', 'string'],
            'source' => ['nullable', 'string'],
            'project_id' => ['nullable', 'exists:projects,id'],
            'company_website' => ['nullable', 'prohibited'],
        ]);

        $data['source'] ??= 'contact_form';

        return $data;
    }
}
