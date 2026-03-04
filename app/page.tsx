"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen flex flex-col items-center justify-center text-center">

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-6xl font-bold bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent"
      >
        Abdelrahman
      </motion.h1>

      <p className="mt-6 text-gray-400 text-xl">
        Creative Developer | Interactive Experiences
      </p>

    </main>
  )
}
