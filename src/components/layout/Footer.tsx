"use client";
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#743f77] to-[#633567] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Description */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">FranklinOne</h3>
            <p className="text-white mb-4">
              A leading provider of integrated security, networking solutions and value added services.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-200 transition-colors duration-300">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-gray-200 transition-all duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/franklinone" className="text-white hover:text-gray-200 transition-all duration-300">
                  Who is FranklinOne
                </Link>
              </li>
              <li>
                <Link href="/what-we-do" className="text-white hover:text-gray-200 transition-all duration-300">
                  What We Do
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-white hover:text-gray-200 transition-all duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/solutions" className="text-white hover:text-gray-200 transition-all duration-300">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/vendors" className="text-white hover:text-gray-200 transition-all duration-300">
                  Vendors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="text-white hover:text-gray-200 transition-all duration-300">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>No. 37, Street 2011, Sen Sok, Phnom Penh, Cambodia</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>info@franklinone.com</span>
              </li>
              <li className="flex items-start">
                <svg className="h-6 w-6 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h2.28a2 2 0 011.94 1.515l.34 1.36a2 2 0 01-.45 1.95l-.7.7a16.001 16.001 0 006.36 6.36l.7-.7a2 2 0 011.95-.45l1.36.34A2 2 0 0121 16.72V19a2 2 0 01-2 2h-.01C7.61 21 3 16.39 3 10.01V9a2 2 0 012-2z" />
                </svg>
                <a href="tel:+85569308840" className="hover:underline">+855 69 308 840</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#9e5fa4] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white">© 2025 FranklinOne. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-4 text-white">
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-gray-200 transition-all duration-300">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;