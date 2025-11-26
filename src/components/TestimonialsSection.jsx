export default function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: "Ariana Gomez",
      role: "Regular Customer",
      image:
        "https://randomuser.me/api/portraits/women/68.jpg",
      feedback:
        "Amazing experience! The product quality is outstanding and delivery was super fast.",
    },
    {
      id: 2,
      name: "Michael Smith",
      role: "Verified Buyer",
      image:
        "https://randomuser.me/api/portraits/men/52.jpg",
      feedback:
        "Very satisfied with the service. Customer support is friendly and responsive!",
    },
    {
      id: 3,
      name: "Sophia Lee",
      role: "Customer",
      image:
        "https://randomuser.me/api/portraits/women/44.jpg",
      feedback:
        "Loved the unique items. Totally worth it! Highly recommended.",
    },
  ];

  return (
    <section className="py-16 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white dark:bg-zinc-900 border shadow rounded-xl p-6 hover:shadow-lg transition"
            >
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full mx-auto object-cover"
              />

              <h3 className="mt-4 text-xl font-semibold">{t.name}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {t.role}
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-3 text-yellow-400 text-lg">
                ★★★★★
              </div>

              <p className="text-gray-600 dark:text-gray-300 mt-4">
                {t.feedback}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
