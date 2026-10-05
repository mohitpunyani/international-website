<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ContactInquiry extends Model
{
    protected $fillable = [
        'name', 'email', 'phone', 'inquiry_type',
        'subject', 'message', 'status', 'ip_address',
    ];

    public function scopeNew($query)
    {
        return $query->where('status', 'new');
    }
}
