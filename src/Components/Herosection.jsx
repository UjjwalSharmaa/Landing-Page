import React from "react";
import { motion } from "framer-motion";
import Video1 from "../assets/Bg-Video-1.mp4";
import Video2 from "../assets/Bg-Video-2.mp4";
import Logo from "../assets/logo.webp";
import Portfolio1 from "../assets/Mock-1.mp4";
import Portfolio2 from "../assets/Mock-2.mp4";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen text-white overflow-hidden">
      {/* 🔥 Two Background Videos Layered */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover top-15 left-0">
          <source src={Video1} type="video/mp4" />
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover top-0 left-0 mix-blend-screen"
        >
          <source src={Video2} type="video/mp4" />
        </video>
        <div className="absolute inset-0 "></div>
      </div>

      <nav className="z-20 relative flex items-center justify-between px-20 py-5">
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Kyptronix Logo" className="h-8" />
          <span className="font-bold text-lg">Kyptronix LLP</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-500">
          <li className="text-gray-100">Home</li>
          <li>About Us</li>
          <li>Services</li>
          <li>Package & Pricing</li>
          <li>Reviews</li>
          <li>Portfolio</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
        <button className="relative px-8 py-2 rounded-full border-2 border-blue-500 text-blue-500 font-semibold overflow-hidden group transition-all duration-300 hover:text-black hover:bg-orange-500 hover:border-orange-500 ">
          {/* Default Text */}
          <span className="block transition-all duration-300 group-hover:opacity-0">
            Contact Us
          </span>

          {/* Hover Text + Icon */}
          <span className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 text-white transition-colors duration-300 transition-opacity duration-300">
            Don't Be Shy ➜

          </span>
        </button>
      </nav>

      {/* 🔸 Hero Content */}
      <div className="z-20 relative flex flex-col items-center justify-center h-[calc(100vh-100px)] text-center px-4 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg md:text-xl font-semibold">
          Kyptronix LLP –
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mt-2 leading-tight"
        >
          THE NEXT THING IN <br />
          <span
            className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 
            bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
            DIGITAL INDUSTRY
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6 max-w-3xl text-sm md:text-base text-gray-300"
        >
          At Kyptronix LLP, we’re not just building websites, apps, or marketing
          strategies—we’re creating business success. Based in Delaware, we help
          companies across the U.S. scale rapidly, increase conversions and
          dominate their industries.Whether you need a custom-built website that
          drives traffic, a mobile app that wows, or a blockchain solution that
          disrupts your industry, Kryptonix is your trusted digital partner.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-3 text-sm md:text-base text-gray-400">

          Don’t just compete <span className="text-gray-100">— lead</span>. Ready to see what Kyptronix can do for you?
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-6 flex gap-4"
        >
          <button className="px-6 py-2 rounded-full font-semibold text-black flex justify-items-center items-center gap-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 transition-colors duration-300 hover:bg-orange-500 hover:from-orange-500 hover:via-orange-500 hover:to-orange-500 hover:text-black">
          Get Started Today
          <div className="h-6 w-6 rounded-full bg-gray-100 hover:to-orange-500">➜</div>
            </button>

          <button className="text-sm text-teal-500 font-semibold border border-none px-6 py-2 rounded-full">
            View Our Work ➜
          </button>
          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            alt="Portfolio Preview"
            className="w-[100px] md:w-[300px] rounded-xl shadow-lg"
          >
            <source src="" type="video/mp4" />
          </video>
          <video
            autoPlay
            loop
            muted
            playsInline
            alt="Portfolio Preview"
            className="w-[100px] md:w-[300px] rounded-xl shadow-lg"
          >
            <source src="" type="video/mp4" />
          </video>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
