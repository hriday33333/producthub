'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContext } from '@/context/AuthContext';
import { useContext, useState } from 'react';

export default function AddProductPage() {
  const { user } = useContext(AuthContext); // ⭐ get logged-in user

  const [form, setForm] = useState({
    title: '',
    shortDescription: '',
    description: '',
    price: '',
    date: '',
    priority: '',
    image: '',
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert('You must be logged in to add a product!');
      return;
    }

    const productData = {
      ...form,
      email: user.email, // ⭐ automatically attach user email
    };

    const res = await fetch(
      'https://producthub-server-theta.vercel.app/products',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      }
    );

    const data = await res.json();
    console.log(data);

    alert('Product Added Successfully!');

    // Reset form after submit
    setForm({
      title: '',
      shortDescription: '',
      description: '',
      price: '',
      date: '',
      priority: '',
      image: '',
    });
  };

  return (
    <ProtectedRoute>
      <div className="max-w-3xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">Add New Product</h1>

        {!user && (
          <p className="text-red-600 font-semibold mb-4">
            Please login to add a product.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-4 border p-6 rounded-xl shadow"
        >
          <div>
            <label className="font-semibold">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Short Description</label>
            <input
              type="text"
              name="shortDescription"
              value={form.shortDescription}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Full Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full border p-2 rounded h-28"
              required
            ></textarea>
          </div>

          <div>
            <label className="font-semibold">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <div>
            <label className="font-semibold">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <div>
            <label className="font-semibold">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="low">Low</option>
              <option value="normal">Normal</option>
              <option value="high">High</option>
            </select>
          </div>

          <div>
            <label className="font-semibold">Image URL (Optional)</label>
            <input
              type="text"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="w-full border p-2 rounded"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Add Product
          </button>
        </form>
      </div>
    </ProtectedRoute>
  );
}
