<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Application extends Model
{
    protected $fillable = [
        'first_name', 'last_name', 'email', 'phone',
        'country', 'program_interest', 'highest_qualification',
        'marks_gpa', 'message', 'status', 'ip_address',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    public function getFullNameAttribute(): string
    {
        return "{$this->first_name} {$this->last_name}";
    }

    public function scopePending($query)
    {
        return $query->where('status', 'pending');
    }
}
