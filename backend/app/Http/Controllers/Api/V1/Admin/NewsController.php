<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Models\NewsPost;
use Illuminate\Http\Request;

class NewsController extends CrudController
{
    protected string $model = NewsPost::class;

    protected array $rules = [
        'news_category_id' => ['nullable', 'exists:news_categories,id'],
        'title' => ['required', 'string'],
        'slug' => ['nullable', 'string', 'unique:news_posts,slug'],
        'excerpt' => ['nullable', 'string'],
        'content' => ['nullable', 'string'],
        'thumbnail' => ['nullable', 'string'],
        'thumbnail_alt' => ['nullable', 'string'],
        'region' => ['nullable', 'string'],
        'topic' => ['nullable', 'string'],
        'status' => ['nullable', 'string'],
        'is_featured' => ['nullable', 'boolean'],
        'is_popular' => ['nullable', 'boolean'],
        'published_at' => ['nullable', 'date'],
    ];

    public function publish(Request $request, int $id)
    {
        $post = NewsPost::findOrFail($id);
        $post->update(['status' => 'published', 'published_at' => $post->published_at ?? now()]);

        return $this->success($post, 'Xuat ban bai viet thanh cong');
    }
}
