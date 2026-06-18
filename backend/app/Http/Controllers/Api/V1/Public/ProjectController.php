<?php

namespace App\Http\Controllers\Api\V1\Public;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    use ApiResponds;

    public function index(Request $request)
    {
        $limit = min((int) $request->input('limit', 12), 48);
        $query = Project::query()->where('is_published', true);

        $query->when($request->input('keyword') ?? $request->input('q'), fn ($q, $keyword) => $q->where('name', 'like', "%{$keyword}%"));
        $query->when($request->input('area'), fn ($q, $area) => $q->where('area', $area));
        $query->when($request->input('status'), fn ($q, $status) => $q->where('status', $status));
        $query->when($request->input('price_min'), fn ($q, $price) => $q->where('price_from', '>=', $price));
        $query->when($request->input('price_max'), fn ($q, $price) => $q->where('price_to', '<=', $price));

        match ($request->input('sort', 'featured')) {
            'latest' => $query->latest(),
            'price_asc' => $query->orderBy('price_from'),
            'price_desc' => $query->orderByDesc('price_to'),
            'most_viewed' => $query->orderByDesc('view_count'),
            default => $query->orderByDesc('is_featured')->latest(),
        };

        $projects = $query->paginate($limit);

        return $this->success(
            $projects->getCollection()->map(fn (Project $project) => $this->card($project))->values(),
            'Thanh cong',
            ['page' => $projects->currentPage(), 'limit' => $projects->perPage(), 'total' => $projects->total(), 'totalPages' => $projects->lastPage()]
        );
    }

    public function show(string $slug)
    {
        $project = Project::with('products')->where('slug', $slug)->where('is_published', true)->firstOrFail();
        $project->increment('view_count');

        return $this->success($this->detail($project));
    }

    public function filters()
    {
        return $this->success([
            'areas' => Project::whereNotNull('area')->distinct()->pluck('area')->values(),
            'statuses' => ['coming_soon', 'opening', 'selling', 'sold_out', 'hidden'],
            'propertyTypes' => ['apartment', 'villa', 'shophouse', 'townhouse', 'office'],
            'sorts' => ['latest', 'price_asc', 'price_desc', 'featured', 'most_viewed'],
        ]);
    }

    public function slugs()
    {
        return $this->success(Project::where('is_published', true)->pluck('slug')->map(fn ($slug) => ['slug' => $slug])->values());
    }

    private function card(Project $project): array
    {
        return [
            'id' => (string) $project->id,
            'name' => $project->name,
            'slug' => $project->slug,
            'location' => $project->location,
            'priceText' => $project->price_text,
            'status' => $project->status,
            'statusLabel' => $project->status_label,
            'image' => $project->hero_image,
            'imageAlt' => $project->hero_image_alt,
            'href' => '/du-an/'.$project->slug,
            'isFeatured' => $project->is_featured,
        ];
    }

    private function detail(Project $project): array
    {
        return [
            ...$this->card($project),
            'subtitle' => $project->short_description,
            'typeText' => $project->type_text,
            'heroImage' => $project->hero_image,
            'heroImageAlt' => $project->hero_image_alt,
            'overviewImage' => $project->overview_image,
            'overviewImageAlt' => $project->overview_image_alt,
            'description' => $project->description,
            'facts' => $project->facts ?? [],
            'highlights' => $project->highlights ?? [],
            'connections' => $project->connections ?? [],
            'locationImage' => $project->location_image,
            'locationImageAlt' => $project->location_image_alt,
            'masterplanImage' => $project->masterplan_image,
            'masterplanImageAlt' => $project->masterplan_image_alt,
            'masterplanLegend' => $project->floor_plans['legend'] ?? [],
            'typicalLayoutImage' => $project->typical_layout_image,
            'typicalLayoutAlt' => $project->typical_layout_alt,
            'products' => $project->products->map(fn ($product) => [
                'id' => (string) $product->id,
                'title' => $product->name,
                'description' => $product->description,
                'image' => $product->images[0] ?? $project->hero_image,
                'href' => '/du-an/'.$project->slug,
            ])->values(),
            'amenities' => $project->amenities ?? [],
            'policies' => $project->policies ?? [],
            'investmentReasons' => $project->investment_reasons ?? [],
            'gallery' => $project->gallery ?? [],
            'faqs' => $project->faqs ?? [],
            'seoTitle' => $project->seo?->meta_title,
            'seoDescription' => $project->seo?->meta_description,
            'canonical' => $project->seo?->canonical_url,
        ];
    }
}
