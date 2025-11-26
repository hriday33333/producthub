'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function ProductDetails() {
  const { id } = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://producthub-server-theta.vercel.app/products`)
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item._id === id);
        setProduct(found);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6  px-4 py-2 rounded-lg  transition"
      >
        ← Back
      </button>

      {/* Product Image */}
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-80 object-cover rounded-xl shadow mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>

      {/* Price */}
      <p className="text-blue-600 text-2xl font-semibold mb-4">
        ${product.price}
      </p>

      {/* Full Description */}
      <p className="text-gray-700 text-lg leading-relaxed">
        {product.description}
      </p>

      {/* Extra Info */}
      <div className="mt-6 text-gray-600">
        <p>
          <span className="font-semibold">Category:</span> {product.category}
        </p>
        <p>
          <span className="font-semibold">Priority:</span> {product.priority}
        </p>
        <p>
          <span className="font-semibold">Date:</span> {product.date}
        </p>
      </div>
    </div>
  );
}
