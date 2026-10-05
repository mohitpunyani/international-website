<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\Application;
use App\Http\Requests\StoreApplicationRequest;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\RedirectResponse;

class AdmissionsController extends Controller
{
    public function index(): Response
    {
        $programs = Program::active()->get(['id', 'name', 'faculty']);

        return Inertia::render('Admissions', [
            'programs' => $programs,
        ]);
    }

    public function store(StoreApplicationRequest $request): RedirectResponse
    {
        Application::create(array_merge(
            $request->validated(),
            ['ip_address' => $request->ip()]
        ));

        return back()->with('success', 'Application submitted! Our team will contact you within 24 hours.');
    }
}
