'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div
        className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 overflow-y-auto"
        // style={{ scrollbarWidth: 'thin' }}
      >
        {/* Image container */}
        <div
          className="h-1/2 lg:h-full lg:w-1/2 relative"
          style={{ minHeight: '300px' }}
        >
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* Text container */}
        <div className="lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* Desc */}
          <p className="md:text-xl">
            Welcome to my digital canvas, where innovation and creativity
            converge. With a keen eye for aesthetics and a mastery of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* Buttons */}
          <div className="lg:w-full flex gap-4 pb-12">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
