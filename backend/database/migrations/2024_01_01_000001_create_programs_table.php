<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('programs', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('faculty'); // medical, engineering, management, law, agriculture, pharmacy
            $table->string('icon', 10)->nullable(); // emoji
            $table->text('description');
            $table->string('duration', 50);
            $table->string('eligibility', 150);
            $table->integer('course_count')->default(0);
            $table->string('color_class', 50)->default('blue'); // blue, gold, teal, red, purple, orange
            $table->boolean('is_active')->default(true);
            $table->integer('sort_order')->default(0);
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('programs');
    }
};
