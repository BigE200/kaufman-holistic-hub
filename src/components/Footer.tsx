import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-medical-gray-50 border-t border-medical-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-medical-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">EK</span>
              </div>
              <span className="font-semibold text-professional-navy text-lg">
                Dr. Erick Kaufman, MD
              </span>
            </div>
            <p className="text-medical-gray-600 mb-6 max-w-md">
              Pioneering integrative medicine and alternative therapies through patient-centered care, 
              transparency, and innovative telehealth solutions.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-semibold text-professional-navy mb-3">
                Stay Updated on Healthcare Innovation
              </h4>
              <div className="flex space-x-2">
                <Input 
                  placeholder="Enter your email"
                  className="flex-1"
                />
                <Button className="medical-button-primary">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-professional-navy mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-medical-gray-600 hover:text-medical-primary">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-medical-gray-600 hover:text-medical-primary">
                  About
                </Link>
              </li>
              <li>
                <Link to="/content-library" className="text-medical-gray-600 hover:text-medical-primary">
                  Content Library
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-medical-gray-600 hover:text-medical-primary">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-medical-gray-600 hover:text-medical-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Professional Links */}
          <div>
            <h4 className="font-semibold text-professional-navy mb-4">Professional</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://holisticallyrx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-gray-600 hover:text-medical-primary"
                >
                  Holistically Rx
                </a>
              </li>
              <li>
                <a 
                  href="https://docsofcannabis.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-medical-gray-600 hover:text-medical-primary"
                >
                  Docs of Cannabis
                </a>
              </li>
              <li>
                <Link to="/privacy" className="text-medical-gray-600 hover:text-medical-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-medical-gray-600 hover:text-medical-primary">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-medical-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-medical-gray-600 text-sm">
            © 2024 Dr. Erick Kaufman, MD. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://www.linkedin.com/in/c-erick-kaufman-md-32a76b26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-gray-600 hover:text-trust-blue transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-medical-gray-600 hover:text-trust-blue transition-colors"
            >
              <Youtube className="h-5 w-5" />
            </a>
            <a
              href="mailto:contact@drerickkaufman.com"
              className="text-medical-gray-600 hover:text-trust-blue transition-colors"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;