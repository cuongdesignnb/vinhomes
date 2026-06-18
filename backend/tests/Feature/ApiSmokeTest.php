<?php

namespace Tests\Feature;

use App\Models\Lead;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ApiSmokeTest extends TestCase
{
    use RefreshDatabase;

    public function test_public_project_and_news_endpoints_return_enveloped_data(): void
    {
        $this->seed();

        $this->getJson('/api/v1/projects')
            ->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['data', 'meta' => ['page', 'limit', 'total']]);

        $this->getJson('/api/v1/news')
            ->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['data', 'meta' => ['page', 'limit', 'total']]);
    }

    public function test_public_lead_submission_validates_and_persists(): void
    {
        $this->seed();

        $this->postJson('/api/v1/leads', [
            'full_name' => 'Nguyen Van A',
            'phone' => '0912345678',
            'email' => 'a@example.com',
            'source' => 'contact_form',
        ])->assertCreated()->assertJsonPath('success', true);

        $this->assertDatabaseHas(Lead::class, ['phone' => '0912345678']);
    }

    public function test_admin_dashboard_requires_admin_role(): void
    {
        $this->seed();

        $user = User::where('email', 'khach1@vinhomes.local')->firstOrFail();
        $admin = User::where('email', 'admin@vinhomes.local')->firstOrFail();

        $this->actingAs($user, 'sanctum')->getJson('/api/v1/admin/dashboard')->assertForbidden();
        $this->actingAs($admin, 'sanctum')->getJson('/api/v1/admin/dashboard')->assertOk()->assertJsonPath('success', true);
    }

    public function test_user_dashboard_returns_frontend_shape(): void
    {
        $this->seed();

        $user = User::where('email', 'khach1@vinhomes.local')->firstOrFail();

        $this->actingAs($user, 'sanctum')
            ->getJson('/api/v1/user/dashboard')
            ->assertOk()
            ->assertJsonPath('success', true)
            ->assertJsonStructure(['data' => ['profile', 'kpis', 'interestedProjects', 'appointments', 'documents', 'notifications', 'supportContacts']]);
    }
}
