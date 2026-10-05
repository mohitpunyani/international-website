<?php

namespace App\Http\Controllers;

use App\Models\ContactInquiry;
use App\Http\Requests\StoreContactRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class ContactController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Contact');
    }

    public function store(StoreContactRequest $request): RedirectResponse
    {
        ContactInquiry::create(array_merge(
            $request->validated(),
            ['ip_address' => $request->ip()]
        ));

        return back()->with('success', 'Thank you for reaching out! We\'ll get back to you within 24 hours.');
    }
}
