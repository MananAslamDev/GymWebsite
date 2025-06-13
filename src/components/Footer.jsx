"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="flex items-center">
              <Image
                src="/placeholder.svg?height=40&width=40"
                alt="FitNation Logo"
                width={40}
                height={40}
                className="mr-2"
              />
              <span className="text-[#9eff00] font-bold text-xl">fitnation</span>
            </Link>
          </motion.div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 mt-6 md:mt-0">
            <Link href="#services" className="text-gray-300 hover:text-[#9eff00] transition-colors">
              Services
            </Link>
            <Link href="#facility" className="text-gray-300 hover:text-[#9eff00] transition-colors">
              Facility
            </Link>
            <Link href="#facility" className="text-gray-300 hover:text-[#9eff00] transition-colors">
              Facility
            </Link>
            <Link href="#merchandise" className="text-gray-300 hover:text-[#9eff00] transition-colors">
              Merchandise
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">Privacy Policy</p>
          <p className="text-gray-500 text-sm mt-4 md:mt-0">
            &copy; {new Date().getFullYear()} FitNation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
