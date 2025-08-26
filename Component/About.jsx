"use client";
import { motion } from "framer-motion";
import { MapPin, Calendar, BookOpen, CreditCard } from "lucide-react";

export default function About() {
  return (
    <section className="px-6 md:px-16 py-10 md:py-16 bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left side - Video */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="flex-1 w-full"
        >
          <div className="relative w-full h-64 sm:h-72 md:h-96 rounded-2xl shadow-lg overflow-hidden">
            <video
              src="/videos/Madonna-Campus.mp4" // <-- put your video inside /public/videos/
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
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
          <p className="text-slate-600 leading-relaxed mb-8">
            Founded with the vision of <strong>"Nurturing Health Leaders"</strong>,
            the college combines academic excellence with hands-on training, 
            ensuring graduates are well-prepared to make a difference in society.
          </p>

          {/* Quick Facts - Stat Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow hover:shadow-md transition">
              <MapPin className="text-pink-500 w-8 h-8" />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-semibold text-foreground">Umuahia, Abia State</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow hover:shadow-md transition">
              <Calendar className="text-pink-500 w-8 h-8" />
              <div>
                <p className="text-sm text-muted-foreground">Founded</p>
                <p className="font-semibold text-foreground">August</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow hover:shadow-md transition">
              <BookOpen className="text-pink-600 w-8 h-8" />
              <div>
                <p className="text-sm text-muted-foreground">Accredited Programs</p>
                <p className="font-semibold text-foreground">
                  HIM, Public Health, Pharmacy Tech, 
                  Community Health, MLT
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow hover:shadow-md transition">
              <CreditCard className="text-pink-500 w-8 h-8" />
              <div>
                <p className="text-sm text-muted-foreground">Application Fee</p>
                <p className="font-semibold text-foreground">₦15,000</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
