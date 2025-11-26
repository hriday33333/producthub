'use client';

import { AuthContext } from '@/context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function RegisterPage() {
  const { register, googleLogin, authError, loading } = useContext(AuthContext);
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    const success = await register(email, password);

    if (success) {
      router.push('/');
    }
  }

  async function handleGoogle() {
    const success = await googleLogin();
    if (success) {
      router.push('/');
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-6 rounded-xl shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Create an Account
        </h2>

        {authError && (
          <p className="text-red-500 text-center mb-3">{authError}</p>
        )}

        {/* Registration Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              name="name"
              type="text"
              className="w-full border rounded-lg p-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              name="email"
              type="email"
              className="w-full border rounded-lg p-2"
              placeholder="Enter email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              name="password"
              type="password"
              className="w-full border rounded-lg p-2"
              placeholder="Enter password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            disabled={loading}
          >
            {loading ? 'Creating account...' : 'Register'}
          </button>
        </form>

        <div className="text-center my-4 text-gray-500">OR</div>

        <button
          onClick={handleGoogle}
          className="w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
        >
          Continue with Google
        </button>
        <p className="text-center mt-4 text-sm">
          Already have an account?{' '}
          <Link
            href="/login"
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
