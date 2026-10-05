import { useEffect } from 'react';
import { usePage } from '@inertiajs/react';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';

export default function MainLayout({ children, currentPage = 'home', title }) {
    const { flash } = usePage().props;

    // Loader
    useEffect(() => {
        const loader = document.getElementById('global-loader');
        if (loader) {
            setTimeout(() => loader.classList.add('hidden'), 600);
        }
    }, []);

    // Intersection observer for animations
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.fade-up, .fade-in').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    });

    return (
        <>
            {/* Loader */}
            <div className="loader-screen" id="global-loader">
                <img src="/images/logo.png" alt="Tantia University" className="loader-logo" />
                <div className="loader-ring" />
                <div className="loader-text">Loading Excellence</div>
            </div>

            <Navbar currentPage={currentPage} />

            {/* Flash Messages */}
            {flash?.success && (
                <div className="container mt-4">
                    <div className="flash-success">
                        <span>✅</span> {flash.success}
                    </div>
                </div>
            )}
            {flash?.error && (
                <div className="container mt-4">
                    <div className="flash-error">
                        <span>❌</span> {flash.error}
                    </div>
                </div>
            )}

            <main>{children}</main>
            <Footer />
        </>
    );
}
