'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function FeatureItems() {
  const [products, setProducts] = useState([]);

  // Fetch products
  useEffect(() => {
    async function loadData() {
      const res = await fetch(
        'https://producthub-server-theta.vercel.app/products'
      ); // তোমার API route
      const data = await res.json();
      setProducts(data);
    }
    loadData();
  }, []);

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, 6).map((item) => (
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
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                {item.shortDescription}
              </p>

              {/* Price */}
              <p className="text-blue-600 font-bold text-lg mt-2">
                ${item.price}
              </p>

              {/* Details Link */}
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
    </section>
  );
}
