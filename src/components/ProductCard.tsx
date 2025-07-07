// Update the import path below if your Product type is located elsewhere, e.g. '../types/Product'
import type { Product } from '@/src/app/products/page';

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group">
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
        {product.rating && (
          <div className="flex items-center mt-1">
            <span className="text-xs">★ {product.rating}</span>
          </div>
        )}
        <p className="font-bold mt-2">৳ {product.price}</p>
      </div>
    </div>
  );
}