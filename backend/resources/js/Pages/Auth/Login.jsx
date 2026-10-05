import { Head } from '@inertiajs/react';
import { useForm } from '@inertiajs/react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '', password: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post('/admin/login');
    };

    return (
        <>
            <Head title="Admin Login" />
            <div className="min-h-screen bg-[#0D2137] flex items-center justify-center p-6">
                <div className="w-full max-w-md bg-white rounded-3xl p-10 shadow-2xl">
                    <div className="text-center mb-8">
                        <img src="/images/logo.png" alt="Tantia University" className="h-16 mx-auto mb-4" />
                        <h1 className="text-2xl font-bold text-[#0D2137]">Admin Login</h1>
                        <p className="text-gray-500 text-sm mt-1">Tantia University Management Portal</p>
                    </div>
                    <form onSubmit={submit} className="flex flex-col gap-5">
                        <div className="form-group">
                            <label className="form-label">Email</label>
                            <input className={`form-input ${errors.email ? 'border-red-400' : ''}`} type="email"
                                value={data.email} onChange={e => setData('email', e.target.value)} placeholder="admin@tantiauniversity.com" />
                            {errors.email && <p className="form-error">{errors.email}</p>}
                        </div>
                        <div className="form-group">
                            <label className="form-label">Password</label>
                            <input className={`form-input ${errors.password ? 'border-red-400' : ''}`} type="password"
                                value={data.password} onChange={e => setData('password', e.target.value)} placeholder="••••••••" />
                            {errors.password && <p className="form-error">{errors.password}</p>}
                        </div>
                        <button type="submit" disabled={processing} className="btn btn-primary btn-lg justify-center mt-2">
                            {processing ? 'Logging in...' : 'Login →'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
