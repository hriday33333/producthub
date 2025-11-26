export default function CardsSection() {
  const cards = [
    {
      id: 1,
      title: 'Fast Delivery',
      desc: 'Get your products delivered to your doorstep within 24 hours.',
      icon: '🚚',
    },
    {
      id: 2,
      title: 'Best Quality',
      desc: 'We offer only premium quality products with guaranteed satisfaction.',
      icon: '⭐',
    },
    {
      id: 3,
      title: '24/7 Support',
      desc: 'Our support team is always ready to assist you anytime.',
      icon: '📞',
    },
  ];

  return (
    <section className="py-16 bg-zinc-50 dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((item) => (
            <div
              key={item.id}
              className="p-6 border rounded-2xl shadow-sm hover:shadow-xl bg-white dark:bg-zinc-900 transition hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {item.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
