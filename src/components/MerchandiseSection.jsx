"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  {
    id: "water-bottles",
    title: "Water bottles",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "gym-bags",
    title: "Gym bags",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "gym-jacket",
    title: "Gym Jacket",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MerchandiseSection() {
  return (
    <section className="py-20 bg-black" id="merchandise">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              className="relative group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <motion.div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="bg-[#9eff00] text-black font-bold px-4 py-2 rounded-md">View Details</span>
                </motion.div>
              </div>
              <h3 className="text-center mt-4 font-medium">{product.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
