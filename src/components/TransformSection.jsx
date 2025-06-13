"use client"

import { motion } from "framer-motion"

export default function TransformSection() {
  return (
    <section className="py-20 bg-black" id="services">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Transform Your <br />
              Fitness Journey
            </h2>
          </motion.div>

          <motion.div
            className="md:w-1/2 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <p className="text-gray-300">
              Offers customized workout programs designed to help clients achieve their fitness goals, such as weight
              loss, strength and conditioning, and body shaping.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
