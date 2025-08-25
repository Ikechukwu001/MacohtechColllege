"use client";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { id: 1, label: "Students Enrolled", value: 1200 },
  { id: 2, label: "Qualified Lecturers", value: 80 },
  { id: 3, label: "Accredited Programs", value: 6 },
  { id: 4, label: "Years of Excellence", value: 10 },
];

function Counter({ target, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return; // only run when start is true

    let startValue = 0;
    const duration = 5000; // 2 seconds
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      startValue += increment;
      if (startValue >= target) {
        startValue = target;
        clearInterval(timer);
      }
      setCount(Math.floor(startValue));
    }, 16);

    return () => clearInterval(timer);
  }, [target, start]);

  return <span>{count.toLocaleString()}</span>;
}

export default function QuickStats() {
  return (
    <section className="px-6 md:px-16 py-16 bg-brand-ash/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-blue mb-12">
          Quick Stats
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, { once: true, margin: "-50px" });

            return (
              <motion.div
                ref={ref}
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg transition"
              >
                <p className="text-3xl md:text-4xl font-bold text-brand-pink mb-2">
                  <Counter target={stat.value} start={isInView} />+
                </p>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
