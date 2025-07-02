// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[#F5F5F5] text-black py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* INFO Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">INFO</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:text-gray-300">Terms of Service</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">Privacy Policy</Link></li>
                        <li><Link href="#" className="hover:text-gray-300">Shipping Policy</Link></li>
                    </ul>
                </div>

                {/* PRICING/ABOUT/CONTACTS Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">PRICING / ABOUT / CONTACTS</h3>
                    <ul className="space-y-2">
                        <li><Link href="/pricing" className="hover:text-gray-300">Pricing</Link></li>
                        <li><Link href="/about" className="hover:text-gray-300">About Us</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300">Contact Us</Link></li>
                    </ul>
                </div>

                {/* LANGUAGES Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">LANGUAGES</h3>
                    <div className="flex space-x-4">
                        <button className="hover:text-gray-300">ENG</button>
                        <button className="hover:text-gray-300">ESP</button>
                        <button className="hover:text-gray-300">SVE</button>
                    </div>
                </div>

                {/* TECHNOLOGIES Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">TECHNOLOGIES</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center space-x-2">
                            <span>XIV</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>QR</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span>Near-field communication</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
                <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
            </div>
        </footer>
    );
}