<?php

namespace App\Http\Controllers;

use App\Models\Application;
use App\Models\ContactInquiry;
use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function dashboard(): Response
    {
        return Inertia::render('Admin/Dashboard', [
            'stats' => [
                'total_applications'   => Application::count(),
                'pending_applications' => Application::pending()->count(),
                'total_inquiries'      => ContactInquiry::count(),
                'new_inquiries'        => ContactInquiry::new()->count(),
            ],
            'recentApplications' => Application::latest()->take(10)->get(),
            'recentInquiries'    => ContactInquiry::latest()->take(10)->get(),
        ]);
    }

    public function applications(Request $request): Response
    {
        $applications = Application::query()
            ->when($request->status, fn($q, $s) => $q->where('status', $s))
            ->latest()
            ->paginate(20);

        return Inertia::render('Admin/Applications', [
            'applications' => $applications,
            'filters'      => $request->only('status'),
        ]);
    }

    public function updateApplicationStatus(Request $request, Application $application)
    {
        $request->validate(['status' => 'required|in:pending,reviewing,accepted,rejected']);
        $application->update(['status' => $request->status]);

        return back()->with('success', 'Application status updated.');
    }

    public function inquiries(): Response
    {
        return Inertia::render('Admin/Inquiries', [
            'inquiries' => ContactInquiry::latest()->paginate(20),
        ]);
    }
}
