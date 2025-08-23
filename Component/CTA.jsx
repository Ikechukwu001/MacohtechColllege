"use client";
import { motion } from "framer-motion";

export default function AdmissionCTA() {
  return (
    <section className="relative bg-brand-blue py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6"
        >
          Start Your Journey in Health Today
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
        >
          Admissions for the <span className="font-semibold">August Intake </span> 
          are now open. Apply now and secure your place at{" "}
          <span className="font-semibold">Madonna College of Health Technology</span>.
          Application Fee: <span className="text-brand-pink font-bold">₦15,000</span>.
        </motion.p>

        <motion.a
          href="#"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="inline-block bg-brand-pink font-semibold py-3 px-8 rounded-xl shadow-lg hover:bg-pink-600 transition"
        >
          Apply Now
        </motion.a>
      </div>
    </section>
  );
}
