import { useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const LEADERSHIP_MESSAGES = [
    {
        id: 'overview',
        role: 'University Overview',
        name: 'Tantia University',
        title: 'A Premier Institution for Higher Learning',
        badge: 'UGC Recognized u/s 12(f)',
        image: '/images/about_hero.jpg',
        quote: 'Established on 15 September 2013 under State Govt Act No. 32 of 2013 (Rajasthan), Tantia University stands as a beacon of academic excellence, offering 95+ undergraduate, postgraduate, and doctoral programs across Medicine, Agriculture, Law, Management, and Arts.',
        points: [
            '🏛️ State Private University enacted by Rajasthan State Legislature & UGC recognized.',
            '🎓 95+ multidisciplinary UG, PG & PhD programs with world-class faculty.',
            '🔬 Global research collaborations for sustainable innovation & societal progress.',
        ],
    },
    {
        id: 'founder',
        role: 'Founder Chairman',
        name: 'Dr. Shyam Sundar Tantia',
        title: 'Visionary & Philanthropist',
        badge: '1955 – Forever',
        image: '/images/founder.jpg',
        quote: 'A living icon of perseverance and philanthropy who established Tantia Hospital in 1982 and dedicated 22+ years to imparting quality medical, technical, and higher education to build centers of excellence.',
        points: [
            '🏥 Pioneer in regional healthcare starting with Tantia Hospital in 1982.',
            '💡 Built 15 constituent colleges in medical, paramedical, and technical fields.',
            '🌟 Transformed higher education vision into Tantia University in 2013.',
        ],
    },
    {
        id: 'chairperson',
        role: 'Chairperson',
        name: 'Smt. Sunita Tantia',
        title: 'Guiding Light & Mentor',
        badge: 'Leadership Desk',
        image: '/images/chairperson.jpg',
        quote: 'Continuing our beloved Founder\'s legacy with passion. We are committed to maintaining high academic standards, holistic multidisciplinary learning, and preparing students for rewarding global employment.',
        points: [
            '🌱 Deep focus on holistic medical, technical & multidisciplinary education.',
            '🏆 Dedicated to achieving high graduate placement & career success rates.',
            '🤝 Empowering students with academic excellence and social responsibility.',
        ],
    },
    {
        id: 'vice_chairperson',
        role: 'Vice Chairperson',
        name: 'Dr. Mohit Tantia',
        title: 'Innovator & Academic Leader',
        badge: 'Executive Leadership',
        image: '/images/vice_chairperson.jpg',
        quote: 'Tantia University is a platform where minds are ignited, ideas are nurtured, and students transform into compassionate leaders who serve society with knowledge, integrity, and empathy.',
        points: [
            '🩺 Advancing healthcare through 500-bed teaching hospital & medical colleges.',
            '🌾 Promoting sustainable agriculture & community outreach initiatives.',
            '🚀 Transforming students into global leaders, innovators & change-makers.',
        ],
    },
    {
        id: 'registrar',
        role: 'Registrar',
        name: 'Dr. Vinod Kumar Sharma',
        title: 'Registrar & Academic Operations',
        badge: 'Academic Administration',
        image: '/images/registrar.jpg',
        quote: 'Academic excellence is built not only through curriculum and faculty, but also through strong administrative support. The Office of the Registrar ensures smooth, transparent, and student-friendly academic operations across the university.',
        points: [
            '📜 Streamlining academic calendars, admissions & regulatory compliance.',
            '💻 Implementing digital solutions for data management & student support.',
            '🤝 Fostering institutional growth & responsive administrative framework.',
        ],
    },
    {
        id: 'coe',
        role: 'Controller of Examination',
        name: 'Dr. Rajender Godara',
        title: 'Controller of Examinations',
        badge: 'Evaluation & Standards',
        image: '/images/coe.jpg',
        quote: 'Examinations form the cornerstone of academic evaluation. We are committed towards conducting all examination-related activities with transparency, fairness, and utmost confidentiality.',
        points: [
            '🔒 Rigorous pre-examination planning & confidential evaluation systems.',
            '📲 Digital registration, admit cards & prompt result declarations.',
            '🎯 Student-centric grievance redressal & academic integrity.',
        ],
    },
    {
        id: 'cvo',
        role: 'Chief Vigilance Officer',
        name: 'Dr. Saurabh Garg',
        // title: 'Chief Vigilance Officer',
        badge: 'Ethics & Governance',
        image: '/images/cvo.jpg',
        quote: 'The CVO and Vigilance Unit are responsible for ensuring absolute transparency, ethical conduct, and preventing malpractices across all faculties and administrative offices of Tantia University.',
        points: [
            '⚖️ Ensuring total transparency & ethical governance across all faculties.',
            '🛡️ Prevention, detection & robust grievance redressal framework.',
            '🔍 Promoting accountability, institutional integrity & open feedback.',
        ],
    },
];

const OTHER_GOVERNANCE = [
    { role: 'Chief Patron Desk', title: 'Visionary Guidance', msg: 'Steering the university towards global academic standards and institutional integrity.' },
    { role: 'President Desk', title: 'Academic Administration', msg: 'Fostering research-driven learning and interdisciplinary academic growth.' },
    { role: 'IQAC Cell', title: 'Quality Assurance', msg: 'Continuous evaluation and enhancement of teaching, learning, and infrastructure standards.' },
];

export default function About() {
    const [activeMsg, setActiveMsg] = useState('overview');
    const currentMsg = LEADERSHIP_MESSAGES.find(m => m.id === activeMsg);

    return (
        <MainLayout currentPage="about">
            <Head title="About Us & Leadership Messages – Tantia University" />

            {/* Page Hero */}
            <div className="page-hero">
                <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('/images/about_hero.jpg')" }} />
                <div className="container relative z-10">
                    <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / About Us</div>
                    <div className="flex gap-3 flex-wrap mb-4">
                        <span className="badge badge-gold">Est. 2013 (Act No. 32)</span>
                        <span className="badge badge-white">UGC Recognized u/s 12(f)</span>
                    </div>
                    <h1>About Tantia University<br /><em>&amp; Leadership Messages</em></h1>
                    <p>Discover our institution\'s history, vision, and inspiring leadership messages guiding global education.</p>
                </div>
            </div>

            {/* Main Leadership Tabs Section */}
            <section className="section-pad bg-[#F8F9FC]">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">University Leadership</div>
                        <h2 className="section-title">Messages from <span>Our Leadership</span></h2>
                        <p className="section-subtitle">Select a leadership desk to read their message and vision for Tantia University.</p>
                    </div>

                    {/* Navigation Pills */}
                    <div className="flex gap-3 flex-wrap justify-center mb-12">
                        {LEADERSHIP_MESSAGES.map(m => (
                            <button
                                key={m.id}
                                onClick={() => setActiveMsg(m.id)}
                                className={`px-6 py-3 rounded-full font-bold text-sm transition-all duration-200 shadow-sm ${
                                    activeMsg === m.id
                                        ? 'bg-[#0D2137] text-white shadow-lg scale-105'
                                        : 'bg-white text-gray-700 hover:bg-[#0D2137]/10'
                                }`}
                            >
                                {m.role}
                            </button>
                        ))}
                    </div>

                    {/* Message Details Display */}
                    {currentMsg && (
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl grid md:grid-cols-[280px_1fr] gap-10 items-center fade-up">
                            <div className="text-center md:text-left shrink-0">
                                <div className="w-56 h-72 md:w-full md:h-80 rounded-2xl overflow-hidden bg-gray-50 shadow-lg mx-auto mb-4 border-2 border-[#C9A84C]/40 flex items-center justify-center">
                                    <img
                                        src={currentMsg.image}
                                        alt={currentMsg.name}
                                        className="w-full h-full object-cover object-top"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/images/about_hero.jpg';
                                        }}
                                    />
                                </div>
                                <span className="bg-amber-100 text-amber-900 text-xs font-black px-3 py-1 rounded-full inline-block mb-2">
                                    {currentMsg.badge}
                                </span>
                                <h3 className="font-bold text-xl text-[#0D2137]">{currentMsg.name}</h3>
                                <p className="text-xs font-semibold text-gray-500">{currentMsg.role} · {currentMsg.title}</p>
                            </div>

                            <div>
                                <div className="text-xs font-bold uppercase tracking-widest text-[#C9A84C] mb-2">Official Statement</div>
                                <h3 className="text-2xl font-bold text-[#0D2137] mb-4">{currentMsg.title}</h3>
                                
                                <blockquote className="text-gray-700 text-base leading-relaxed italic bg-gray-50 p-6 rounded-2xl border-l-4 border-[#0D2137] mb-6">
                                    "{currentMsg.quote}"
                                </blockquote>

                                <div className="space-y-2.5">
                                    {currentMsg.points.map((pt, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-sm font-medium text-gray-700 bg-emerald-50/60 px-4 py-2.5 rounded-xl border border-emerald-100">
                                            <span>{pt}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>


        </MainLayout>
    );
}

