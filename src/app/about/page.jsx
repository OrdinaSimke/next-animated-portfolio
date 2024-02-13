'use client';

import Brain from '@/components/brain';
import AnimatedChart from '@/components/animatedChart';
import ExperienceItem from '@/components/experienceItem';
import ScrollSVG from '@/components/scrollSVG';
import Skill from '@/components/skill';
import { motion, useInView, useScroll } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const skillList = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Recharts.js',
  'Tailwind CSS',
  'LESS',
  'SCSS',
  'MongoDB',
  'Node.js',
  'Tableau',
  'Alteryx',
  'SQL',
];

const About = () => {
  const containerRef = useRef();
  const { scrollYProgress } = useScroll({ container: containerRef });
  const skillRef = useRef();
  const isSKillRefInView = useInView(skillRef, { margin: '-100px' });

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full overflow-y-scroll lg:flex"
        style={{ scrollbarWidth: 'thin' }}
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bol text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Nulla mollis augue sit amet risus mollis tempus. Pellentesque
              magna mi, sollicitudin id purus efficitur, ullamcorper interdum
              quam. Etiam tincidunt vitae ligula in ultrices. Nullam quis elit
              mi. Duis facilisis mi non orci blandit lobortis.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Vivamus in dolor pharetra augue dignissim maximus a quis elit.
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="self-end pr-4">
              <Image
                src="/signature.svg"
                alt=""
                width={185}
                height={77}
                className=""
              />
            </div>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}
          <ScrollSVG />
          {/* SKILLS CONTAINER */}
          <div ref={skillRef} className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <motion.h1
              className="font-bol text-2xl"
              initial={{ x: '-300px' }}
              animate={isSKillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <div className="flex gap-4 flex-wrap">
              {skillList.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ x: '-800px' }}
                  animate={isSKillRefInView ? { x: 0 } : { x: -800 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Skill text={skill} />
                </motion.div>
              ))}
            </div>
            {/* SKILL SCROLL SVG */}
            <ScrollSVG />
          </div>

          {/* EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            {/* EXPERIENCE TITLE */}
            <h1 className="font-bol text-2xl">EXPERIENCE</h1>
            {/* EXPERIENCE LIST */}
            <div className="">
              {/* EXPERIENCE LIST ITEM */}
              <ExperienceItem
                left={true}
                title={'Senior JavaScript Engineer'}
                desc={'My job description'}
                date={'2024'}
                company={'Ordina'}
              />
              <ExperienceItem
                left={false}
                title={'Senior JavaScript Engineer'}
                desc={'My job description'}
                date={'2023'}
                company={'Ordina'}
              />
              <ExperienceItem
                left={true}
                title={'Senior JavaScript Engineer'}
                desc={'My job description'}
                date={'2022'}
                company={'Ordina'}
              />
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block sticky top-0 z-30 w-1/3 xl:w-1/2">
          {/* <Brain scrollYProgress={scrollYProgress} /> */}
          <AnimatedChart scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default About;
