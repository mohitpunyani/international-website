import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Campus() {
    return (
        <MainLayout currentPage="campus">
            <Head title="Campus – International Office – Tantia University" />

            <div className="page-hero">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage: "url('/images/campus_students.jpg')" }} />
                <div className="container relative z-10">
                    <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / Campus</div>
                    <h1>International Student <em>Campus Life</em></h1>
                    <p>Experience an inclusive, multicultural campus with dedicated global student support and modern learning infrastructure.</p>
                </div>
            </div>

            {/* International Support System */}
            <section className="section-pad bg-[#0D2137]">
                <div className="container">
                    <div className="section-header centered">
                        <div className="section-label" style={{ color: 'rgba(255,255,255,0.5)' }}>For International Applicants</div>
                        <h2 className="section-title" style={{ color: 'white' }}>Complete <em className="text-[#C9A84C] italic">Support System</em></h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: '🛂', title: 'Visa Assistance', text: 'Dedicated visa support team to help with student visa application and documentation.' },
                            { icon: '🛬', title: 'Airport Arrival Care', text: 'Complimentary arrival pickup assistance for international students.' },
                            { icon: '🌐', title: 'Global Orientation', text: 'English-medium instruction with dedicated international student advisors.' },
                            { icon: '🏥', title: 'Medical Support', text: 'On-campus medical support and healthcare assistance for foreign students.' },
                        ].map(s => (
                            <div key={s.title} className="fade-up bg-white/5 border border-white/10 rounded-2xl p-7 text-center hover:bg-white/8 transition-colors">
                                <div className="text-4xl mb-4">{s.icon}</div>
                                <h3 className="font-bold text-white text-lg mb-2">{s.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">{s.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Approved Hostel Fee Structure (Session 2026–2027) */}
            <section className="section-pad bg-[#F8F9FC]" id="hostel-fees">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Residential Facilities</div>
                        <h2 className="section-title">International Student <span>Hostel &amp; Mess Fees</span></h2>
                        <p className="section-subtitle">
                            Official Approved Fee Structure for Academic Session 2026–2027 (Including 4-Time Mess Charges).
                        </p>
                    </div>

                    {/* Room Type Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {[
                            {
                                type: '3 Seater Non-AC',
                                badge: 'Budget Friendly',
                                badgeColor: 'bg-blue-100 text-blue-800',
                                usd: '$1,040',
                                inr: '₹1,00,000',
                                desc: 'Comfortable triple-sharing room with individual study tables and wardrobes.',
                                features: ['Non-AC Room', '4-Time Daily Mess Included', 'High-Speed Wi-Fi', '24/7 Security & Hot Water']
                            },
                            {
                                type: '2 Seater Non-AC',
                                badge: 'Popular Choice',
                                badgeColor: 'bg-emerald-100 text-emerald-800',
                                usd: '$1,560',
                                inr: '₹1,50,000',
                                desc: 'Spacious twin sharing room offering privacy and dedicated personal study space.',
                                features: ['Non-AC Room', '4-Time Daily Mess Included', 'High-Speed Wi-Fi', 'Dedicated Wardrobes']
                            },
                            {
                                type: '3 Seater AC Room',
                                badge: 'Climate Controlled',
                                badgeColor: 'bg-purple-100 text-purple-800',
                                usd: '$1,560',
                                inr: '₹1,50,000',
                                desc: 'Triple sharing air-conditioned room ensuring complete comfort all year round.',
                                features: ['Climate Controlled AC', '4-Time Daily Mess Included', 'Study Stations', 'Daily Housekeeping']
                            },
                            {
                                type: '2 Seater AC Room',
                                badge: 'Executive Comfort',
                                badgeColor: 'bg-amber-100 text-amber-800',
                                usd: '$2,080',
                                inr: '₹2,00,000',
                                desc: 'Premium twin sharing air-conditioned suite with maximum comfort and amenities.',
                                features: ['Premium Climate AC', '4-Time Daily Mess Included', 'Balcony / Garden View', 'Priority Maintenance']
                            },
                        ].map(c => (
                            <div key={c.type} className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                                <span className={`text-xs font-bold px-3 py-1 rounded-full w-max mb-4 ${c.badgeColor}`}>{c.badge}</span>
                                <h3 className="font-bold text-lg text-[#0D2137] mb-1">{c.type}</h3>
                                <p className="text-gray-500 text-xs mb-4">{c.desc}</p>
                                <div className="border-y border-gray-100 py-3 my-2">
                                    <div className="text-2xl font-black text-[#0D2137]">{c.usd} <span className="text-xs font-normal text-gray-500">USD / yr</span></div>
                                    <div className="text-xs font-bold text-emerald-700 mt-0.5">{c.inr} INR / year</div>
                                </div>
                                <ul className="space-y-2 mt-3 mb-6 text-xs text-gray-600 flex-1">
                                    {c.features.map(f => (
                                        <li key={f} className="flex items-center gap-2">
                                            <span className="text-emerald-500 font-bold">✓</span> {f}
                                        </li>
                                    ))}
                                </ul>
                                <div className="text-center pt-2">
                                    <Link href="/admissions" className="btn btn-outline btn-sm w-full text-xs">Reserve Room →</Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Official Decision Table */}
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-gray-100 max-w-4xl mx-auto">
                        <div className="flex items-center justify-between flex-wrap gap-4 mb-4">
                            <div>
                                <h3 className="text-lg font-bold text-[#0D2137]">Summary of Approved Hostel Fee Structure</h3>
                                <p className="text-xs text-gray-500">Applicable for international admissions admitted in academic session 2026–2027.</p>
                            </div>
                            <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1.5 rounded-full">
                                Mess Charges Included
                            </span>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead>
                                    <tr className="bg-[#0D2137] text-white">
                                        <th className="p-3.5 rounded-l-xl">S.No.</th>
                                        <th className="p-3.5">Residence Type</th>
                                        <th className="p-3.5">Annual Fee (USD)</th>
                                        <th className="p-3.5">Annual Fee (INR)</th>
                                        <th className="p-3.5 rounded-r-xl">Mess Policy</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100 text-gray-700">
                                    <tr>
                                        <td className="p-3.5 font-medium">1</td>
                                        <td className="p-3.5 font-bold text-[#0D2137]">3 Seater Non-AC Room</td>
                                        <td className="p-3.5 font-extrabold text-emerald-700">USD 1,040/-</td>
                                        <td className="p-3.5 font-bold text-gray-700">₹1,00,000/-</td>
                                        <td className="p-3.5"><span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Inclusive</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-medium">2</td>
                                        <td className="p-3.5 font-bold text-[#0D2137]">2 Seater Non-AC Room</td>
                                        <td className="p-3.5 font-extrabold text-emerald-700">USD 1,560/-</td>
                                        <td className="p-3.5 font-bold text-gray-700">₹1,50,000/-</td>
                                        <td className="p-3.5"><span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Inclusive</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-medium">3</td>
                                        <td className="p-3.5 font-bold text-[#0D2137]">3 Seater AC Room</td>
                                        <td className="p-3.5 font-extrabold text-emerald-700">USD 1,560/-</td>
                                        <td className="p-3.5 font-bold text-gray-700">₹1,50,000/-</td>
                                        <td className="p-3.5"><span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Inclusive</span></td>
                                    </tr>
                                    <tr>
                                        <td className="p-3.5 font-medium">4</td>
                                        <td className="p-3.5 font-bold text-[#0D2137]">2 Seater AC Room</td>
                                        <td className="p-3.5 font-extrabold text-emerald-700">USD 2,080/-</td>
                                        <td className="p-3.5 font-bold text-gray-700">₹2,00,000/-</td>
                                        <td className="p-3.5"><span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Inclusive</span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* Campus & International Delegation Gallery */}
            <section className="section-pad bg-white">
                <div className="container">
                    <div className="section-header centered fade-up">
                        <div className="section-label">Campus Gallery</div>
                        <h2 className="section-title">Life &amp; Moments at <span>Tantia University</span></h2>
                        <p className="section-subtitle">Real moments welcoming our international delegations, students, and vibrant campus life.</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-10">
                        {/* Photo 1: Bouquet Welcome */}
                        <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300">
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src="/images/international_welcome_bouquet.jpg"
                                    alt="International Delegation Welcome at Tantia University Campus"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[#0D2137] mb-2">Welcome Ceremony at University Entrance</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    University representatives giving a traditional bouquet reception to international students and guests outside the Tantia University faculty campus.
                                </p>
                            </div>
                        </div>

                        {/* Photo 2: Office Welcome */}
                        <div className="group rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300">
                            <div className="h-80 overflow-hidden relative">
                                <img
                                    src="/images/international_delegation_office.jpg"
                                    alt="International Delegates Meeting at Leadership Office"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                              
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-lg text-[#0D2137] mb-2">Executive Desk Welcome &amp; Orientation</h3>
                                <p className="text-gray-600 text-xs leading-relaxed">
                                    Warm academic interaction and felicitation ceremony inside the administrative office, marking the beginning of an enriching educational journey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
