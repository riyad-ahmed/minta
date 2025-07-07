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
    const [searchTerm, setSearchTerm] = useState("");

    const categories = [
        "ALL", "NEW", "BEST SELLERS", "SHIRTS", "T-SHIRTS",
        "POLO SHIRTS", "JCMAS", "SHORTS", "SUP", "COA"
    ];

    // Filter products based on search term and active category
    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === "ALL" || product.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

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
                    </div>
                </div>

                {/* Main Content */}
                <div className="md:w-3/4">
                    {/* Search Bar */}
                    <div className="mb-6">
                        <div className="relative max-w-md">
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-black"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <svg
                                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>
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
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <ProductCard key={product._id} product={product} />
                            ))
                        ) : (
                            <div className="col-span-full text-center py-12">
                                <p className="text-lg">No products found matching your search</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}