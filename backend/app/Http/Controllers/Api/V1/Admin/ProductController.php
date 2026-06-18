<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Models\ProjectProduct;

class ProductController extends CrudController
{
    protected string $model = ProjectProduct::class;

    protected array $rules = [
        'project_id' => ['required', 'exists:projects,id'],
        'name' => ['required', 'string'],
        'code' => ['nullable', 'string'],
        'type' => ['nullable', 'string'],
        'area' => ['nullable', 'numeric'],
        'bedrooms' => ['nullable', 'integer'],
        'bathrooms' => ['nullable', 'integer'],
        'direction' => ['nullable', 'string'],
        'floor' => ['nullable', 'string'],
        'block' => ['nullable', 'string'],
        'price' => ['nullable', 'numeric'],
        'sale_price' => ['nullable', 'numeric'],
        'status' => ['nullable', 'string'],
        'legal_status' => ['nullable', 'string'],
        'handover_status' => ['nullable', 'string'],
        'images' => ['nullable', 'array'],
        'description' => ['nullable', 'string'],
    ];
}
