type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-4"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.description}</p>
      <p className="text-lg font-bold mt-2">৳ {product.price}</p>
    </div>
  );
}

