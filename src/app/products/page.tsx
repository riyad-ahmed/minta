"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ProductCard from "@/src/components/ProductCard";

export type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
    rating?: number;
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [activeCategory, setActiveCategory] = useState("ALL");
    const [showFilters, setShowFilters] = useState(false);

    const categories = [
        "ALL", "NEW", "BEST SELLERS", "SHIRTS", "T-SHIRTS",
        "POLO SHIRTS", "JCMAS", "SHORTS", "SUP", "COA"
    ];

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products || []);
            })
            .catch(console.error);
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Breadcrumb */}
            <div className="text-sm text-gray-500 mb-4">
                <Link href="/">Home</Link> / <span className="text-black">Products</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl font-bold mb-6">PRODUCTS</h1>

            {/* Filters Button (Mobile) */}
            <button
                className="md:hidden flex items-center mb-4"
                onClick={() => setShowFilters(!showFilters)}
            >
                <span className="mr-1">Filters</span>
                <span>+</span>
            </button>

            <div className="flex flex-col md:flex-row gap-8">
                {/* Filters Sidebar */}
                <div className={`${showFilters ? 'block' : 'hidden'} md:block md:w-1/4`}>
                    <div className="bg-white p-4 rounded-lg">
                        <h2 className="font-bold mb-4">Filters</h2>

                        {/* Size Filter */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Size</h3>
                            <div className="flex flex-wrap gap-2">
                                {["XS", "S", "M", "L", "XL", "2X"].map(size => (
                                    <button
                                        key={size}
                                        className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:bg-black hover:text-white"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Availability Filter */}
                        <div className="mb-6">
                            <h3 className="font-medium mb-2">Availability</h3>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Availability (450)
                                </label>
                                <label className="flex items-center">
                                    <input type="checkbox" className="mr-2" />
                                    Out Of Stock (18)
                                </label>
                            </div>
                        </div>

                        {/* Other filters would go here */}
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    {/* Category Navigation */}
                    <div className="flex overflow-x-auto gap-4 mb-6 pb-2 scrollbar-hide">
                        {categories.map(category => (
                            <button
                                key={category}
                                className={`whitespace-nowrap px-4 py-2 rounded-full text-sm ${activeCategory === category
                                    ? 'bg-black text-white'
                                    : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                onClick={() => setActiveCategory(category)}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {products.map((product) => (
                            <ProductCard key={product._id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}