<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\AboutController;
use App\Http\Controllers\AcademicsController;
use App\Http\Controllers\AdmissionsController;
use App\Http\Controllers\CampusController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\AdminController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Public Routes
|--------------------------------------------------------------------------
*/
Route::get('/',             [HomeController::class, 'index'])->name('home');
Route::get('/about',        [AboutController::class, 'index'])->name('about');
Route::get('/academics',    [AcademicsController::class, 'index'])->name('academics');
Route::get('/campus',       [CampusController::class, 'index'])->name('campus');

// Admissions
Route::get('/admissions',   [AdmissionsController::class, 'index'])->name('admissions');
Route::post('/admissions/apply', [AdmissionsController::class, 'store'])->name('admissions.apply');

// Contact
Route::get('/contact',      [ContactController::class, 'index'])->name('contact');
Route::post('/contact',     [ContactController::class, 'store'])->name('contact.store');

/*
|--------------------------------------------------------------------------
| Admin Routes (Auth protected)
|--------------------------------------------------------------------------
*/
Route::middleware(['auth'])->prefix('admin')->name('admin.')->group(function () {
    Route::get('/',              [AdminController::class, 'dashboard'])->name('dashboard');
    Route::get('/applications',  [AdminController::class, 'applications'])->name('applications');
    Route::patch('/applications/{application}/status', [AdminController::class, 'updateApplicationStatus'])->name('applications.status');
    Route::get('/inquiries',     [AdminController::class, 'inquiries'])->name('inquiries');
});

/*
|--------------------------------------------------------------------------
| Auth Routes (Laravel Breeze style, minimal)
|--------------------------------------------------------------------------
*/
require __DIR__.'/auth.php';
