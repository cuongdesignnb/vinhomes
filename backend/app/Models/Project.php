<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Project extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = [
        'property_types' => 'array',
        'amenities' => 'array',
        'facts' => 'array',
        'highlights' => 'array',
        'connections' => 'array',
        'floor_plans' => 'array',
        'policies' => 'array',
        'investment_reasons' => 'array',
        'gallery' => 'array',
        'faqs' => 'array',
        'is_featured' => 'boolean',
        'is_published' => 'boolean',
    ];

    public function products()
    {
        return $this->hasMany(ProjectProduct::class);
    }

    public function seo()
    {
        return $this->hasOne(SeoMetadata::class, 'entity_id')->where('entity_type', self::class);
    }
}
