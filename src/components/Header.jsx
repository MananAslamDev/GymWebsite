"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="/" className="flex items-center">
        <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="FitNation Logo"
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-[#9eff00] font-bold text-xl">fitnation</span>
        </motion.div>
      </Link>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#services" className="text-white hover:text-[#9eff00] transition-colors">
          Services
        </Link>
        <Link href="#facility" className="text-white hover:text-[#9eff00] transition-colors">
          Facility
        </Link>
        <Link href="#merchandise" className="text-white hover:text-[#9eff00] transition-colors">
          Merchandise
        </Link>
      </nav>

      <motion.button
        className="bg-[#9eff00] text-black font-bold px-4 py-2 rounded-md"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        JOIN NOW
      </motion.button>
    </motion.header>
  )
}
