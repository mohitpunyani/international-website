import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const COUNTRIES = ['India','Nepal','Bangladesh','Sri Lanka','Nigeria','Kenya','UAE','Saudi Arabia','Afghanistan','Jordan','Ghana','Ethiopia','Pakistan','Other'];

export default function Admissions({ programs = [] }) {
    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        first_name: '', last_name: '', email: '', phone: '',
        country: '', program_interest: '', highest_qualification: '',
        marks_gpa: '', message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admissions/apply', {
            onSuccess: () => reset(),
        });
    };

    const PROGRAM_LIST = programs.length ? programs.map(p => p.name) : [
        'Bachelor of Physiotherapy (BPT)',
        'Master of Physiotherapy (MPT)',
        'BASLP (Audiology & Speech Pathology)',
        'Bachelor of Medical Lab Science (BMLS)',
        'Bachelor of Optometry (B.Optom.)',
        'BMRIT (Radiology & Imaging Tech)',
        'B.Sc. Nursing',
        'Post Basic B.Sc. Nursing',
        'M.Sc. Nursing',
        'B.Pharmacy',
        'D.Pharmacy',
        'MBA (General)',
        'MBA (Hospital Management)',
        'MBA (Agribusiness)',
        'BA LLB (Hons.)',
        'LLB',
        'BPES (Sports & Physical Education)',
        'Master of Yoga',
        'M.Sc. Agriculture',
        'M.Sc. Basic Sciences (Maths/Physics/Chemistry/Botany/Zoology)',
        'Bachelor of Arts (BA)',
        'Master of Arts (MA)',
        'Ph.D (All Subjects)',
        'Other',
    ];

    return (
        <MainLayout currentPage="admissions">
            <Head title="Admissions 2026-27 – Tantia University" />

            {/* Page Hero */}
            <div className="page-hero">
                <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('/images/campus_students.jpg')" }} />
                <div className="container relative z-10">
                    <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / Admissions</div>
                    <div className="flex gap-3 flex-wrap mb-5">
                        <span className="badge badge-gold">🌍 International Students</span>
                        <span className="badge badge-white">AIU Recognized</span>
                    </div>
                    <h1>Join Tantia<br /><em>Apply for Admissions 2026–27</em></h1>
                    <p>Your journey to world-class education begins here. Apply online and join students from 40+ countries at Tantia University.</p>
                    <div className="flex gap-3 mt-7 flex-wrap">
                        <a href="#apply-form" className="btn btn-primary btn-lg">Apply Online →</a>
                        <a href="#eligibility" className="btn btn-outline btn-lg">Check Eligibility</a>
                    </div>
                </div>
            </div>

            {/* Admission Steps */}
            <section className="section-pad bg-[#F8F9FC]">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">How to Apply</div>
                        <h2 className="section-title">Simple <span>4-Step</span> Admission Process</h2>
                        <p className="section-subtitle">International and domestic admissions made simple. Follow these steps to join Tantia University.</p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                        {[
                            { icon: '📋', title: 'Check Eligibility', text: 'Review program duration & requirements. 10+2 PCB for Allied Health/Nursing, Graduation for MBA/LLB.' },
                            { icon: '📝', title: 'Fill Application', text: 'Complete the online application form with personal, academic, and program preference details.' },
                            { icon: '📄', title: 'Submit Documents', text: 'Upload mark sheets, qualifying certificates, passport copy, and passport size photographs.' },
                            { icon: '🎓', title: 'Get Admission', text: 'Receive provisional admission letter, complete fee registration, and join our global campus.' },
                        ].map((step, i) => (
                            <div key={i} className="fade-up relative bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all">
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#C9A84C] to-[#E8C66A] text-[#0D2137] text-xs font-black px-3.5 py-1.5 rounded-full shadow-lg">
                                    0{i + 1}
                                </div>
                                <div className="text-5xl mb-4 mt-2">{step.icon}</div>
                                <div className="font-bold text-lg text-[#0D2137] mb-2">{step.title}</div>
                                <div className="text-sm text-gray-600 leading-relaxed">{step.text}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Eligibility */}
            <section className="section-pad bg-white" id="eligibility">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Requirements</div>
                        <h2 className="section-title">Program Duration &amp; <span>Eligibility</span></h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: '🩺 Allied Health, Nursing & Pharmacy', subtitle: 'BPT, BMLS, B.Optom, BMRIT, B.Sc. Nursing, B.Pharm',
                                border: '#1565C0',
                                items: [
                                    ['⏱️', 'Duration: 3 to 5 Years depending on specific degree'],
                                    ['🎓', '10+2 with Physics, Chemistry & Biology (PCB)'],
                                    ['📋', 'Minimum 45%–50% aggregate marks in qualifying 10+2'],
                                    ['🌐', 'AIU equivalence for international board students'],
                                ],
                            },
                            {
                                title: '💼 Management, Law, Sports & Sciences', subtitle: 'MBA, BA LLB, LLB, BPES, M.Sc, MA',
                                border: '#C9A84C',
                                items: [
                                    ['⏱️', 'Duration: 2 to 5 Years depending on UG/PG level'],
                                    ['🎓', 'MBA / LLB / M.Sc: Graduation in relevant discipline'],
                                    ['⚖️', 'BA LLB: 10+2 in any stream (BCI recognized)'],
                                    ['🧘', 'Master of Yoga / BPES: Graduation / 10+2 in any discipline'],
                                ],
                            },
                        ].map((card, i) => (
                            <div key={i} className={`fade-up bg-white rounded-3xl p-10 shadow-md border-t-[5px]`} style={{ borderTopColor: card.border }}>
                                <h3 className="font-bold text-xl text-[#0D2137] mb-1">{card.title}</h3>
                                <p className="text-sm text-gray-500 mb-5">{card.subtitle}</p>
                                <div className="flex flex-col gap-3">
                                    {card.items.map(([icon, text]) => (
                                        <div key={text} className="flex gap-3 items-start bg-[#F8F9FC] rounded-xl px-4 py-3.5">
                                            <span className="text-xl shrink-0">{icon}</span>
                                            <span className="text-sm text-[#0D2137] font-medium leading-snug">{text}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Fee Structure */}
            <section className="section-pad bg-[#F8F9FC]" id="fee-structure">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Approved Fee Structure 2025–26</div>
                        <h2 className="section-title">Official <span>International Student Fee Structure</span></h2>
                        <p className="section-subtitle">Annual tuition fees for international students with approved 50% &amp; 70% scholarships.</p>
                    </div>

                    {/* 50% Scholarship Table */}
                    <div className="mt-10 mb-4 flex items-center justify-between flex-wrap gap-3">
                        <h3 className="font-bold text-lg text-[#0D2137] flex items-center gap-2">
                            🎓 Standard Programs <span className="bg-sky-100 text-sky-800 text-xs font-semibold px-2.5 py-1 rounded-full">50% Scholarship Applied</span>
                        </h3>
                        <span className="text-xs text-gray-500">Fees in USD ($) / Year</span>
                    </div>
                    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white border border-gray-100 mb-12">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#0D2137] text-white">
                                    <th className="p-4 w-16 text-center font-semibold">S.No.</th>
                                    <th className="p-4 font-semibold">Course / Program</th>
                                    <th className="p-4 font-semibold">Original Annual Fee</th>
                                    <th className="p-4 font-semibold">Scholarship</th>
                                    <th className="p-4 font-semibold">After 50% Scholarship</th>
                                    <th className="p-4 text-center font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                {[
                                    { id: 1,  name: 'BPT (Bachelor of Physiotherapy)', orig: '$2,000', fee: '$1,000' },
                                    { id: 2,  name: 'MPT (Master of Physiotherapy)', orig: '$2,200', fee: '$1,100' },
                                    { id: 3,  name: 'BASLP (Audiology & Speech Language Pathology)', orig: '$1,000', fee: '$500' },
                                    { id: 4,  name: 'BMLS (Medical Lab Sciences)', orig: '$1,000', fee: '$500' },
                                    { id: 5,  name: 'B.Optom. (Bachelor of Optometry)', orig: '$1,000', fee: '$500' },
                                    { id: 6,  name: 'BMRIT (Medical Radiology & Imaging Tech)', orig: '$1,000', fee: '$500' },
                                    { id: 7,  name: 'B.Sc. Nursing', orig: '$3,000', fee: '$1,500' },
                                    { id: 8,  name: 'Post Basic B.Sc. Nursing', orig: '$2,000', fee: '$1,000' },
                                    { id: 9,  name: 'M.Sc. Nursing', orig: '$2,800', fee: '$1,400' },
                                    { id: 10, name: 'M.Sc. Agriculture', orig: '$1,800', fee: '$900' },
                                    { id: 11, name: 'MBA (Agribusiness)', orig: '$1,000', fee: '$500' },
                                    { id: 12, name: 'B.Pharmacy', orig: '$2,000', fee: '$1,000' },
                                    { id: 13, name: 'D.Pharmacy', orig: '$1,500', fee: '$750' },
                                    { id: 14, name: 'MBA (General)', orig: '$1,000', fee: '$500' },
                                    { id: 15, name: 'MBA (Hospital Management)', orig: '$1,600', fee: '$800' },
                                    { id: 16, name: 'BA LLB (Hons.)', orig: '$1,000', fee: '$500' },
                                    { id: 17, name: 'LLB', orig: '$1,000', fee: '$500' },
                                ].map(row => (
                                    <tr key={row.id} className="hover:bg-gray-50/80 transition-colors">
                                        <td className="p-4 text-center font-medium text-gray-500">{row.id}</td>
                                        <td className="p-4 font-bold text-[#0D2137]">{row.name}</td>
                                        <td className="p-4 text-gray-500 line-through">{row.orig} / yr</td>
                                        <td className="p-4"><span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">50% OFF</span></td>
                                        <td className="p-4 font-extrabold text-teal-700 text-base">{row.fee} / yr</td>
                                        <td className="p-4 text-center">
                                            <a href="#apply-form" className="btn btn-primary btn-sm px-3.5 py-1.5 text-xs">Apply Now</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* 70% Scholarship Table */}
                    <div className="mt-8 mb-4 flex items-center justify-between flex-wrap gap-3">
                        <h3 className="font-bold text-lg text-[#0D2137] flex items-center gap-2">
                            🌟 Special Programs <span className="bg-amber-100 text-amber-900 text-xs font-bold px-2.5 py-1 rounded-full">70% Special Scholarship</span>
                        </h3>
                        <span className="text-xs text-gray-500">Fees in USD ($) / Year</span>
                    </div>
                    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white border border-gray-100">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-slate-900 text-white">
                                    <th className="p-4 w-16 text-center font-semibold">S.No.</th>
                                    <th className="p-4 font-semibold">Course / Program</th>
                                    <th className="p-4 font-semibold">Original Annual Fee</th>
                                    <th className="p-4 font-semibold">Scholarship</th>
                                    <th className="p-4 font-semibold">After 70% Scholarship</th>
                                    <th className="p-4 text-center font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                {[
                                    { id: 1, name: 'BPES (Physical Education & Sports)', orig: '$1,000', fee: '$300' },
                                    { id: 2, name: 'Master of Yoga', orig: '$1,000', fee: '$300' },
                                    { id: 3, name: 'M.Sc. (Maths / Zoology / Botany / Chem / Physics)', orig: '$1,000', fee: '$300' },
                                    { id: 4, name: 'Bachelor of Arts (BA)', orig: '$1,000', fee: '$300' },
                                    { id: 5, name: 'Master of Arts (MA)', orig: '$1,000', fee: '$300' },
                                ].map(row => (
                                    <tr key={row.id} className="hover:bg-amber-50/50 transition-colors">
                                        <td className="p-4 text-center font-medium text-gray-500">{row.id}</td>
                                        <td className="p-4 font-bold text-[#0D2137]">{row.name}</td>
                                        <td className="p-4 text-gray-500 line-through">{row.orig} / yr</td>
                                        <td className="p-4"><span className="bg-amber-100 text-amber-800 text-xs font-bold px-2.5 py-1 rounded-full">70% OFF</span></td>
                                        <td className="p-4 font-extrabold text-amber-700 text-base">{row.fee} / yr</td>
                                        <td className="p-4 text-center">
                                            <a href="#apply-form" className="btn btn-primary btn-sm px-3.5 py-1.5 text-xs">Apply Now</a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Official Hostel & Mess Fee Structure (Academic Session 2026–2027) */}
                    <div className="mt-12 mb-4 flex items-center justify-between flex-wrap gap-3">
                        <div>
                            <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full inline-block mb-1">
                                Session 2026–2027
                            </div>
                            <h3 className="font-bold text-xl text-[#0D2137] flex items-center gap-2">
                                🏠 International Student Hostel &amp; Mess Fees
                            </h3>
                        </div>
                        <span className="text-xs font-semibold text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200">
                            ✓ Inclusive of Mess Charges
                        </span>
                    </div>

                    <div className="overflow-x-auto rounded-2xl shadow-lg bg-white border border-gray-100">
                        <table className="w-full text-left text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#0D2137] text-white">
                                    <th className="p-4 w-16 text-center font-semibold">S.No.</th>
                                    <th className="p-4 font-semibold">Residence Type</th>
                                    <th className="p-4 font-semibold">Room Specifications</th>
                                    <th className="p-4 font-semibold">Annual Fee (USD)</th>
                                    <th className="p-4 font-semibold">Annual Fee (INR)</th>
                                    <th className="p-4 text-center font-semibold">Mess Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                {[
                                    { id: 1, type: '3 Seater Non-AC Room', spec: 'Shared (3 students) · Dedicated Wardrobe & Study Desk', usd: 'USD 1,040/-', inr: '₹1,00,000/-' },
                                    { id: 2, type: '2 Seater Non-AC Room', spec: 'Twin Sharing · Dedicated Wardrobe & Study Desk', usd: 'USD 1,560/-', inr: '₹1,50,000/-' },
                                    { id: 3, type: '3 Seater AC Room', spec: 'Shared (3 students) · Climate Controlled AC Room', usd: 'USD 1,560/-', inr: '₹1,50,000/-' },
                                    { id: 4, type: '2 Seater AC Room', spec: 'Twin Sharing · Climate Controlled AC · Maximum Comfort', usd: 'USD 2,080/-', inr: '₹2,00,000/-' },
                                ].map(row => (
                                    <tr key={row.id} className="hover:bg-emerald-50/40 transition-colors">
                                        <td className="p-4 text-center font-medium text-gray-500">{row.id}</td>
                                        <td className="p-4 font-bold text-[#0D2137]">{row.type}</td>
                                        <td className="p-4 text-xs text-gray-500">{row.spec}</td>
                                        <td className="p-4 font-extrabold text-emerald-700 text-base">{row.usd} <span className="text-xs font-normal text-gray-500">/ yr</span></td>
                                        <td className="p-4 font-bold text-gray-700">{row.inr} <span className="text-xs font-normal text-gray-500">/ yr</span></td>
                                        <td className="p-4 text-center">
                                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2.5 py-1 rounded-full">Included</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </section>

            {/* APPLICATION FORM — Real Inertia form */}
            <section className="section-pad bg-[#F8F9FC]" id="apply-form">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Apply Online</div>
                        <h2 className="section-title">Start Your <span>Admission Application</span></h2>
                        <p className="section-subtitle">Fill out the official form below and our international admissions counselor will reach out within 24 hours.</p>
                    </div>

                    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-10 md:p-14 shadow-2xl border border-gray-100 fade-up">
                        {wasSuccessful ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🎉</div>
                                <h3 className="text-2xl font-bold text-[#0D2137] mb-3">Application Submitted Successfully!</h3>
                                <p className="text-gray-600">Our admissions department will review your application and contact you within 24 hours.</p>
                                <button onClick={() => window.location.reload()} className="btn btn-primary btn-lg mt-6">Submit Another Application</button>
                            </div>
                        ) : (
                            <form onSubmit={submit}>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="first_name">First Name *</label>
                                        <input className={`form-input ${errors.first_name ? 'border-red-400' : ''}`} id="first_name" type="text" placeholder="John"
                                            value={data.first_name} onChange={e => setData('first_name', e.target.value)} />
                                        {errors.first_name && <p className="form-error">{errors.first_name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="last_name">Last Name *</label>
                                        <input className={`form-input ${errors.last_name ? 'border-red-400' : ''}`} id="last_name" type="text" placeholder="Smith"
                                            value={data.last_name} onChange={e => setData('last_name', e.target.value)} />
                                        {errors.last_name && <p className="form-error">{errors.last_name}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="email">Email Address *</label>
                                        <input className={`form-input ${errors.email ? 'border-red-400' : ''}`} id="email" type="email" placeholder="john@example.com"
                                            value={data.email} onChange={e => setData('email', e.target.value)} />
                                        {errors.email && <p className="form-error">{errors.email}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="phone">Phone / WhatsApp *</label>
                                        <input className={`form-input ${errors.phone ? 'border-red-400' : ''}`} id="phone" type="tel" placeholder="+91 98765 43210"
                                            value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                        {errors.phone && <p className="form-error">{errors.phone}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="country">Country of Residence *</label>
                                        <select className={`form-select ${errors.country ? 'border-red-400' : ''}`} id="country"
                                            value={data.country} onChange={e => setData('country', e.target.value)}>
                                            <option value="">Select Country</option>
                                            {COUNTRIES.map(c => <option key={c}>{c}</option>)}
                                        </select>
                                        {errors.country && <p className="form-error">{errors.country}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="program_interest">Program of Interest *</label>
                                        <select className={`form-select ${errors.program_interest ? 'border-red-400' : ''}`} id="program_interest"
                                            value={data.program_interest} onChange={e => setData('program_interest', e.target.value)}>
                                            <option value="">Select Official Program</option>
                                            {PROGRAM_LIST.map(p => <option key={p}>{p}</option>)}
                                        </select>
                                        {errors.program_interest && <p className="form-error">{errors.program_interest}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="highest_qualification">Highest Qualification *</label>
                                        <input className={`form-input ${errors.highest_qualification ? 'border-red-400' : ''}`} id="highest_qualification"
                                            placeholder="e.g. 10+2 PCB, Graduation, A-Levels"
                                            value={data.highest_qualification} onChange={e => setData('highest_qualification', e.target.value)} />
                                        {errors.highest_qualification && <p className="form-error">{errors.highest_qualification}</p>}
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="marks_gpa">Marks / Percentage / GPA</label>
                                        <input className="form-input" id="marks_gpa" placeholder="e.g. 78% or 3.6 GPA"
                                            value={data.marks_gpa} onChange={e => setData('marks_gpa', e.target.value)} />
                                    </div>
                                    <div className="form-group md:col-span-2">
                                        <label className="form-label" htmlFor="message">Additional Message</label>
                                        <textarea className="form-textarea" id="message"
                                            placeholder="Mention your specialization interest, scholarship query, or any questions..."
                                            value={data.message} onChange={e => setData('message', e.target.value)} />
                                    </div>
                                    <div className="md:col-span-2">
                                        <button type="submit" disabled={processing}
                                            className="btn btn-primary btn-lg w-full justify-center">
                                            {processing ? '⏳ Submitting Application...' : 'Submit Application Now →'}
                                        </button>
                                        <p className="text-center text-xs text-gray-400 mt-3">🔒 Official Tantia University Admission Portal. Your information is strictly confidential.</p>
                                    </div>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
