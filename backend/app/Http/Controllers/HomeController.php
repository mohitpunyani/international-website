<?php

namespace App\Http\Controllers;

use App\Models\Program;
use App\Models\Testimonial;
use App\Models\News;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response
    {
        $programs     = Program::active()->get();
        $testimonials = Testimonial::active()->get();
        $featuredNews = News::published()->featured()->first();
        $recentNews   = News::published()->whereNot('id', $featuredNews?->id)->take(4)->get();

        return Inertia::render('Home', [
            'programs'     => $programs,
            'testimonials' => $testimonials,
            'featuredNews' => $featuredNews,
            'recentNews'   => $recentNews,
        ]);
    }
}
