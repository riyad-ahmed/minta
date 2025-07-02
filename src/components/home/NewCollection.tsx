"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export default function NewCollection() {
    const [featured, setFeatured] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                if (data.products && data.products.length >= 2) {
                    setFeatured(data.products.slice(0, 2));
                }
            })
            .catch((error) => console.error("Error loading featured products:", error));
    }, []);

    return (
        <section className="bg-white">
            <div className="container mx-auto px-4 py-6">
                <div className="space-y-2 w-full md:max-w-[33.3333%] mx-auto md:mx-0 mb-6">
                    <h3 className="text-sm font-semibold">MEN</h3>
                    <h3 className="text-sm font-semibold">WOMEN</h3>
                    <h3 className="text-sm font-semibold">KIDS</h3>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-black bg-[#D9D9D9]"
                    />
                </div>
            </div>
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6 py-8">
                {/* LEFT COLUMN – All text & filter */}
                <div className="flex flex-col justify-between h-full">
                    {/* Top content */}
                    <div className="space-y-6">
                        <div className="pt-4">
                            <h2 className="text-3xl md:text-4xl font-extrabold">NEW <br /> COLLECTION</h2>
                            <p className="text-gray-600 mt-1 mb-4 text-base">Summer 2026</p>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="items-center grid grid-cols-4 gap-4 justify-between">
                        {/* Go To Shop Button */}
                        <Link
                            href="/products"
                            className="flex items-center justify-between gap-8 bg-gray-100 rounded transition hover:bg-gray-200 col-span-3 px-1 py-1"
                        >
                            <span className="text-sm font-medium text-gray-800">Go To Shop</span>
                            <span className="text-lg mr-3">→</span>
                        </Link>

                        {/* Navigation Arrows */}
                        <div className="flex gap-2 col-span-1 justify-end">
                            <button className="w-9 h-9 border border-[#A3A3A3] text-lg text-gray-800 hover:bg-gray-200">
                                &lt;
                            </button>
                            <button className="w-9 h-9 border border-[#A3A3A3] text-lg text-gray-800 hover:bg-gray-200">
                                &gt;
                            </button>
                        </div>
                    </div>

                </div>

                {/* MIDDLE COLUMN – Product 1 */}
                {featured[0] && (
                    <div className="text-center">
                        <img
                            src={featured[0].image}
                            alt={featured[0].name}
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                )}

                {/* RIGHT COLUMN – Product 2 */}
                {featured[1] && (
                    <div className="text-center">
                        <img
                            src={featured[1].image}
                            alt={featured[1].name}
                            className="w-full h-[450px] object-cover"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}
