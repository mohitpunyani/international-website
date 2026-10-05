import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="footer-grid">
                    <div>
                        <img src="/images/logo.png" alt="Tantia University Logo" className="h-14 w-auto mb-3 object-contain" />
                        <div className="footer-brand-name">Tantia University</div>
                        <div className="footer-brand-tagline">Excellence · Innovation · Achievement</div>
                        <p className="footer-desc">
                            A premier multidisciplinary institution shaping global leaders through world-class education &amp; research since 1999.
                        </p>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul>
                            {[
                                { href: '/about', label: 'About Us' },
                                { href: '/academics', label: 'Academics' },
                                { href: '/admissions', label: 'Admissions' },
                                { href: '/campus', label: 'Campus' },
                                { href: '/contact', label: 'Contact' },
                            ].map(l => (
                                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Contact</h4>
                        <ul>
                            <li><a href="#">📍 Sri Ganganagar, Rajasthan 335002</a></li>
                            <li><a href="mailto:dia@tantiauniversity.com">✉️ dia@tantiauniversity.com</a></li>
                            <li><a href="https://www.tantiauniversity.com" target="_blank" rel="noreferrer">🌐 tantiauniversity.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
           
        </footer>
    );
}
