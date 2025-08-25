"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-white py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-16 pt-16 pb-8 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-pink-500 text-5xl md:text-6xl block">
              Madonna
            </span>{" "}
            <span className="text-blue-400">College of Health</span>
          </h1>

          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Shaping the future of healthcare through{" "}
            <span className="font-semibold text-brand-blue">excellence</span>,{" "}
            <span className="font-semibold text-brand-pink">compassion</span>, 
            and <span className="font-semibold text-brand-green">innovation</span>.
          </p>

          <div className="flex gap-4">
            <a
              href="/admissions"
              className="bg-pink-500 text-white px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
            >
              Apply Now
            </a>
            <a
              href="/programs"
              className="border border-gray-300 px-6 py-3 rounded-xl shadow hover:bg-gray-100 transition"
            >
              Explore Programs
            </a>
          </div>
        </motion.div>

        {/* RIGHT STATIC IMAGE */}
        <motion.div
          className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/Madonna College Of Health Logo.png"
            alt="Students learning healthcare"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
