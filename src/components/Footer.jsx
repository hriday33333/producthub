import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold mb-3">MyShop</h2>
          <p className="text-gray-300 text-sm">
            A simple Next.js demo project with authentication & product pages.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li>
              <Link href="/products" className="hover:text-blue-400">
                Products
              </Link>
            </li>
            <li>
              <a href="/login" className="hover:text-blue-400">
                Login
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <span className="cursor-pointer hover:text-blue-400">📘</span>
            <span className="cursor-pointer hover:text-blue-400">🐦</span>
            <span className="cursor-pointer hover:text-blue-400">📸</span>
          </div>
        </div>
      </div>

      <div className="text-center py-4 bg-gray-800 text-gray-400 text-sm">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  );
}
