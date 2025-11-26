export default function BannerSection() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] mt-16">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1503602642458-232111445657?q=80"
        alt="Banner"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-white drop-shadow-lg">
          Discover Premium Products
        </h2>

        <p className="text-lg md:text-xl text-gray-200 mt-3 max-w-2xl">
          Shop from a wide collection of high-quality and exclusive items made
          just for you.
        </p>

        <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-xl text-lg transition">
          Explore Now
        </button>
      </div>
    </section>
  );
}
