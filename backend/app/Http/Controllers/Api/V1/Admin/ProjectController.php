<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends CrudController
{
    protected string $model = Project::class;

    protected array $rules = [
        'name' => ['required', 'string'],
        'slug' => ['nullable', 'string', 'unique:projects,slug'],
        'code' => ['nullable', 'string'],
        'location' => ['required', 'string'],
        'area' => ['nullable', 'string'],
        'address' => ['nullable', 'string'],
        'status' => ['nullable', 'string'],
        'status_label' => ['nullable', 'string'],
        'short_description' => ['nullable', 'string'],
        'description' => ['nullable', 'string'],
        'price_from' => ['nullable', 'numeric'],
        'price_to' => ['nullable', 'numeric'],
        'price_text' => ['nullable', 'string'],
        'type_text' => ['nullable', 'string'],
        'hero_image' => ['nullable', 'string'],
        'hero_image_alt' => ['nullable', 'string'],
        'is_featured' => ['nullable', 'boolean'],
        'is_published' => ['nullable', 'boolean'],
        'property_types' => ['nullable', 'array'],
        'amenities' => ['nullable', 'array'],
        'facts' => ['nullable', 'array'],
        'gallery' => ['nullable', 'array'],
        'faqs' => ['nullable', 'array'],
    ];

    public function publish(Request $request, int $id)
    {
        $project = Project::findOrFail($id);
        $project->update(['is_published' => ! $project->is_published]);

        return $this->success($project, 'Cap nhat trang thai xuat ban thanh cong');
    }

    public function feature(Request $request, int $id)
    {
        $project = Project::findOrFail($id);
        $project->update(['is_featured' => ! $project->is_featured]);

        return $this->success($project, 'Cap nhat noi bat thanh cong');
    }
}
