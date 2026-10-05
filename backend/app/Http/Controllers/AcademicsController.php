<?php

namespace App\Http\Controllers;

use App\Models\Program;
use Inertia\Inertia;
use Inertia\Response;

class AcademicsController extends Controller
{
    public function index(): Response
    {
        $programs = Program::active()->get()->groupBy('faculty');

        return Inertia::render('Academics', [
            'programsByFaculty' => $programs,
        ]);
    }
}
