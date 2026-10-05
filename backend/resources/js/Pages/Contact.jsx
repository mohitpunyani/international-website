import { useState } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

const INQUIRY_TYPES = ['General', 'Admissions', 'Programs', 'Scholarships', 'Visa Support', 'Other'];

export default function Contact() {
    const [selectedType, setSelectedType] = useState('General');

    const { data, setData, post, processing, errors, wasSuccessful, reset } = useForm({
        name: '', email: '', phone: '',
        inquiry_type: 'General', subject: '', message: '',
    });

    const selectType = (t) => {
        setSelectedType(t);
        setData('inquiry_type', t);
    };

    const submit = (e) => {
        e.preventDefault();
        post('/contact', { onSuccess: () => reset() });
    };

    return (
        <MainLayout currentPage="contact">
            <Head title="Contact Us – International Office" />

            {/* Page Hero */}
            <div className="page-hero">
                <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{ backgroundImage:"url('/images/campus_students.jpg')" }} />
                <div className="container relative z-10">
                    <div className="page-hero-breadcrumb"><Link href="/">Home</Link> / Contact</div>
                    <h1>Get in <em>Touch</em></h1>
                    <p>Our International Admissions team is here to help you every step of the way. Reach out with any questions about programs, fees, visas, or scholarships.</p>
                </div>
            </div>

            <section className="section-pad bg-white">
                <div className="container">
                    <div className="grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">

                        {/* Contact Info */}
                        <div className="bg-gradient-to-br from-[#0D2137] to-[#1a3a5c] rounded-3xl p-12 text-white sticky top-24">
                            <h2 className="text-3xl font-bold text-white mb-2">
                                Reach <em className="text-[#C9A84C] italic">Our Office</em>
                            </h2>
                            <p className="text-white/75 text-sm leading-relaxed mb-9">
                                We're here Monday to Saturday. Expect a response within 24 hours.
                            </p>

                            {[
                                { icon:'📍', label:'Address', value:'Sri Ganganagar, Rajasthan 335002, India' },
                                { icon:'📞', label:'Phone', value:'+91-9414093094', href:'tel:+9414093094' },
                                { icon:'✉️', label:'Email', value:'dia@tantiauniversity.com', href:'mailto:dia@tantiauniversity.com' },
                                { icon:'🌐', label:'Website', value:'tantiauniversity.com', href:'https://www.tantiauniversity.com' },
                            ].map(d => (
                                <div key={d.label} className="flex gap-4 items-start bg-white/7 border border-white/10 rounded-xl p-5 mb-4 hover:bg-white/12 transition-colors">
                                    <span className="text-2xl shrink-0">{d.icon}</span>
                                    <div>
                                        <div className="text-[10px] font-black tracking-widest uppercase text-[#C9A84C] mb-1">{d.label}</div>
                                        {d.href
                                            ? <a href={d.href} className="text-white/90 text-sm">{d.value}</a>
                                            : <div className="text-white/90 text-sm">{d.value}</div>
                                        }
                                    </div>
                                </div>
                            ))}

                            <div className="mt-8 p-6 bg-[#C9A84C]/10 border border-[#C9A84C]/25 rounded-xl">
                                <div className="text-sm font-bold text-[#C9A84C] mb-3 tracking-wide">⏰ Office Hours</div>
                                {[
                                    ['Monday – Saturday', '9:00 AM – 5:00 PM'],
                                    
                                    ['Sunday', 'Closed'],
                                ].map(([day, hrs]) => (
                                    <div key={day} className="flex justify-between text-sm text-white/80 py-1.5 border-b border-white/6 last:border-0">
                                        <span>{day}</span><span>{hrs}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white rounded-3xl p-14 shadow-2xl border border-gray-100">
                            {wasSuccessful ? (
                                <div className="text-center py-12">
                                    <div className="text-6xl mb-4">✅</div>
                                    <h3 className="text-2xl font-bold text-[#0D2137] mb-3">Message Sent!</h3>
                                    <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                </div>
                            ) : (
                                <form onSubmit={submit}>
                                    <h3 className="text-2xl font-bold text-[#0D2137] mb-6">Send us a Message</h3>

                                    {/* Inquiry type selector */}
                                    <div className="mb-6">
                                        <label className="form-label mb-2 block">Inquiry Type *</label>
                                        <div className="flex gap-2 flex-wrap">
                                            {INQUIRY_TYPES.map(t => (
                                                <button key={t} type="button"
                                                    onClick={() => selectType(t)}
                                                    className={`px-4 py-2 rounded-full border-2 text-xs font-semibold transition-all ${selectedType === t ? 'border-[#1565C0] bg-[#1565C0]/8 text-[#1565C0]' : 'border-gray-200 text-gray-600 hover:border-[#1565C0]'}`}>
                                                    {t}
                                                </button>
                                            ))}
                                        </div>
                                        {errors.inquiry_type && <p className="form-error">{errors.inquiry_type}</p>}
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-5">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="c_name">Full Name *</label>
                                            <input className={`form-input ${errors.name ? 'border-red-400' : ''}`} id="c_name" placeholder="Your full name"
                                                value={data.name} onChange={e => setData('name', e.target.value)} />
                                            {errors.name && <p className="form-error">{errors.name}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="c_email">Email Address *</label>
                                            <input className={`form-input ${errors.email ? 'border-red-400' : ''}`} id="c_email" type="email" placeholder="your@email.com"
                                                value={data.email} onChange={e => setData('email', e.target.value)} />
                                            {errors.email && <p className="form-error">{errors.email}</p>}
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="c_phone">Phone Number</label>
                                            <input className="form-input" id="c_phone" type="tel" placeholder="+1 234 567 8900"
                                                value={data.phone} onChange={e => setData('phone', e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="c_subject">Subject *</label>
                                            <input className={`form-input ${errors.subject ? 'border-red-400' : ''}`} id="c_subject" placeholder="What is your inquiry about?"
                                                value={data.subject} onChange={e => setData('subject', e.target.value)} />
                                            {errors.subject && <p className="form-error">{errors.subject}</p>}
                                        </div>
                                        <div className="form-group md:col-span-2">
                                            <label className="form-label" htmlFor="c_message">Message *</label>
                                            <textarea className={`form-textarea h-36 ${errors.message ? 'border-red-400' : ''}`} id="c_message"
                                                placeholder="Write your message here..."
                                                value={data.message} onChange={e => setData('message', e.target.value)} />
                                            {errors.message && <p className="form-error">{errors.message}</p>}
                                        </div>
                                        <div className="md:col-span-2">
                                            <button type="submit" disabled={processing} className="btn btn-primary btn-lg w-full justify-center">
                                                {processing ? '⏳ Sending...' : 'Send Message →'}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
