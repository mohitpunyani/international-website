import { Head, Link, router } from '@inertiajs/react';

export default function Dashboard({ stats, recentApplications = [], recentInquiries = [] }) {
    const logout = () => router.post('/logout');

    return (
        <>
            <Head title="Admin Dashboard" />
            <div className="min-h-screen bg-[#F8F9FC]">
                {/* Admin Navbar */}
                <nav className="bg-[#0D2137] text-white px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <img src="/images/logo.png" alt="Logo" className="h-10 brightness-0 invert" />
                        <span className="font-bold">Tantia University — Admin</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/admin" className="text-white/70 hover:text-white text-sm">Dashboard</Link>
                        <Link href="/admin/applications" className="text-white/70 hover:text-white text-sm">Applications</Link>
                        <Link href="/admin/inquiries" className="text-white/70 hover:text-white text-sm">Inquiries</Link>
                        <Link href="/" className="text-white/70 hover:text-white text-sm">View Site</Link>
                        <button onClick={logout} className="text-red-400 hover:text-red-300 text-sm">Logout</button>
                    </div>
                </nav>

                <div className="max-w-7xl mx-auto px-8 py-10">
                    <h1 className="text-2xl font-bold text-[#0D2137] mb-8">Dashboard Overview</h1>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        {[
                            { label:'Total Applications', value: stats?.total_applications ?? 0, icon:'📋', color:'bg-blue-50 text-blue-700' },
                            { label:'Pending Applications', value: stats?.pending_applications ?? 0, icon:'⏳', color:'bg-yellow-50 text-yellow-700' },
                            { label:'Total Inquiries', value: stats?.total_inquiries ?? 0, icon:'✉️', color:'bg-green-50 text-green-700' },
                            { label:'New Inquiries', value: stats?.new_inquiries ?? 0, icon:'🔔', color:'bg-red-50 text-red-700' },
                        ].map(s => (
                            <div key={s.label} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-2xl">{s.icon}</span>
                                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${s.color}`}>{s.label}</span>
                                </div>
                                <div className="text-4xl font-black text-[#0D2137]">{s.value}</div>
                            </div>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Recent Applications */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                                <h2 className="font-bold text-[#0D2137]">Recent Applications</h2>
                                <Link href="/admin/applications" className="text-[#1565C0] text-sm font-semibold">View All →</Link>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {recentApplications.length ? recentApplications.map(a => (
                                    <div key={a.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50">
                                        <div>
                                            <div className="font-semibold text-sm text-[#0D2137]">{a.first_name} {a.last_name}</div>
                                            <div className="text-xs text-gray-400">{a.program_interest} · {a.country}</div>
                                        </div>
                                        <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                            a.status === 'pending' ? 'bg-yellow-100 text-yellow-700' :
                                            a.status === 'accepted' ? 'bg-green-100 text-green-700' :
                                            'bg-gray-100 text-gray-600'
                                        }`}>{a.status}</span>
                                    </div>
                                )) : <div className="px-6 py-8 text-center text-gray-400 text-sm">No applications yet.</div>}
                            </div>
                        </div>

                        {/* Recent Inquiries */}
                        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                                <h2 className="font-bold text-[#0D2137]">Recent Inquiries</h2>
                                <Link href="/admin/inquiries" className="text-[#1565C0] text-sm font-semibold">View All →</Link>
                            </div>
                            <div className="divide-y divide-gray-50">
                                {recentInquiries.length ? recentInquiries.map(i => (
                                    <div key={i.id} className="px-6 py-4 hover:bg-gray-50">
                                        <div className="flex items-center justify-between">
                                            <div className="font-semibold text-sm text-[#0D2137]">{i.name}</div>
                                            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${i.status === 'new' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}>{i.status}</span>
                                        </div>
                                        <div className="text-xs text-gray-400">{i.inquiry_type} · {i.subject}</div>
                                    </div>
                                )) : <div className="px-6 py-8 text-center text-gray-400 text-sm">No inquiries yet.</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
