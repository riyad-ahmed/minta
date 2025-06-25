import Link from "next/link";

export default function Hero() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-12 lg:px-24 py-16 bg-white">

            {/* LEFT COLUMN – Filters & Text */}
            <div className="space-y-6">
                {/* Filter */}
                <div>
                    <h3 className="text-lg font-semibold mb-2">MEN</h3>
                    <h3 className="text-lg font-semibold mb-2">WOMEN</h3>
                    <h3 className="text-lg font-semibold mb-4">KIDS</h3>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-1 focus:ring-black"
                    />
                </div>

                {/* Text */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-extrabold">NEW COLLECTION</h2>
                    <p className="text-gray-600 mt-1 mb-4 text-base">Summer 2024</p>

                    {/* Button + Arrow */}
                    <div className="flex items-center gap-4">
                        <Link
                            href="/products"
                            className="bg-black text-white px-6 py-3 text-sm font-semibold rounded hover:bg-gray-800 transition"
                        >
                            Go To Shop
                        </Link>
                        <button className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition">
                            →
                        </button>
                    </div>
                </div>
            </div>

            {/* MIDDLE COLUMN – Product Image 1 */}
            <div>
                <img
                    src="/images/hero2.jpg"
                    alt="Product Image 1"
                    className="w-full h-[450px] object-cover rounded-lg"
                />
            </div>

            {/* RIGHT COLUMN – Product Image 2 */}
            <div>
                <img
                    src="/images/hero3.jpg"
                    alt="Product Image 2"
                    className="w-full h-[450px] object-cover rounded-lg"
                />
            </div>
        </section>
    );
}
