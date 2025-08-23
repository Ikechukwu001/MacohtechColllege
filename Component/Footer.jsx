"use client";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6 md:px-16 grid md:grid-cols-4 gap-12">
        
        {/* Logo + Motto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-white mb-3">
            Madonna College of Health
          </h2>
          <p className="text-sm italic">
            "Training Compassionate Healthcare Leaders"
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-brand-pink">Home</a></li>
            <li><a href="/about" className="hover:text-brand-pink">About</a></li>
            <li><a href="/admissions" className="hover:text-brand-pink">Admissions</a></li>
            <li><a href="/programs" className="hover:text-brand-pink">Programs</a></li>
            <li><a href="/blog" className="hover:text-brand-pink">Blog</a></li>
            <li><a href="/contact" className="hover:text-brand-pink">Contact</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +234 801 234 5678
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@madonnacollegehealth.edu.ng
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Umuahia, Abia State, Nigeria
            </li>
          </ul>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a href="#" className="hover:text-brand-pink"><Facebook /></a>
            <a href="#" className="hover:text-brand-pink"><Twitter /></a>
            <a href="#" className="hover:text-brand-pink"><Instagram /></a>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Madonna College of Health Technology. All Rights Reserved.
      </div>
    </footer>
  );
}
