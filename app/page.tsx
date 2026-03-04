"use client"

import Hero3D from "@/components/Hero3D"
import Reveal from "@/components/Reveal"
import MouseTrail from "@/components/MouseTrail"
import Chat from "@/components/Chat"

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen relative overflow-hidden">

      <Hero3D />
      <MouseTrail />
      <Chat />

      <section className="h-screen flex flex-col items-center justify-center text-center relative z-10">
        <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800 bg-clip-text text-transparent mb-6">
          Abdelrahman
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl px-4">
          Creative Developer | Interactive Experiences
        </p>
      </section>

      <Reveal>
        <section className="py-32 text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Projects
          </h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-slate-900 rounded-xl hover:bg-slate-800 transition">
              <h3 className="text-2xl font-semibold mb-4">AI Tools Directory</h3>
              <p className="text-gray-400">
                Curated collection of cutting-edge AI tools and resources
              </p>
            </div>
            <div className="p-8 bg-slate-900 rounded-xl hover:bg-slate-800 transition">
              <h3 className="text-2xl font-semibold mb-4">Prayer Times App</h3>
              <p className="text-gray-400">
                Modern web app for accurate prayer times worldwide
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-32 text-center relative z-10 px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-4">
            {['React', 'Next.js', 'TypeScript', '3D Graphics', 'GSAP', 'Tailwind CSS'].map((skill) => (
              <span key={skill} className="px-6 py-3 bg-slate-900 rounded-full text-gray-300 hover:bg-blue-900 hover:text-white transition">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </Reveal>

    </main>
  );
}
