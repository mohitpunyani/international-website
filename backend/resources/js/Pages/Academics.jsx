import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const FACULTIES = [
    { key: 'allied_health', label: '🩺 Allied Health', color: '#1565C0' },
    { key: 'nursing',       label: '👩‍⚕️ Nursing',       color: '#C9A84C' },
    { key: 'pharmacy',      label: '💊 Pharmacy',      color: '#F97316' },
    { key: 'agriculture',   label: '🌱 Agriculture',   color: '#10B981' },
    { key: 'management',    label: '💼 Management',    color: '#E63946' },
    { key: 'law',           label: '⚖️ Law',           color: '#7C3AED' },
    { key: 'sports',        label: '⚽ Physical Ed & Yoga', color: '#00BFA5' },
    { key: 'basic_sciences',label: '🧪 Basic Sciences', color: '#3B82F6' },
    { key: 'arts',          label: '📚 Arts & Crafts',  color: '#8B5CF6' },
    { key: 'research',      label: '🎓 Ph.D Research',  color: '#D97706' },
];

const EXACT_COURSES = {
    allied_health: [
        { name: 'Bachelor of Physiotherapy (BPT)', level: 'UG Degree', duration: '5 Years', eligibility: '10+2 (PCB)', origFee: '$2,000', scholarship: '50% OFF', finalFee: '$1,000 / year' },
        { name: 'Master of Physiotherapy (MPT)', level: 'PG Degree', duration: '2 Years', eligibility: 'BPT Degree', origFee: '$2,200', scholarship: '50% OFF', finalFee: '$1,100 / year' },
        { name: 'BASLP (Audiology & Speech-Language Pathology)', level: 'UG Degree', duration: '4 Years', eligibility: '10+2 (PCB)', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
        { name: 'Bachelor of Medical Laboratory Science (BMLS)', level: 'UG Degree', duration: '3 Years', eligibility: '10+2 (PCB)', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
        { name: 'Bachelor of Optometry (B.Optom.)', level: 'UG Degree', duration: '3 Years', eligibility: '10+2 (PCB)', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
        { name: 'Bachelor of Medical Radiology & Imaging Technology (BMRIT)', level: 'UG Degree', duration: '3 Years', eligibility: '10+2 (PCB)', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
    ],
    nursing: [
        { name: 'B.Sc. Nursing', level: 'UG Degree', duration: '4 Years', eligibility: '10+2 (PCB)', origFee: '$3,000', scholarship: '50% OFF', finalFee: '$1,500 / year' },
        { name: 'Post Basic B.Sc. Nursing', level: 'UG Degree', duration: '2 Years', eligibility: 'GNM + 10+2', origFee: '$2,000', scholarship: '50% OFF', finalFee: '$1,000 / year' },
        { name: 'M.Sc. Nursing', level: 'PG Degree', duration: '2 Years', eligibility: 'B.Sc. Nursing', origFee: '$2,800', scholarship: '50% OFF', finalFee: '$1,400 / year' },
    ],
    pharmacy: [
        { name: 'B.Pharmacy', level: 'UG Degree', duration: '4 Years', eligibility: '10+2 (PCB)', origFee: '$2,000', scholarship: '50% OFF', finalFee: '$1,000 / year' },
        { name: 'D.Pharmacy', level: 'Diploma', duration: '2 Years', eligibility: '10+2 (PCB)', origFee: '$1,500', scholarship: '50% OFF', finalFee: '$750 / year' },
    ],
    agriculture: [
        { name: 'M.Sc. Agriculture', level: 'PG Degree', duration: '2 Years', eligibility: 'B.Sc. (Agri.)', origFee: '$1,800', scholarship: '50% OFF', finalFee: '$900 / year' },
        { name: 'MBA (Agribusiness)', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
    ],
    management: [
        { name: 'MBA (General)', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
        { name: 'MBA (Hospital Management)', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,600', scholarship: '50% OFF', finalFee: '$800 / year' },
    ],
    law: [
        { name: 'BA LLB (Hons.)', level: 'UG Dual Degree', duration: '5 Years', eligibility: '10+2', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
        { name: 'LLB', level: 'PG Professional', duration: '3 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '50% OFF', finalFee: '$500 / year' },
    ],
    sports: [
        { name: 'Bachelor of Physical Education & Sports (BPES)', level: 'UG Degree', duration: '3 Years', eligibility: '10+2', origFee: '$1,000', scholarship: '70% OFF', finalFee: '$300 / year' },
        { name: 'Master of Yoga', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '70% OFF', finalFee: '$300 / year' },
    ],
    basic_sciences: [
        { name: 'M.Sc. (Mathematics / Zoology / Botany / Chemistry / Physics)', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '70% OFF', finalFee: '$300 / year' },
    ],
    arts: [
        { name: 'Bachelor of Arts (BA)', level: 'UG Degree', duration: '3 Years', eligibility: '10+2', origFee: '$1,000', scholarship: '70% OFF', finalFee: '$300 / year' },
        { name: 'Master of Arts (MA)', level: 'PG Degree', duration: '2 Years', eligibility: 'Graduation', origFee: '$1,000', scholarship: '70% OFF', finalFee: '$300 / year' },
    ],
    research: [
        { name: 'Ph.D (All Subjects)', level: 'Doctoral', duration: '3 Years', eligibility: 'Post Graduation', origFee: '$2,500', scholarship: 'Standard', finalFee: '$2,500 / year' },
    ],
};

function getCourseFeeInfo(course) {
    if (!course) return { origFee: '$2,000', scholarship: '50% OFF', finalFee: '$1,000 / year' };

    if (course.origFee && course.scholarship && course.finalFee) {
        return {
            origFee: course.origFee,
            scholarship: course.scholarship,
            finalFee: course.finalFee,
        };
    }

    for (const facultyKey in EXACT_COURSES) {
        const found = EXACT_COURSES[facultyKey].find(c => c.name.toLowerCase() === course.name.toLowerCase());
        if (found) {
            return {
                origFee: found.origFee,
                scholarship: found.scholarship,
                finalFee: found.finalFee,
            };
        }
    }

    const origFee = course.origFee || '$2,000';
    const scholarship = course.scholarship || '50% OFF';
    const finalFee = course.finalFee || '$1,000 / year';

    return { origFee, scholarship, finalFee };
}

export default function Academics({ programsByFaculty = {} }) {
    const [activeTab, setActiveTab] = useState('allied_health');
    const [selectedCourse, setSelectedCourse] = useState(null);

    const rawCourses = programsByFaculty[activeTab] || EXACT_COURSES[activeTab] || [];
    const activeFaculty = FACULTIES.find(f => f.key === activeTab);

    return (
        <MainLayout currentPage="academics">
            <Head title="Official Programs & Fee Structure – Tantia University" />

            {/* Page Hero */}
            <div className="page-hero">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/hero_campus.jpg')" }} />
                <div className="container relative z-10">
                    <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / Academics</div>
                    <div className="flex gap-3 flex-wrap mb-4">
                        <span className="badge badge-gold">🌐 International Student Office</span>
                        <span className="badge badge-white">Exact Brochure Portfolio</span>
                    </div>
                    <h1>Official Degree<br /><em>Programs &amp; Fee Structure</em></h1>
                </div>
            </div>

            {/* Faculty Tabs */}
            <section className="section-pad bg-[#F8F9FC]">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Academic Faculties</div>
                        <h2 className="section-title">Explore Official <span>Faculties</span></h2>
                    </div>
                    {/* Tab bar */}
                    <div className="flex gap-2.5 flex-wrap justify-center mb-10">
                        {FACULTIES.map(f => (
                            <button
                                key={f.key}
                                onClick={() => setActiveTab(f.key)}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-full border-2 font-bold text-sm transition-all duration-200 ${
                                    activeTab === f.key
                                        ? 'bg-[#0D2137] border-[#0D2137] text-white shadow-lg scale-105'
                                        : 'bg-white border-gray-200 text-gray-700 hover:border-[#0D2137] hover:text-[#0D2137]'
                                }`}
                                id={f.key}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>

                    {/* Faculty header banner */}
                    <div className="bg-gradient-to-br from-[#0D2137] to-[#1565C0] rounded-3xl p-10 mb-10 grid md:grid-cols-[auto_1fr_auto] gap-8 items-center text-white shadow-xl">
                        <div className="w-24 h-24 bg-white/10 rounded-2xl flex items-center justify-center text-5xl backdrop-blur-md">
                            {activeFaculty?.label.split(' ')[0]}
                        </div>
                        <div>
                            <div className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-1">Official Tantia Curriculum</div>
                            <h2 className="text-3xl font-bold text-white mb-2">{activeFaculty?.label.split(' ').slice(1).join(' ')}</h2>
                            <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
                                Practical-oriented degree and diploma courses designed for international standards and AIU recognized qualifications.
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 text-center shrink-0 bg-white/10 px-6 py-4 rounded-2xl backdrop-blur-md">
                            <div className="text-4xl font-black text-[#C9A84C]">{rawCourses.length}</div>
                            <div className="text-xs text-white/70 uppercase tracking-wider font-semibold">Active Courses</div>
                        </div>
                    </div>

                    {/* Course Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {rawCourses.map((c, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedCourse(c)}
                                className="bg-white rounded-2xl p-7 border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:border-[#1565C0]/40"
                            >
                                <div>
                                    <div className="flex items-center justify-between gap-2 mb-4">
                                        <span className="text-[11px] font-black px-3 py-1 rounded-md bg-[#0D2137] text-[#C9A84C] uppercase tracking-wider">
                                            {c.level || 'Degree'}
                                        </span>
                                        <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-gray-100 text-gray-700">
                                            ⏱️ {c.duration}
                                        </span>
                                    </div>
                                    <h3 className="font-bold text-[#0D2137] text-lg mb-3 leading-snug group-hover:text-[#1565C0] transition-colors">
                                        {c.name}
                                    </h3>
                                    
                                    <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3.5 mb-4">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Eligibility Criteria</div>
                                        <div className="text-sm font-semibold text-emerald-950">🎓 {c.eligibility}</div>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-100 mt-2">
                                    <span className="text-xs text-[#1565C0] font-bold flex items-center gap-1 group-hover:underline">
                                        💰 View Fee Breakdown &rarr;
                                    </span>
                                    <Link
                                        href="/admissions"
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-[#0D2137] font-bold text-xs bg-gray-100 hover:bg-[#0D2137] hover:text-white px-3 py-1.5 rounded-lg transition-colors"
                                    >
                                        Apply Online →
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/admissions" className="btn btn-primary btn-lg">Apply for International Admissions →</Link>
                    </div>
                </div>
            </section>

            {/* Course Fee Detail Modal Popup */}
            {selectedCourse && (
                <div
                    className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setSelectedCourse(null)}
                >
                    <div
                        className="bg-white rounded-3xl max-w-lg w-full p-8 shadow-2xl relative border border-gray-100 transform transition-all scale-100"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close button */}
                        <button
                            onClick={() => setSelectedCourse(null)}
                            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 text-gray-500 hover:bg-[#0D2137] hover:text-white flex items-center justify-center font-bold text-lg transition-colors"
                        >
                            ✕
                        </button>

                        <div className="inline-block text-[11px] font-black px-3 py-1 rounded-md bg-[#0D2137] text-[#C9A84C] uppercase tracking-wider mb-3">
                            {selectedCourse.level || 'Degree Program'}
                        </div>

                        <h2 className="text-2xl font-bold text-[#0D2137] mb-2 pr-8">{selectedCourse.name}</h2>
                        <p className="text-sm text-gray-500 mb-6">Faculty of {activeFaculty?.label.split(' ').slice(1).join(' ')}</p>

                        {/* Details card */}
                        <div className="space-y-4 mb-6">
                            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                                <span className="text-xs text-gray-500 font-medium">Duration</span>
                                <span className="text-sm font-bold text-[#0D2137]">⏱️ {selectedCourse.duration}</span>
                            </div>
                            <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                                <span className="text-xs text-gray-500 font-medium">Eligibility</span>
                                <span className="text-sm font-bold text-[#0D2137]">🎓 {selectedCourse.eligibility}</span>
                            </div>

                            {/* Fee Card */}
                            {(() => {
                                const feeInfo = getCourseFeeInfo(selectedCourse);
                                return (
                                    <div className="bg-gradient-to-br from-[#0D2137] to-[#1565C0] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
                                        <div className="text-xs uppercase font-bold text-[#C9A84C] tracking-wider mb-2">Approved Fee Structure</div>
                                        
                                        <div className="flex items-baseline justify-between mb-3">
                                            <span className="text-xs text-white/70">Original Annual Fee:</span>
                                            <span className="text-sm text-white/60 line-through">{feeInfo.origFee} / year</span>
                                        </div>

                                        <div className="flex items-baseline justify-between mb-4 border-b border-white/10 pb-3">
                                            <span className="text-xs text-white/70">Scholarship Applied:</span>
                                            <span className="bg-[#C9A84C] text-[#0D2137] text-xs font-black px-2.5 py-0.5 rounded-full">
                                                {feeInfo.scholarship}
                                            </span>
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="text-[11px] text-white/70">Net Annual Payable Fee:</div>
                                                <div className="text-2xl font-black text-white">{feeInfo.finalFee}</div>
                                            </div>
                                            <div className="text-[10px] text-emerald-300 bg-emerald-950/50 px-2.5 py-1 rounded-lg border border-emerald-500/30">
                                                ✓ Approved 2026-27
                                            </div>
                                        </div>
                                    </div>
                                );
                            })()}
                        </div>

                        {/* Modal Action Buttons */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedCourse(null)}
                                className="btn border border-gray-300 text-gray-700 hover:bg-gray-100 flex-1 justify-center"
                            >
                                Close
                            </button>
                            <Link
                                href="/admissions"
                                className="btn btn-primary flex-1 justify-center"
                            >
                                Apply Now →
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </MainLayout>
    );
}

