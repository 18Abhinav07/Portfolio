"use client";

import { motion } from "framer-motion";

const Interactive3DBackground = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Sketchfab Embed */}
      <div className="absolute inset-0 h-full w-full">
        <iframe
          title="Retro Office Pack"
          src="https://sketchfab.com/models/6f06e0b681ee4e18932cb8a348da78b6/embed?autostart=1&ui_theme=dark"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          className="w-full h-full"
        ></iframe>
      </div>

      {/* Overlay for Text */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white">
          Welcome to My Interactive Space
        </h1>
        <p className="md:text-xl text-white mt-4">
          Explore this 3D environment as a backdrop to innovation and
          creativity.
        </p>
        <div className="flex gap-4 mt-6">
          <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white hover:bg-gray-800">
            View My Work
          </button>
          <button className="p-4 rounded-lg ring-1 ring-white text-white hover:bg-white hover:text-black">
            Contact Me
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Interactive3DBackground;
