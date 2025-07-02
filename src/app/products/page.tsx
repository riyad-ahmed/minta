"use client";
import { useEffect, useState } from "react";
import ProductCard from "@/src/components/ProductCard";

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setProducts(data.products || []);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <main className="p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.map((product) => (
                    <ProductCard key={product._id} product={product} />
                ))}
            </div>
        </main>
    );
}
