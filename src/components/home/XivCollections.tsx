"use client";

import { useEffect, useState } from "react";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export default function XivCollections() {
    const [products, setProducts] = useState<Product[]>([]);
    const [visibleProducts, setVisibleProducts] = useState(3);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                if (data.products) {
                    setProducts(data.products);
                }
            })
            .catch((error) => console.error("Error loading products:", error));
    }, []);

    const loadMoreProducts = () => {
        setIsLoading(true);
        setTimeout(() => {
            setVisibleProducts(prev => prev + 3); // Load 3 more each time
            setIsLoading(false);
        }, 300);
    };

    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto">
                {/* Header - Split layout */}
                <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                    {/* Left side - Title and categories */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">XIV COLLECTIONS 23-24</h2>
                        <div className="flex gap-4 mt-4">
                            <span className="text-sm">(ALL)</span>
                            <span className="text-sm">Men</span>
                            <span className="text-sm">Women</span>
                            <span className="text-sm">KID</span>
                        </div>
                    </div>

                    {/* Right side - Filters and sort */}
                    <div className="flex flex-wrap gap-4">
                        <button className="text-sm flex items-center">
                            Filters <span className="ml-1">+</span>
                        </button>
                        <button className="text-sm flex items-center">
                            Sort <span className="ml-1">+</span>
                        </button>
                        <button className="text-sm">Less to more</button>
                        <button className="text-sm">More to Less</button>
                    </div>
                </div>

                {/* Products Grid - Fixed 3 columns */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {products.slice(0, visibleProducts).map((product) => (
                        <div key={product._id} className="group">
                            <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="mt-4">
                                <h3 className="font-medium text-gray-500">Option {product.category}</h3>
                                <p className="text-gray-900 font-medium mt-1">{product.name}</p>
                                <p className="font-bold mt-2">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* More Button - Centered */}
                {visibleProducts < products.length && (
                    <div className="mt-12 text-center">
                        <button
                            onClick={loadMoreProducts}
                            disabled={isLoading}
                            className={`px-6 py-2 border border-black rounded-full text-sm font-medium transition-all ${isLoading ? 'opacity-50' : 'hover:bg-black hover:text-white'}`}
                        >
                            {isLoading ? 'Loading...' : 'More'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}