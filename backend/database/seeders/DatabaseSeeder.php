<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\Program;
use App\Models\Testimonial;
use App\Models\News;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Default Admin User
        User::firstOrCreate(
            ['email' => 'admin@tantiauniversity.com'],
            [
                'name'     => 'Administrator',
                'email'    => 'admin@tantiauniversity.com',
                'password' => Hash::make('admin@12345'),
            ]
        );

        // Academic Programs
        $programs = [
            // ALLIED HEALTH SCIENCES
            ['name' => 'Bachelor of Physiotherapy (BPT)', 'faculty' => 'allied_health', 'icon' => '🩺',
             'description' => 'Comprehensive 5-year degree with clinical postings at Jan Sewa Hospital.',
             'duration' => '5 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'blue', 'sort_order' => 1],

            ['name' => 'Master of Physiotherapy (MPT)', 'faculty' => 'allied_health', 'icon' => '🩺',
             'description' => 'Advanced postgraduate specialization in Orthopedics, Neurology & Sports Rehab.',
             'duration' => '2 Years', 'eligibility' => 'BPT Degree',
             'course_count' => 1, 'color_class' => 'blue', 'sort_order' => 2],

            ['name' => 'BASLP (Audiology & Speech-Language Pathology)', 'faculty' => 'allied_health', 'icon' => '👂',
             'description' => 'Specialized clinical degree in speech, hearing, and communication diagnostics.',
             'duration' => '4 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'teal', 'sort_order' => 3],

            ['name' => 'Bachelor of Medical Laboratory Science (BMLS)', 'faculty' => 'allied_health', 'icon' => '🔬',
             'description' => 'Professional degree in diagnostic pathology, biochemistry & clinical microbiology.',
             'duration' => '3 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'teal', 'sort_order' => 4],

            ['name' => 'Bachelor of Optometry (B.Optom.)', 'faculty' => 'allied_health', 'icon' => '👁️',
             'description' => 'Professional vision diagnostics, contact lens practice & ocular therapeutics.',
             'duration' => '3 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'blue', 'sort_order' => 5],

            ['name' => 'Bachelor of Radiology & Imaging Technology (BMRIT)', 'faculty' => 'allied_health', 'icon' => '🩻',
             'description' => 'Hands-on imaging tech training in MRI, CT-Scan, X-Ray & Ultrasound diagnostics.',
             'duration' => '3 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'purple', 'sort_order' => 6],

            // NURSING
            ['name' => 'B.Sc. Nursing', 'faculty' => 'nursing', 'icon' => '👩‍⚕️',
             'description' => 'INC recognized 4-year degree with clinical rotation at multi-specialty hospital.',
             'duration' => '4 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'gold', 'sort_order' => 7],

            ['name' => 'Post Basic B.Sc. Nursing', 'faculty' => 'nursing', 'icon' => '🏥',
             'description' => 'Degree completion program designed for registered GNM nurses.',
             'duration' => '2 Years', 'eligibility' => 'GNM + 10+2',
             'course_count' => 1, 'color_class' => 'gold', 'sort_order' => 8],

            ['name' => 'M.Sc. Nursing', 'faculty' => 'nursing', 'icon' => '💉',
             'description' => 'Postgraduate specialization in Medical-Surgical, Pediatrics & Community Nursing.',
             'duration' => '2 Years', 'eligibility' => 'B.Sc. Nursing',
             'course_count' => 1, 'color_class' => 'gold', 'sort_order' => 9],

            // PHARMACY
            ['name' => 'B.Pharmacy', 'faculty' => 'pharmacy', 'icon' => '💊',
             'description' => 'PCI approved 4-year degree in pharmaceutical chemistry & drug formulation.',
             'duration' => '4 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'orange', 'sort_order' => 10],

            ['name' => 'D.Pharmacy', 'faculty' => 'pharmacy', 'icon' => '🧪',
             'description' => '2-year diploma empowering students for clinical & retail pharmacy practice.',
             'duration' => '2 Years', 'eligibility' => '10+2 (PCB)',
             'course_count' => 1, 'color_class' => 'orange', 'sort_order' => 11],

            // AGRICULTURE
            ['name' => 'M.Sc. Agriculture', 'faculty' => 'agriculture', 'icon' => '🌱',
             'description' => 'Advanced postgraduate research in Agronomy, Soil Science & Plant Genetics.',
             'duration' => '2 Years', 'eligibility' => 'B.Sc. (Agri.)',
             'course_count' => 1, 'color_class' => 'gold', 'sort_order' => 12],

            ['name' => 'MBA (Agribusiness)', 'faculty' => 'agriculture', 'icon' => '🌾',
             'description' => 'Specialized management program in agricultural supply chains & rural enterprise.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'gold', 'sort_order' => 13],

            // MANAGEMENT
            ['name' => 'MBA (General)', 'faculty' => 'management', 'icon' => '💼',
             'description' => 'Master of Business Administration in Finance, Marketing, HR & Global Business.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'red', 'sort_order' => 14],

            ['name' => 'MBA (Hospital Management)', 'faculty' => 'management', 'icon' => '🏥',
             'description' => 'Specialized leadership degree in healthcare administration & hospital operations.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'red', 'sort_order' => 15],

            // LAW
            ['name' => 'BA LLB (Hons.)', 'faculty' => 'law', 'icon' => '⚖️',
             'description' => '5-year integrated dual degree combining Arts and BCI recognized Legal education.',
             'duration' => '5 Years', 'eligibility' => '10+2',
             'course_count' => 1, 'color_class' => 'purple', 'sort_order' => 16],

            ['name' => 'LLB', 'faculty' => 'law', 'icon' => '📜',
             'description' => '3-year professional law degree featuring moot court training & internships.',
             'duration' => '3 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'purple', 'sort_order' => 17],

            // PHYSICAL EDUCATION & YOGA
            ['name' => 'Bachelor of Physical Education & Sports (BPES)', 'faculty' => 'sports', 'icon' => '⚽',
             'description' => 'Degree program in sports science, athletic training & physical fitness.',
             'duration' => '3 Years', 'eligibility' => '10+2',
             'course_count' => 1, 'color_class' => 'teal', 'sort_order' => 18],

            ['name' => 'Master of Yoga', 'faculty' => 'sports', 'icon' => '🧘',
             'description' => 'Comprehensive postgraduate degree in Yogic Science & holistic wellness.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'teal', 'sort_order' => 19],

            // BASIC SCIENCES
            ['name' => 'M.Sc. (Maths / Physics / Chemistry / Botany / Zoology)', 'faculty' => 'basic_sciences', 'icon' => '🧪',
             'description' => 'Postgraduate science degree with advanced research specialization choices.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'blue', 'sort_order' => 20],

            // ARTS & CRAFTS
            ['name' => 'Bachelor of Arts (BA)', 'faculty' => 'arts', 'icon' => '📚',
             'description' => 'Undergraduate program in Literature, History, Economics & Social Sciences.',
             'duration' => '3 Years', 'eligibility' => '10+2',
             'course_count' => 1, 'color_class' => 'orange', 'sort_order' => 21],

            ['name' => 'Master of Arts (MA)', 'faculty' => 'arts', 'icon' => '✍️',
             'description' => 'Postgraduate degree in Humanities, Political Science & Languages.',
             'duration' => '2 Years', 'eligibility' => 'Graduation',
             'course_count' => 1, 'color_class' => 'orange', 'sort_order' => 22],

            // RESEARCH
            ['name' => 'Ph.D (All Subjects)', 'faculty' => 'research', 'icon' => '🎓',
             'description' => 'Doctoral research across Medical, Pharmacy, Law, Management & Sciences.',
             'duration' => '3 Years', 'eligibility' => 'Post Graduation',
             'course_count' => 1, 'color_class' => 'red', 'sort_order' => 23],
        ];

        Program::truncate();
        foreach ($programs as $p) {
            Program::create($p);
        }

        // Testimonials
        $testimonials = [
            ['name' => 'Ahmed Al-Rashid', 'country' => 'Jordan', 'program' => 'BPT – Final Year',
             'avatar_initials' => 'AA', 'rating' => 5,
             'quote' => 'Tantia University provided an extraordinary environment for international students. Clinical training at Jan Sewa Hospital is unmatched.'],

            ['name' => 'Priya Sharma', 'country' => 'Nepal', 'program' => 'MBA (Hospital Mgmt) – Class of 2024',
             'avatar_initials' => 'PS', 'rating' => 5,
             'quote' => 'The International Office assisted me with housing, visa extensions, and academic guidance from day one. Truly a home away from home!'],

            ['name' => 'Emmanuel Osei', 'country' => 'Ghana', 'program' => 'B.Pharmacy – Final Year',
             'avatar_initials' => 'EO', 'rating' => 5,
             'quote' => 'Studying pharmacy at Tantia has opened global career opportunities for me. The faculty and international desk are immensely supportive.'],

            ['name' => 'Fatima Al-Zahra', 'country' => 'UAE', 'program' => 'B.Sc. Nursing – 3rd Year',
             'avatar_initials' => 'FZ', 'rating' => 5,
             'quote' => 'The campus multicultural environment is vibrant. The nursing program offers incredible hands-on patient exposure.'],
        ];

        Testimonial::truncate();
        foreach ($testimonials as $i => $t) {
            Testimonial::create(array_merge($t, ['sort_order' => $i + 1]));
        }

        // News & Announcements
        $news = [
            ['title' => 'International Admissions 2026–27 Officially Open for Global Applicants',
             'slug' => 'international-admissions-2026-27-open',
             'excerpt' => 'The International Office opens online applications for students from SAARC, Middle East, Africa & global regions with merit scholarship grants.',
             'is_featured' => true, 'published_at' => now()->subDays(2)],

            ['title' => 'Global Student Orientation & Cultural Welcome Hosted at Campus',
             'slug' => 'global-student-orientation-cultural-welcome',
             'excerpt' => 'Tantia University welcomed new international cohorts with dedicated orientation on AIU equivalence, visa protocols, and campus housing.',
             'is_featured' => false, 'published_at' => now()->subDays(5)],

            ['title' => 'Jan Sewa Hospital Expands Clinical Training Labs for Allied Health Programs',
             'slug' => 'jan-sewa-hospital-expands-clinical-labs',
             'excerpt' => 'New diagnostic units dedicated to BPT, BMLS, and BMRIT international trainees inaugurated at university hospital facility.',
             'is_featured' => false, 'published_at' => now()->subDays(10)],

            ['title' => 'Merit Scholarships Announced for SAARC & African Applicants',
             'slug' => 'merit-scholarships-saarc-african-applicants',
             'excerpt' => 'Up to 100% tuition waiver grants announced for high-achieving international candidates applying for 2026–27 academic intake.',
             'is_featured' => false, 'published_at' => now()->subDays(15)],
        ];

        News::truncate();
        foreach ($news as $n) {
            News::create(array_merge($n, ['is_active' => true]));
        }
    }
}
