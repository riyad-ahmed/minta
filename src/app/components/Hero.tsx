import Link from 'next/link';

export default function Hero() {
    return (
        <section
            className="text-white py-32 text-center px-6 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-banner.jpg')" }}
        >
            <h1 className="text-5xl font-bold mb-4">Welcome to Minta</h1>
            <p className="text-lg text-gray-200 mb-6">
                Discover bold T-shirts & accessories crafted for your unique style.
            </p>
            <Link
                href="/products"
                className="inline-block bg-white text-black px-6 py-3 rounded font-semibold hover:bg-gray-200 transition"
            >
                Shop No
            </Link>
        </section>

    );
}
