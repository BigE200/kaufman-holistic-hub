import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Bot, ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [platformsOpen, setPlatformsOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => location.pathname === path;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPlatformsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setPlatformsOpen(false);
  }, [location.pathname]);

  const platforms = [
    {
      name: 'Holistically Rx',
      description: 'Whole-person integrative care',
      href: 'https://holisticallyrx.com',
      external: true,
      color: 'text-medical-primary',
    },
    {
      name: 'Docs of Cannabis',
      description: 'Safe, compliant cannabis guidance',
      href: 'https://docsofcannabis.com',
      external: true,
      color: 'text-wellness-green',
    },
    {
      name: 'HRx Supplement Dispensary',
      description: 'Professional-grade supplements via Fullscript',
      href: 'https://us.fullscript.com/welcome/ckaufman1759530062',
      external: true,
      color: 'text-trust-blue',
    },
  ];

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Content Library', path: '/content-library' },
    { name: 'Resources', path: '/resources' },
  ];

  return (
    <nav
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-medical-gray-100 shadow-sm"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 py-3">

          {/* Logo — clean wordmark */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="Dr. Erick Kaufman homepage"
          >
            <div className="w-9 h-9 bg-medical-primary rounded-full flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
              <span className="text-white font-bold text-sm" aria-hidden="true">EK</span>
            </div>
            <div className="leading-tight">
              <span className="block font-bold text-professional-navy text-lg tracking-tight">
                Erick Kaufman
              </span>
              <span className="block text-xs text-medical-gray-500 font-medium tracking-widest uppercase">
                MD · Medical Scientist
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">

            {/* Standard nav links */}
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'text-medical-primary bg-medical-primary/5'
                    : 'text-medical-gray-600 hover:text-medical-primary hover:bg-medical-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}

            {/* Our Platforms dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setPlatformsOpen(!platformsOpen)}
                className={`flex items-center gap-1 px-3 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
                  platformsOpen
                    ? 'text-medical-primary bg-medical-primary/5'
                    : 'text-medical-gray-600 hover:text-medical-primary hover:bg-medical-gray-50'
                }`}
                aria-expanded={platformsOpen}
                aria-haspopup="true"
              >
                Our Platforms
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${platformsOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {/* Dropdown panel */}
              {platformsOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-medical-gray-100 py-2 z-50 animate-fade-in">
                  {platforms.map((platform) => (
                    <a
                      key={platform.name}
                      href={platform.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 px-4 py-3 hover:bg-medical-gray-50 transition-colors group"
                      onClick={() => setPlatformsOpen(false)}
                    >
                      <div className="flex-1">
                        <div className={`font-semibold text-sm ${platform.color} group-hover:underline`}>
                          {platform.name}
                        </div>
                        <div className="text-xs text-medical-gray-500 mt-0.5">
                          {platform.description}
                        </div>
                      </div>
                      <ExternalLink className="h-3.5 w-3.5 text-medical-gray-400 mt-0.5 flex-shrink-0" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Ask AI Erick CTA */}
            <Button
              onClick={() => {
                const event = new CustomEvent('openAIChat');
                window.dispatchEvent(event);
              }}
              variant="outline"
              className="ml-2 border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white text-sm px-4 py-2 transition-colors"
            >
              <Bot className="mr-2 h-4 w-4" />
              Ask AI Erick
            </Button>

            {/* Primary CTA */}
            <Button
              asChild
              className="ml-1 bg-medical-primary text-white hover:bg-medical-accent text-sm px-5 py-2 shadow-sm"
            >
              <Link to="/services">Find a Provider</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-medical-gray-600"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-medical-gray-100">
            <div className="px-2 pt-2 pb-4 space-y-1">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? 'text-medical-primary bg-medical-primary/5'
                      : 'text-medical-gray-600 hover:text-medical-primary hover:bg-medical-gray-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Platforms section */}
              <div className="px-4 pt-2 pb-1">
                <p className="text-xs font-semibold text-medical-gray-400 uppercase tracking-widest mb-2">
                  Our Platforms
                </p>
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-sm font-medium text-medical-gray-600 hover:text-medical-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{platform.name}</span>
                    <ExternalLink className="h-3.5 w-3.5 text-medical-gray-400" />
                  </a>
                ))}
              </div>

              <div className="pt-2 space-y-2 px-2">
                <Button
                  onClick={() => {
                    const event = new CustomEvent('openAIChat');
                    window.dispatchEvent(event);
                    setIsOpen(false);
                  }}
                  variant="outline"
                  className="w-full border-medical-primary text-medical-primary hover:bg-medical-primary hover:text-white"
                >
                  <Bot className="mr-2 h-4 w-4" />
                  Ask AI Erick
                </Button>
                <Button asChild className="w-full bg-medical-primary text-white hover:bg-medical-accent">
                  <Link to="/services" onClick={() => setIsOpen(false)}>
                    Find a Provider
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
