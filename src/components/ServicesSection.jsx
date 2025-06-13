"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
  {
    id: "gym",
    title: "GYM",
    image: "/placeholder.svg?height=400&width=300",
    description:
      "We offer a wide range of state-of-the-art equipment and trainers to help you get to your fitness goals.",
  },
  {
    id: "zumba",
    title: "ZUMBA",
    image: "/placeholder.svg?height=400&width=300",
    description: "High-energy dance workouts that are fun and effective for burning calories.",
  },
  {
    id: "yoga",
    title: "YOGA",
    image: "/placeholder.svg?height=400&width=300",
    description: "Find your center with our expert-led yoga classes for all experience levels.",
  },
  {
    id: "martial-arts",
    title: "MARTIAL ARTS",
    image: "/placeholder.svg?height=400&width=300",
    description: "Learn self-defense and discipline through our comprehensive martial arts programs.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="relative overflow-hidden group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className="relative h-[400px] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />

                <div className="absolute inset-0 flex flex-col justify-between p-6">
                  <motion.div
                    className="w-8 h-8 bg-[#9eff00] rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-black font-bold text-xs">+</span>
                  </motion.div>

                  <div>
                    <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                    {index === 0 && (
                      <p className="text-sm text-gray-300 hidden group-hover:block transition-all duration-300">
                        {service.description}
                      </p>
                    )}
                  </div>
                </div>

                {index !== 0 && (
                  <div className="absolute inset-y-0 right-0 w-12 flex items-center justify-center">
                    <span className="text-white font-bold text-xl transform -rotate-90 whitespace-nowrap">
                      {service.title}
                    </span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
