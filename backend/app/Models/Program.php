<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    protected $fillable = [
        'name', 'faculty', 'icon', 'description',
        'duration', 'eligibility', 'course_count',
        'color_class', 'is_active', 'sort_order',
    ];

    protected $casts = [
        'is_active' => 'boolean',
        'course_count' => 'integer',
        'sort_order' => 'integer',
    ];

    public function scopeActive($query)
    {
        return $query->where('is_active', true)->orderBy('sort_order');
    }

    public function scopeByFaculty($query, string $faculty)
    {
        return $query->where('faculty', $faculty);
    }
}
