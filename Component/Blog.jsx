"use client";
import { motion } from "framer-motion";

const posts = [
  {
    id: 1,
    title: "Orientation Program for New Students",
    date: "Aug 10, 2025",
    excerpt:
      "Our August intake orientation begins with lectures on Public Health and community development...",
  },
  {
    id: 2,
    title: "Madonna College Partners with Heritage Bank",
    date: "July 30, 2025",
    excerpt:
      "We are pleased to announce our official partnership with Heritage Bank for all student payments...",
  },
  {
    id: 3,
    title: "World Health Day Seminar",
    date: "Apr 7, 2025",
    excerpt:
      "Join us as we mark World Health Day with a campus-wide seminar on preventive medicine...",
  },
];

export default function NewsBlogPreview() {
  return (
    <section className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Latest News & Blog
        </motion.h2>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <h3 className="text-xl font-semibold mb-3 text-brand-blue">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a
                href="#"
                className="text-brand-pink font-semibold hover:underline"
              >
                Read More →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
