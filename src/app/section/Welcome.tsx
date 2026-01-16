import Link from "next/link";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function Welcome() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-black pt-32 md:pt-20">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-10%] left-[-10%] w-64 h-64 md:w-[500px] md:h-[500px] bg-blue-900/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 md:w-[600px] md:h-[600px] bg-rose-900/20 rounded-full blur-[80px] md:blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 md:w-[800px] md:h-[800px] bg-purple-900/5 rounded-full blur-[60px] md:blur-[100px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] md:bg-[size:40px_40px] opacity-20"></div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-blue-800/30 bg-blue-950/30 px-3 py-1 text-xs font-medium text-blue-400 w-fit mx-auto lg:mx-0">
              <span className="flex h-1.5 w-1.5 rounded-full bg-blue-400 mr-2"></span>
              AI & NEXT.JS DEVELOPMENT
            </div>
            
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                Digital <br />
                Evolution <br />
                with <span className="bg-gradient-to-r from-blue-500 to-rose-500 bg-clip-text text-transparent">Shinka</span>
              </h1>
              <p className="max-w-[600px] mx-auto lg:mx-0 text-gray-400 text-base sm:text-lg md:text-xl/relaxed">
                We transform businesses through intelligent algorithms and high-performance Fullstack architectures. We build the future today.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-rose-600 px-8 text-sm font-medium text-white shadow transition-all hover:from-blue-500 hover:to-rose-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                Launch project
                <Rocket className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/10 bg-transparent px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              >
                See Portfolio
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center relative mt-8 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[400px] md:h-[400px] bg-white/10 rounded-full blur-[60px] md:blur-[80px] animate-pulse"></div>
            <div className="relative w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-black flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-full relative z-10">
                <Image 
                  src="/logo-shinka.png" 
                  alt="Shinka Logo" 
                  width={420} 
                  height={420}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
