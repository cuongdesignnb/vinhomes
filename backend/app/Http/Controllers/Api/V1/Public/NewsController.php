<?php

namespace App\Http\Controllers\Api\V1\Public;

use App\Http\Concerns\ApiResponds;
use App\Http\Controllers\Controller;
use App\Models\NewsCategory;
use App\Models\NewsPost;
use App\Models\Tag;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    use ApiResponds;

    public function index(Request $request)
    {
        $limit = min((int) $request->input('limit', 9), 48);
        $query = NewsPost::with('category', 'author')->where('status', 'published');

        $query->when($request->input('keyword'), fn ($q, $keyword) => $q->where('title', 'like', "%{$keyword}%"));
        $query->when($request->input('category'), fn ($q, $slug) => $q->whereHas('category', fn ($cat) => $cat->where('slug', $slug)));
        $query->when($request->input('area') ?? $request->input('region'), fn ($q, $region) => $q->where('region', $region));
        $query->when($request->input('topic'), fn ($q, $topic) => $q->where('topic', $topic));

        $request->input('sort') === 'popular' ? $query->orderByDesc('view_count') : $query->latest('published_at');

        $posts = $query->paginate($limit);

        return $this->success(
            $posts->getCollection()->map(fn ($post) => $this->card($post))->values(),
            'Thanh cong',
            ['page' => $posts->currentPage(), 'limit' => $posts->perPage(), 'total' => $posts->total(), 'totalPages' => $posts->lastPage()]
        );
    }

    public function show(string $slug)
    {
        $post = NewsPost::with('category', 'author', 'tags')->where('slug', $slug)->where('status', 'published')->firstOrFail();
        $post->increment('view_count');

        return $this->success([
            ...$this->card($post),
            'content' => $post->content,
            'tags' => $post->tags->map(fn ($tag) => ['name' => $tag->name, 'slug' => $tag->slug])->values(),
            'relatedPosts' => NewsPost::with('category', 'author')->where('status', 'published')->whereKeyNot($post->id)->limit(3)->get()->map(fn ($item) => $this->card($item))->values(),
        ]);
    }

    public function related(string $slug)
    {
        $post = NewsPost::where('slug', $slug)->where('status', 'published')->firstOrFail();

        return $this->success(
            NewsPost::with('category', 'author')
                ->where('status', 'published')
                ->whereKeyNot($post->id)
                ->limit(4)
                ->get()
                ->map(fn ($item) => $this->card($item))
                ->values()
        );
    }

    public function categories()
    {
        return $this->success(NewsCategory::all(['id', 'name', 'slug', 'label']));
    }

    public function tags()
    {
        return $this->success(Tag::all(['id', 'name', 'slug']));
    }

    public function slugs()
    {
        return $this->success(NewsPost::where('status', 'published')->pluck('slug')->map(fn ($slug) => ['slug' => $slug])->values());
    }

    private function card(NewsPost $post): array
    {
        return [
            'id' => (string) $post->id,
            'title' => $post->title,
            'slug' => $post->slug,
            'excerpt' => $post->excerpt,
            'category' => $post->category?->slug,
            'categoryLabel' => $post->category?->label ?? $post->category?->name,
            'region' => $post->region,
            'topic' => $post->topic,
            'image' => $post->thumbnail,
            'imageAlt' => $post->thumbnail_alt,
            'author' => $post->author?->name ?? 'Vinhomes',
            'publishedAt' => optional($post->published_at)->toDateString(),
            'readingTime' => max(1, (int) ceil(str_word_count(strip_tags((string) $post->content)) / 220)).' phut doc',
            'href' => '/tin-tuc/'.$post->slug,
            'isFeatured' => $post->is_featured,
            'isPopular' => $post->is_popular,
            'viewCount' => $post->view_count,
        ];
    }
}
