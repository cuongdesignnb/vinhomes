<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Lead;
use App\Models\NewsPost;
use App\Models\Project;

class ReportController extends Controller
{
    use ApiResponds;

    public function overview()
    {
        return $this->success([
            'leads' => Lead::count(),
            'projects' => Project::count(),
            'publishedPosts' => NewsPost::where('status', 'published')->count(),
            'conversionRate' => Lead::count() ? round(Lead::where('status', 'won')->count() * 100 / Lead::count(), 2) : 0,
        ]);
    }

    public function leads()
    {
        return $this->success(Lead::selectRaw('status, count(*) as total')->groupBy('status')->get());
    }

    public function sales()
    {
        return $this->success(Lead::selectRaw('assigned_to, count(*) as total')->groupBy('assigned_to')->get());
    }

    public function projects()
    {
        return $this->success(Project::withCount('products')->orderByDesc('view_count')->get());
    }

    public function seo()
    {
        return $this->success(NewsPost::orderByDesc('view_count')->limit(20)->get(['title', 'slug', 'view_count']));
    }
}
