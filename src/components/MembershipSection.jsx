"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function MembershipSection() {
  return (
    <section className="relative py-20">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=600&width=1920"
          alt="Membership Background"
          fill
          className="object-cover brightness-50"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-md"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold mb-8">
            Let's Join
            <br />
            Membership
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              className="bg-[#9eff00] text-black font-bold px-6 py-3 rounded-md"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN NOW
            </motion.button>

            <motion.button
              className="border border-white text-white font-bold px-6 py-3 rounded-md"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
            >
              JOIN FREE TRIAL
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
