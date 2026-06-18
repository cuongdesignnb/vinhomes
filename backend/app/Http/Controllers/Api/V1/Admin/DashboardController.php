<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Appointment;
use App\Models\Lead;
use App\Models\NewsPost;
use App\Models\Project;
use App\Models\ProjectProduct;

class DashboardController extends Controller
{
    use ApiResponds;

    public function __invoke()
    {
        $leadSources = Lead::selectRaw('source as name, count(*) as value')->groupBy('source')->get();
        $totalSources = max($leadSources->sum('value'), 1);

        return $this->success([
            'kpis' => [
                ['id' => 'leads', 'title' => 'Tong lead', 'value' => Lead::count(), 'changeText' => '+12%', 'changeType' => 'increase', 'icon' => 'users'],
                ['id' => 'today', 'title' => 'Lead moi hom nay', 'value' => Lead::whereDate('created_at', today())->count(), 'changeText' => 'Hom nay', 'changeType' => 'neutral', 'icon' => 'user-plus'],
                ['id' => 'appointments', 'title' => 'Lich hen sap toi', 'value' => Appointment::where('scheduled_at', '>=', now())->count(), 'changeText' => 'Sap toi', 'changeType' => 'neutral', 'icon' => 'calendar'],
                ['id' => 'projects', 'title' => 'Du an dang ban', 'value' => Project::where('is_published', true)->count(), 'changeText' => 'Dang mo ban', 'changeType' => 'increase', 'icon' => 'building'],
                ['id' => 'products', 'title' => 'San pham con hang', 'value' => ProjectProduct::where('status', 'available')->count(), 'changeText' => 'Available', 'changeType' => 'neutral', 'icon' => 'home'],
                ['id' => 'posts', 'title' => 'Tin da xuat ban', 'value' => NewsPost::where('status', 'published')->count(), 'changeText' => 'SEO content', 'changeType' => 'increase', 'icon' => 'newspaper'],
            ],
            'leadPerformance' => collect(range(6, 0))->map(fn ($day) => ['date' => now()->subDays($day)->format('d/m'), 'leadNew' => Lead::whereDate('created_at', now()->subDays($day))->count(), 'appointments' => Appointment::whereDate('created_at', now()->subDays($day))->count()])->values(),
            'seoPerformance' => collect(range(6, 0))->map(fn ($day) => ['date' => now()->subDays($day)->format('d/m'), 'views' => 120 + $day * 16, 'clicks' => 20 + $day * 3])->values(),
            'leadSources' => $leadSources->map(fn ($item, $index) => ['name' => $item->name, 'value' => $item->value, 'percent' => round($item->value * 100 / $totalSources), 'color' => ['#2563eb', '#16a34a', '#f97316', '#9333ea'][$index % 4]])->values(),
            'approvalTasks' => [],
            'recentLeads' => Lead::latest()->limit(8)->get()->map(fn ($lead) => ['id' => (string) $lead->id, 'name' => $lead->full_name, 'phone' => $lead->phone, 'source' => $lead->source, 'time' => $lead->created_at->diffForHumans(), 'status' => $lead->status])->values(),
            'managedProjects' => Project::withCount('products')->limit(8)->get()->map(fn ($project) => ['id' => (string) $project->id, 'name' => $project->name, 'thumbnail' => $project->hero_image, 'totalProducts' => $project->products_count, 'soldProducts' => $project->products()->where('status', 'sold')->count(), 'absorptionRate' => $project->products_count ? round($project->products()->where('status', 'sold')->count() * 100 / $project->products_count) : 0, 'status' => $project->status === 'selling' ? 'open' : 'draft'])->values(),
            'activities' => Lead::latest()->limit(6)->get()->map(fn ($lead) => ['id' => (string) $lead->id, 'title' => 'Lead moi: '.$lead->full_name, 'description' => $lead->source, 'time' => $lead->created_at->diffForHumans(), 'type' => 'lead'])->values(),
            'seoKeywords' => [],
            'popularPosts' => NewsPost::orderByDesc('view_count')->limit(5)->get()->map(fn ($post) => ['title' => $post->title, 'views' => (string) $post->view_count])->values(),
            'optimizationPages' => [],
            'scheduledPosts' => [],
            'businessMetrics' => [],
            'revenueChart' => [],
            'projectStatus' => [],
            'productSales' => [],
        ]);
    }
}
