import { useState, useEffect, useRef } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';
import useCounter from '@/hooks/useCounter';

function StatCounter({ target, suffix = '' }) {
    const [triggered, setTriggered] = useState(false);
    const ref = useRef(null);
    const value = useCounter(target, 2000, triggered);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) { setTriggered(true); observer.disconnect(); }
        }, { threshold: 0.3 });
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, []);

    return <span ref={ref}>{value.toLocaleString()}{suffix}</span>;
}

const colorMap = {
    blue: 'bg-blue-100', gold: 'bg-yellow-100', teal: 'bg-teal-100',
    red: 'bg-red-100', purple: 'bg-purple-100', orange: 'bg-orange-100',
};
const borderMap = {
    blue: '#1565C0', gold: '#C9A84C', teal: '#00BFA5',
    red: '#E63946', purple: '#7C3AED', orange: '#F97316',
};

export default function Home({ programs = [], testimonials = [], featuredNews, recentNews = [] }) {
    const [heroLoaded, setHeroLoaded] = useState(false);

    useEffect(() => { setTimeout(() => setHeroLoaded(true), 100); }, []);

    const DISPLAY_PROGRAMS = programs.length ? programs : [
        { id:1, name:'Bachelor of Physiotherapy (BPT)', faculty:'allied_health', icon:'🩺', description:'5-year clinical degree with intensive hospital postings at Jan Sewa Hospital.', duration:'5 Years', eligibility:'10+2 (PCB)', color_class:'blue' },
        { id:2, name:'B.Sc. Nursing', faculty:'nursing', icon:'👩‍⚕️', description:'INC-recognized 4-year degree with clinical rotations in multi-specialty hospital.', duration:'4 Years', eligibility:'10+2 (PCB)', color_class:'gold' },
        { id:3, name:'B.Pharmacy', faculty:'pharmacy', icon:'💊', description:'PCI approved 4-year degree in pharmaceutical chemistry & drug formulation.', duration:'4 Years', eligibility:'10+2 (PCB)', color_class:'orange' },
        { id:4, name:'MBA (General & Hospital Mgmt)', faculty:'management', icon:'💼', description:'Master of Business Administration specializing in General & Hospital Management.', duration:'2 Years', eligibility:'Graduation', color_class:'red' },
        { id:5, name:'BA LLB (Hons.) & LLB', faculty:'law', icon:'⚖️', description:'BCI recognized 5-year integrated & 3-year law degrees with moot court training.', duration:'3-5 Years', eligibility:'10+2 / Graduation', color_class:'purple' },
        { id:6, name:'Bachelor of Physical Education & Sports (BPES)', faculty:'sports', icon:'⚽', description:'Degree program in sports science, athletic training & physical fitness.', duration:'3 Years', eligibility:'10+2', color_class:'teal' },
    ];

    return (
        <MainLayout currentPage="home">
            <Head title="International Office – Tantia University" />

            {/* ---- HERO ---- */}
            <section className="relative min-h-[88vh] flex items-center overflow-hidden bg-[#0D2137]">
                <div className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8s] ease-out ${heroLoaded ? 'scale-100' : 'scale-105'}`}
                    style={{ backgroundImage: "url('/images/campus_students.jpg')" }} />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D2137]/95 via-[#0D2137]/80 to-[#0D2137]/60" />

                <div className="container relative z-10 py-24">
                    <div className="grid lg:grid-cols-[1fr_340px] gap-12 items-center">
                        {/* Hero Content */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/15 border border-[#C9A84C]/40 rounded-full px-5 py-2 text-[#C9A84C] text-xs font-bold uppercase tracking-widest mb-6 backdrop-blur">
                                🌐 International Student Office · AIU Member · NAAC Accredited
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] mb-6">
                                World-Class Education for<br />
                                <span className="text-[#C9A84C] italic font-serif">International Students</span>
                            </h1>
                            <p className="text-white/80 text-lg leading-relaxed max-w-[580px] mb-8">
                                Welcoming students from 40+ nations. Explore official degree programs in Allied Health, Nursing, Pharmacy, Management, Law &amp; Sciences.
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <Link href="/admissions" className="btn btn-primary btn-lg">Apply for Admissions 2026–27 →</Link>
                                <Link href="/academics" className="btn btn-outline btn-lg">View Official Programs</Link>
                            </div>

                            {/* International Stats */}
                            {/* <div className="flex gap-8 flex-wrap mt-12 pt-8 border-t border-white/15">
                                {[
                                    {t:40,s:'+',l:'Countries Represented'},
                                    {t:1000,s:'+',l:'Global Students'},
                                    {t:23,s:'',l:'Official Programs'},
                                    {t:25,s:'+',l:'Years Excellence'}
                                ].map(m => (
                                    <div key={m.l}>
                                        <div className="text-3xl font-black text-[#C9A84C]">
                                            <StatCounter target={m.t} suffix={m.s} />
                                        </div>
                                        <div className="text-xs text-white/70 font-medium mt-0.5">{m.l}</div>
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* International Office Fast-Track Box */}
                        <div className="hidden lg:flex flex-col gap-4">
                            {[
                                { icon:'🎓', title:'AIU Recognized Degrees', text:'All degrees recognized globally and by Association of Indian Universities.' },
                                { icon:'🛂', title:'Visa & FRRO Guidance', text:'Dedicated international desk assistance for student visa & FRRO registration.' },
                                { icon:'🏥', title:'Jan Sewa Teaching Hospital', text:'Real clinical hospital training for Allied Health & Nursing candidates.' },
                            ].map(c => (
                                <div key={c.title} className="bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-6 text-white hover:bg-white/15 transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/20 text-[#C9A84C] flex items-center justify-center text-xl mb-3">{c.icon}</div>
                                    <div className="font-bold text-sm mb-1">{c.title}</div>
                                    <div className="text-xs text-white/70 leading-relaxed">{c.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- ACCREDITATION & RECOGNITION ---- */}
            <div className="py-7 bg-white border-y border-gray-100">
                <div className="container">
                    <div className="flex items-center gap-6 justify-between flex-wrap">
                        <span className="text-xs font-black tracking-widest uppercase text-gray-400">Global Recognition</span>
                        <div className="flex items-center gap-8 flex-wrap">
                            {[
                                ['🏛️','UGC Recognized'],
                                ['✅','NAAC Accredited'],
                                ['🌍','AIU Member'],
                                ['🩺','INC & PCI Approved'],
                                ['⚖️','BCI Approved'],
                            ].map(([icon, label]) => (
                                <div key={label} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                                    <span className="text-lg">{icon}</span>
                                    <span>{label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ---- OFFICIAL PROGRAMS SECTION ---- */}
            <section className="section-pad bg-[#F8F9FC]">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Academic Portfolio</div>
                        <h2 className="section-title">Official <span>International Programs</span></h2>
                        <p className="section-subtitle">Choose from verified degree &amp; diploma programs with exact duration and eligibility criteria.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {DISPLAY_PROGRAMS.slice(0, 6).map((p, i) => (
                            <a
                                key={p.id}
                                href={`/academics#${p.faculty}`}
                                className="bg-white rounded-2xl p-7 shadow-md hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col gap-3 no-underline border-t-4"
                                style={{ borderTopColor: borderMap[p.color_class] || '#1565C0' }}
                            >
                                <div className="flex items-center justify-between">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${colorMap[p.color_class] || 'bg-blue-100'}`}>
                                        {p.icon}
                                    </div>
                                    <span className="text-[11px] font-bold text-[#1565C0] bg-[#1565C0]/10 px-3 py-1 rounded-full uppercase tracking-wider">
                                        {p.faculty ? p.faculty.replace('_', ' ') : 'Academic'}
                                    </span>
                                </div>
                                <div className="font-black text-[#0D2137] text-lg leading-snug">{p.name}</div>
                                <div className="text-xs text-gray-600 leading-relaxed flex-1">{p.description}</div>
                                
                                <div className="flex items-center gap-2 flex-wrap text-xs my-1">
                                    <span className="bg-gray-100 font-semibold px-2.5 py-1 rounded-md text-gray-700">⏱️ {p.duration}</span>
                                    {p.eligibility && (
                                        <span className="bg-emerald-50 font-semibold px-2.5 py-1 rounded-md text-emerald-800 border border-emerald-200/60">🎓 {p.eligibility}</span>
                                    )}
                                </div>

                                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                                    <span className="text-xs font-bold text-[#0D2137] flex items-center gap-1 hover:gap-2 transition-all">View Details →</span>
                                </div>
                            </a>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Link href="/academics" className="btn btn-royal btn-lg">View All 23 Official Programs →</Link>
                    </div>
                </div>
            </section>

            {/* ---- INTERNATIONAL CAMPUS & SUPPORT ---- */}
            <section className="section-pad bg-[#0D2137] text-white">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <div>
                            <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>Global Student Services</div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                Complete Support for <br />
                                <span className="text-[#C9A84C] italic font-serif">International Students</span>
                            </h2>
                            <div className="grid sm:grid-cols-2 gap-6 mt-8">
                                {[
                                    { icon: '✈️', title: 'Airport Pickup & Arrival Care', desc: 'Dedicated arrival team welcomes international students upon landing in India.' },
                                    { icon: '🏡', title: 'Dedicated International Hostels', desc: 'Secure AC & Non-AC residences with mess included (from $1,040 / year).' },
                                    { icon: '📋', title: 'FRRO & Visa Clearance Desk', desc: 'Full administrative guidance for student visa renewals and local registration.' },
                                    { icon: '🌍', title: 'Cultural Exchange & Events', desc: 'Celebrate international festivals, cultural days, and global student forums.' },
                                ].map(item => (
                                    <div key={item.title} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-xl shrink-0 text-[#C9A84C]">
                                            {item.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-white text-base mb-1">{item.title}</h3>
                                            <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ---- INTERNATIONAL DELEGATIONS & WELCOME GALLERY ---- */}
            <section className="section-pad bg-white">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Global Community &amp; Life</div>
                        <p className="section-subtitle">A warm Indian welcome awaits every international scholar joining Tantia University.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-8">
                        <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300">
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src="/images/international_welcome_bouquet.jpg"
                                    alt="International Delegation Welcome Ceremony at Tantia University"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                          
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[#0D2137] mb-2">Warm Reception at Tantia University Campus</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    University leadership warmly greeting international students and delegates upon arrival at the main campus entrance.
                                </p>
                            </div>
                        </div>

                        <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300">
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src="/images/international_delegation_office.jpg"
                                    alt="Global Student Interaction with University Leadership"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[#0D2137] mb-2">Leadership Desk &amp; International Desk Interaction</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    Special welcoming exchange and academic orientation meeting with international students at the university executive office.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* ---- CTA ---- */}
            <section className="py-20 bg-gradient-to-br from-[#0D2137] to-[#1565C0] text-center text-white relative overflow-hidden">
                <div className="container relative z-10">
                    <h2 className="text-3xl lg:text-4xl font-bold mb-4">Start Your Global Journey at Tantia University</h2>
                    <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">Applications for Academic Year 2026–27 are now open for international applicants.</p>
                    <div className="flex gap-4 justify-center flex-wrap">
                        <Link href="/admissions" className="btn btn-gold btn-lg">Apply Online Now →</Link>
                        <Link href="/contact" className="btn btn-outline btn-lg">Contact International Office</Link>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
