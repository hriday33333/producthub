'use client';

import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';

export default function ManageProducts() {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadProducts = async () => {
    try {
      const res = await fetch(
        'https://producthub-server-theta.vercel.app/products'
      );
      const data = await res.json();

      const userProducts = data.filter(
        (product) => product.email === user?.email
      );

      setProducts(userProducts);
      setLoading(false);
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  useEffect(() => {
    if (authLoading) return;
    if (user) loadProducts();
  }, [user, authLoading]);

  const handleDelete = async (id) => {
    const confirmDelete = confirm(
      'Are you sure you want to delete this product?'
    );
    if (!confirmDelete) return;

    try {
      await fetch(`https://producthub-server-theta.vercel.app/products/${id}`, {
        method: 'DELETE',
      });

      alert('Product Deleted Successfully!');
      loadProducts();
    } catch (error) {
      console.error('Delete Error:', error);
    }
  };

  if (authLoading) return <p className="text-center p-6">Checking auth...</p>;

  // if (!user) return <p className="text-center p-6">You must be logged in.</p>;

  return (
    <ProtectedRoute>
      <div className="max-w-6xl mx-auto p-4 sm:p-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6">Manage Products</h1>

        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : products.length === 0 ? (
          <p className="text-center text-lg">No products found.</p>
        ) : (
          <>
            {/* MOBILE CARDS (Hidden on larger screens) */}
            <div className="grid grid-cols-1 sm:hidden gap-4">
              {products.map((item) => (
                <div key={item._id} className="border rounded-xl p-4 shadow-md">
                  <img
                    src={item.image}
                    className="w-full h-40 object-cover rounded-lg"
                    alt={item.title}
                  />

                  <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
                  <p className="text-gray-700 font-bold">${item.price}</p>
                  <p className="text-gray-600 capitalize">
                    Priority: {item.priority}
                  </p>

                  <div className="flex gap-3 mt-4">
                    <Link
                      href={`/products/${item._id}`}
                      className="flex-1 text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
                    >
                      View
                    </Link>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* DESKTOP TABLE (Hidden on small screens) */}
            <div className="hidden sm:block overflow-x-auto rounded-lg border">
              <table className="min-w-[600px] w-full border-collapse">
                <thead className="text-base">
                  <tr>
                    <th className="p-3 border">Image</th>
                    <th className="p-3 border">Title</th>
                    <th className="p-3 border">Price</th>
                    <th className="p-3 border">Priority</th>
                    <th className="p-3 border">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((item) => (
                    <tr key={item._id} className="text-center ">
                      <td className="p-3 border">
                        <img
                          src={item.image}
                          className="w-16 h-16 object-cover rounded mx-auto"
                          alt={item.title}
                        />
                      </td>

                      <td className="p-3 border">{item.title}</td>

                      <td className="p-3 border">${item.price}</td>

                      <td className="p-3 border capitalize">{item.priority}</td>

                      <td className="p-3 border space-x-2">
                        <Link
                          href={`/products/${item._id}`}
                          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
                        >
                          View
                        </Link>

                        <button
                          onClick={() => handleDelete(item._id)}
                          className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </ProtectedRoute>
  );
}
