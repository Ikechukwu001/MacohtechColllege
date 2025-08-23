"use client";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-4">
            Have questions about admissions, programs, or campus life? Reach out
            to us.
          </p>

          <ul className="space-y-4">
            <li>
              <span className="font-semibold">Address:</span> Umuahia, Abia State, Nigeria
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+2348012345678" className="text-brand-pink hover:underline">
                +234 801 234 5678
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:info@madonnacollegehealth.edu.ng" className="text-brand-pink hover:underline">
                info@madonnacollegehealth.edu.ng
              </a>
            </li>
          </ul>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="rounded-2xl overflow-hidden shadow-lg h-[300px] md:h-[400px]"
        >
          <iframe
            title="College Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.7993621057043!2d7.491302814765979!3d5.532003635207746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1067a06f7a7d8e73%3A0x9e79b9c88d9d42bc!2sUmuahia%2C%20Abia%20State!5e0!3m2!1sen!2sng!4v1676463456789"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="border-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
