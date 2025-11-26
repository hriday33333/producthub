'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://producthub-server-theta.vercel.app/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((item) => (
          <div
            key={item._id}
            className="border rounded-xl shadow hover:shadow-lg transition p-4"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />

            {/* Title */}
            <h2 className="text-xl font-semibold">{item.title}</h2>

            {/* Short Description */}
            <p className="text-gray-600 text-sm mt-1">
              {item.shortDescription}
            </p>

            {/* Price */}
            <p className="text-blue-600 font-bold text-lg mt-2">
              ${item.price}
            </p>

            {/* 🔵 DETAILS BUTTON */}
            <Link
              href={`/products/${item._id}`}
              className="mt-3 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
