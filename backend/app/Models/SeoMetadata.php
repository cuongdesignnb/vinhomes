<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SeoMetadata extends Model
{
    protected $guarded = [];

    protected $casts = ['schema_json' => 'array'];
}
