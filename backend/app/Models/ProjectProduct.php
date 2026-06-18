<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ProjectProduct extends Model
{
    use SoftDeletes;

    protected $guarded = [];

    protected $casts = ['images' => 'array'];

    public function project()
    {
        return $this->belongsTo(Project::class);
    }
}
