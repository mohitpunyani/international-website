<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreContactRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'name'         => 'required|string|max:255',
            'email'        => 'required|email|max:255',
            'phone'        => 'nullable|string|max:30',
            'inquiry_type' => 'required|string|in:General,Admissions,Programs,Scholarships,Visa Support,Other',
            'subject'      => 'required|string|max:255',
            'message'      => 'required|string|min:10|max:3000',
        ];
    }

    public function messages(): array
    {
        return [
            'name.required'         => 'Please enter your name.',
            'email.required'        => 'Please enter a valid email address.',
            'inquiry_type.required' => 'Please select an inquiry type.',
            'subject.required'      => 'Please enter a subject.',
            'message.required'      => 'Please enter your message.',
            'message.min'           => 'Message must be at least 10 characters.',
        ];
    }
}
