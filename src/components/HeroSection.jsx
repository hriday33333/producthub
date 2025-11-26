export default function HeroSection() {
  return (
    <section className=" py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Area */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Perfect Products,
            <span className="text-blue-600"> Delivered Fast.</span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            Discover the latest and best products curated specially for you.
            Shop with ease and enjoy unbeatable prices.
          </p>

          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Browse Products
            </button>

            <button className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image / Illustration */}
        <div className="flex-1 flex justify-center">
          <img
            src="https://i.ibb.co/6R2hrxM/watch-new.jpg"
            alt="Hand Watch 2"
            className="w-full max-w-xs rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
}
