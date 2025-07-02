// src/components/ThisWeek.tsx
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import type SwiperCore from 'swiper';

type Product = {
    _id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
};

export default function ThisWeek() {
    const [products, setProducts] = useState<Product[]>([]);
    const swiperRef = useRef<SwiperCore | null>(null);

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

    return (
        <section className="bg-white py-12 px-4">
            <div className="container mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-extrabold">NEW <br /> THIS WEEK</h2>
                        <p className="text-gray-600 mt-1 mb-4 text-base">({products.length} products available)</p>
                    </div>
                    <Link
                        href="/products"
                        className="text-sm font-medium hover:underline"
                    >
                        See All →
                    </Link>
                </div>

                {/* Swiper Slider */}
                <div className="relative">
                    <Swiper
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        modules={[Navigation]}
                        spaceBetween={24}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 4,
                            }
                        }}
                        className="!pb-16" // Increased padding for navigation
                    >
                        {products.map((product: Product) => (
                            <SwiperSlide key={product._id}>
                                <div className="group h-full">
                                    <div className="aspect-square overflow-hidden rounded-lg">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <h3 className="font-medium">{product.name}</h3>
                                        <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                                            {product.description}
                                        </p>
                                        <p className="font-bold mt-2">${product.price}</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation Buttons - Now properly connected and centered */}
                    {products.length > 4 && (
                        <div className="flex justify-center gap-8 mt-6">
                            <button
                                onClick={() => swiperRef.current?.slidePrev()}
                                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                aria-label="Previous slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={() => swiperRef.current?.slideNext()}
                                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                                aria-label="Next slide"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}