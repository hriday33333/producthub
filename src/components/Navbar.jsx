'use client';

import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useContext, useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, logout } = useContext(AuthContext); // 🔥 user + logout

  return (
    <nav className="w-full shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-blue-600">
          MyShop
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/products" className="block">
            Products
          </Link>

          <Link href="/added" className="block">
            Add Product{' '}
          </Link>
          <Link href="/manage" className="block">
            Manage Products{' '}
          </Link>

          {/* 🔥 IF USER LOGGED IN → Show Logout */}
          {user ? (
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
            >
              Logout
            </button>
          ) : (
            /* 🔥 No user → show Login + Register */
            <div className="flex space-x-3">
              <Link
                href="/login"
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Icon */}
        <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden shadow-md px-6 py-4 space-y-3">
          <Link href="/" className="block">
            Home
          </Link>
          <Link href="/products" className="block">
            Products
          </Link>
          <Link href="/details" className="block">
            Products Details{' '}
          </Link>
          <Link href="/added" className="block">
            Add Product{' '}
          </Link>
          <Link href="/manage" className="block">
            Manage Products{' '}
          </Link>

          <hr className="my-2" />

          {/* 🔥 Mobile: If logged-in → logout */}
          {user ? (
            <button
              onClick={logout}
              className="block w-full text-center py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <>
              <Link
                href="/login"
                className="block w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="block w-full text-center py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white"
              >
                Register
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
