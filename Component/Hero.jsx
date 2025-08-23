"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [hover, setHover] = useState(false);

  return (
    <section className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-brand-pink">Madonna College of Health</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Shaping the future of healthcare through excellence in education, 
            compassion, and innovation.
          </p>

          <div className="flex gap-4">
            <a
              href="/admissions"
              className="bg-brand-pink px-6 py-3 rounded-xl shadow hover:bg-pink-600 transition"
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

        {/* RIGHT IMAGE CARDS */}
        <motion.div
          className="relative w-full h-[400px] flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {/* Card 1 */}
          <motion.div
            className="absolute w-72 h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ x: -100, rotate: -10, opacity: 0 }}
            animate={{
              x: hover ? -80 : -60,
              rotate: hover ? -12 : -8,
              opacity: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/HeroImage1.jpg"
              alt="Students learning"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="absolute w-72 h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: hover ? 10 : 20,
              scale: hover ? 1.05 : 1,
              opacity: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/HeroImage1.jpg"
              alt="Healthcare training"
              fill
              className="object-cover"
            />
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="absolute w-72 h-96 rounded-2xl overflow-hidden shadow-xl"
            initial={{ x: 100, rotate: 10, opacity: 0 }}
            animate={{
              x: hover ? 80 : 60,
              rotate: hover ? 12 : 8,
              opacity: 1,
            }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="/images/HeroImage1.jpg"
              alt="Public health programs"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
