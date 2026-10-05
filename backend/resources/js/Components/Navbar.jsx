import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';

export default function Navbar({ currentPage = 'home' }) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : '';
    }, [menuOpen]);

    const closeMenu = () => setMenuOpen(false);

    const links = [
        { href: '/',             name: 'home',         label: 'Home' },
        { href: '/about',        name: 'about',        label: 'About' },
        { href: '/academics',    name: 'academics',    label: 'Academics' },
        { href: '/admissions',   name: 'admissions',   label: 'Admissions' },
        { href: '/campus',       name: 'campus',       label: 'Campus' },
        { href: '/contact',      name: 'contact',      label: 'Contact' },
    ];

    return (
        <>
            {/* Announcement bar */}
            <div className="announcement-bar">
                🌍 <span>Applications Open 2025–26</span> — International Students from 40+ Countries Welcome!&nbsp;
                <Link href="/admissions">Apply Now →</Link>
            </div>

            {/* Nav overlay */}
            <div
                className={`nav-overlay ${menuOpen ? 'show' : ''}`}
                onClick={closeMenu}
            />

            {/* Navbar */}
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container">
                    <div className="navbar-inner">
                        <Link href="/" className="nav-brand">
                            <img src="/images/logo.png" alt="Tantia University Logo" />
                            <div>
                                <div className="university-name">Tantia University</div>
                                <div className="university-tagline">Sri Ganganagar, Rajasthan</div>
                            </div>
                        </Link>

                        <div className="nav-links">
                            {links.map(l => (
                                <Link
                                    key={l.name}
                                    href={l.href}
                                    className={currentPage === l.name ? 'active' : ''}
                                >
                                    {l.label}
                                </Link>
                            ))}
                        </div>

                        <div className="hidden lg:flex items-center gap-3">
                            <button className="btn-nav-outline" onClick={() => { window.location.href='/contact'; }}>
                                Enquire
                            </button>
                            <button className="btn-nav-primary" onClick={() => { window.location.href='/admissions'; }}>
                                Apply Now
                            </button>
                        </div>

                        {/* Hamburger */}
                        <button
                            className={`hamburger ${menuOpen ? 'open' : ''}`}
                            onClick={() => setMenuOpen(!menuOpen)}
                            aria-label="Menu"
                        >
                            <span className={`block w-6 h-0.5 bg-[#0D2137] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#0D2137] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                            <span className={`block w-6 h-0.5 bg-[#0D2137] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile nav */}
            <nav className={`mobile-nav ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation">
                <button className="mobile-nav-close" onClick={closeMenu} aria-label="Close">✕</button>
                {links.map(l => (
                    <Link key={l.name} href={l.href} onClick={closeMenu}>
                        {l.label}
                    </Link>
                ))}
                <Link href="/admissions" className="mobile-nav-apply" onClick={closeMenu}>
                    Apply Now 2025–26 →
                </Link>
            </nav>
        </>
    );
}
