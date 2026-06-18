<?php

namespace App\Http\Controllers\Api\V1\Public;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\NewsPost;
use App\Models\Project;
use App\Models\SeoMetadata;

class HomeController extends Controller
{
    use ApiResponds;

    public function __invoke()
    {
        return $this->success([
            'announcementBar' => ['text' => 'Tu van du an Vinhomes cao cap 24/7', 'href' => '/lien-he'],
            'hero' => [
                'title' => 'Vinhomes',
                'subtitle' => 'Bat dong san cao cap, quy hoach dong bo, tieu chuan song quoc te',
                'image' => '/images/hero-vinhomes.jpg',
                'imageAlt' => 'Toan canh do thi Vinhomes',
            ],
            'searchFilters' => ['areas' => Project::distinct()->pluck('area')->filter()->values()],
            'featuredProjects' => Project::where('is_published', true)->where('is_featured', true)->limit(6)->get(),
            'propertyCategories' => ['Can ho', 'Biet thu', 'Shophouse', 'Nha pho', 'Van phong'],
            'amenities' => ['Cong vien', 'Truong hoc', 'Benh vien', 'TTTM', 'The thao'],
            'reasons' => ['Vi tri chien luoc', 'He sinh thai dong bo', 'Phap ly minh bach', 'Van hanh chuyen nghiep'],
            'testimonials' => [],
            'latestNews' => NewsPost::where('status', 'published')->latest('published_at')->limit(3)->get(),
            'cta' => ['title' => 'Can tu van du an phu hop?', 'href' => '/lien-he'],
            'seo' => SeoMetadata::where('route', '/')->first(),
        ]);
    }
}
