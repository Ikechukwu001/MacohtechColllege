"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side - Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <div className="relative w-full h-72 md:h-96 rounded-2xl shadow-lg overflow-hidden">
            <Image
              src="/images/HeroImage1.jpg"
              alt="Students at Madonna College of Health Technology"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right side - Text + Quick Facts */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-4">
            About Madonna College of Health Technology
          </h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            Madonna College of Health Technology, Umuahia, Abia State, is
            dedicated to producing competent and compassionate health
            professionals. With accredited programs in Nursing, Public Health,
            Pharmacy Technology, and more, our mission is to empower students
            with both knowledge and practical skills to improve community health.
          </p>
          <p className="text-slate-600 leading-relaxed mb-6">
            Founded with the vision of <strong>"Nurturing Health Leaders"</strong>,
            the college combines academic excellence with hands-on training, 
            ensuring graduates are well-prepared to make a difference in society.
          </p>

          {/* Quick Facts Box */}
          <div className="bg-brand-ash/10 border-l-4 border-brand-pink p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-brand-blue mb-3">Quick Facts</h3>
            <ul className="space-y-2 text-slate-700">
              <li>📍 Location: Umuahia, Abia State</li>
              <li>🎓 Founded: August</li>
              <li>📚 Accredited Programs: Health Information Management, Public Health, Pharmacy Tech, Community Health, Medical Lab Tech</li>
              <li>💰 Application Fee: ₦15,000</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
