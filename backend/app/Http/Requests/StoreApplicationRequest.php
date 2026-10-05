<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreApplicationRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'first_name'           => 'required|string|max:100',
            'last_name'            => 'required|string|max:100',
            'email'                => 'required|email|max:255',
            'phone'                => 'required|string|max:30',
            'country'              => 'required|string|max:100',
            'program_interest'     => 'required|string|max:255',
            'highest_qualification'=> 'required|string|max:255',
            'marks_gpa'            => 'nullable|string|max:100',
            'message'              => 'nullable|string|max:2000',
        ];
    }

    public function messages(): array
    {
        return [
            'first_name.required'           => 'Please enter your first name.',
            'last_name.required'            => 'Please enter your last name.',
            'email.required'                => 'Please enter a valid email address.',
            'phone.required'                => 'Please enter your phone/WhatsApp number.',
            'country.required'              => 'Please select your country of residence.',
            'program_interest.required'     => 'Please select the program you are interested in.',
            'highest_qualification.required'=> 'Please enter your highest qualification.',
        ];
    }
}
