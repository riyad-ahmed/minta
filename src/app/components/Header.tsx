import Link from 'next/link';
// import Logo from '../../../public/images/horizontal.png';
import sidebar from '../../../public/togol.png';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Left Navigation (3 items) */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
                    <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
                    <Link href="/about" className="hover:text-gray-900 transition-colors">About</Link>
                </nav>

                {/* Mobile menu button (hidden on desktop) */}
                <button className="md:hidden text-gray-700">
                    <Image
                        src={sidebar}
                        alt="Menu toggle"
                        width={24}
                        height={24}
                        priority={true}
                    />
                </button>

                {/* Center Logo */}
                <div className="mx-auto md:mx-0">
                    <Link href="/">
                        {/* <Image
                            src={Logo}
                            alt="Company Logo"
                            width={150}
                            height={40}
                            priority={true}
                            className="h-10 w-auto"
                        /> */}
                        <span className='text-2xl font-bold italic text-gray-800'>
                            minta
                        </span>
                    </Link>
                </div>

                {/* Right Side Icons (Cart and Profile) */}
                <div className="flex items-center space-x-4">
                    <button className="text-gray-700 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                        </svg>
                    </button>
                    <button className="text-gray-700 hover:text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
