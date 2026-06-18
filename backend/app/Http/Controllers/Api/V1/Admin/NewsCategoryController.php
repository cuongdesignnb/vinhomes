<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Models\NewsCategory;

class NewsCategoryController extends CrudController
{
    protected string $model = NewsCategory::class;

    protected array $rules = [
        'name' => ['required', 'string'],
        'slug' => ['nullable', 'string', 'unique:news_categories,slug'],
        'label' => ['nullable', 'string'],
    ];
}
