import Link from 'next/link';
import Logo from '../../../public/images/horizontal.png'; // Adjust the path as necessary
import Image from 'next/image';

export default function Header() {
    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <nav>
                    <Image
                        src={Logo}
                        alt="Your Company Logo"
                        width={500}
                        height={100}
                        priority={true}
                    />
                    {/* Other navigation links */}
                </nav>
                <nav className="space-x-6 text-gray-700 font-medium">
                    <Link href="/">Home</Link>
                    <Link href="/products">Products</Link>
                    <Link href="#">About</Link>
                    <Link href="#">Contact</Link>
                </nav>
            </div>
        </header>
    );
}
