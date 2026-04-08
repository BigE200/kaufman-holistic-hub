import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-professional-navy text-white">
      {/* Main Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand Column */}
          <div className="md:col-span-4">
            <div className="flex items-center space-x-3 mb-5">
              <div className="w-9 h-9 bg-medical-primary rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-sm">EK</span>
              </div>
              <span className="font-bold text-white text-lg leading-tight">
                Dr. Erick Kaufman, MD
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Medical scientist and healthcare systems builder. Connecting patients with vetted integrative medicine and cannabis care providers — Accessible, Affordable, Authoritative, and Patient-Centered.
            </p>
            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@drerickkaufman.com"
                aria-label="Email"
                className="text-white/50 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Spacer */}
          <div className="hidden md:block md:col-span-1" />

          {/* Site Links */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Home', to: '/' },
                { label: 'About Dr. Kaufman', to: '/about' },
                { label: 'Content Library', to: '/content-library' },
                { label: 'Resources', to: '/resources' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platforms */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Our Platforms
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/holistically-rx"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Holistically Rx
                </Link>
              </li>
              <li>
                <Link
                  to="/docs-of-cannabis"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Docs of Cannabis
                </Link>
              </li>
              <li>
                <Link
                  to="/supplements"
                  className="text-white/60 hover:text-white text-sm transition-colors"
                >
                  Supplement Dispensary
                </Link>
              </li>
              <li>
                <a
                  href="https://holisticallyrx.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  HRx Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://docsofcannabis.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
                >
                  DOC Website
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="md:col-span-2">
            <h4 className="text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Privacy Policy', to: '/privacy' },
                { label: 'Terms of Service', to: '/terms' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Compliance Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-white/30 text-xs leading-relaxed text-center max-w-4xl mx-auto mb-4">
            Dr. Erick Kaufman, MD is not currently in clinical practice and does not provide direct medical care, diagnosis, or prescriptions through this website. EKMD is a marketing, education, and referral platform that connects individuals with independent, licensed healthcare providers. Content on this site is for educational purposes only and does not constitute medical advice. Always consult a licensed healthcare professional before making any health decisions.
          </p>
          <p className="text-white/20 text-xs text-center">
            © {currentYear} Dr. Erick Kaufman, MD · EKMD LLC · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
