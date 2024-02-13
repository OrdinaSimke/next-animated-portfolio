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
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

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
        // style={{ scrollbarWidth: 'thin' }}
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:pr-0 lg:w-2/3 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bol text-2xl">ABOUT ME</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              Experienced Web Developer and Data Visualization Engineer adept in
              all stages of advanced web development and data visualization.
              Knowledgeable in designing, developing, testing and debugging
              processes. Equipped with a diverse and promising skill-set.
              Proficient in an assortment of technologies. Able to effectively
              self-manage during independent projects, as well as collaborate in
              a team setting.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Web Developer and Data Visualization Engineer
            </span>
            {/* BIOGRAPHY SIGN */}
            <div className="flex flex-row justify-between">
              {' '}
              <div className="h-12 w-12">
                <ScrollSVG />
              </div>
              <div className="self-end pr-8">
                <Image
                  src="/signature.svg"
                  alt=""
                  width={185}
                  height={77}
                  className=""
                />
              </div>
            </div>
          </div>
          {/* BIOGRAPHY SCROLL SVG */}

          {/* SKILLS CONTAINER */}
          <div ref={skillRef} className="flex flex-col gap-12 justify-center">
            {/* SKILLS TITLE */}
            <motion.h1
              className="font-bol text-2xl"
              initial={{ x: '-400px' }}
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
          <div
            className="flex flex-col gap-12 justify-center pb-24"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              className="font-bol text-2xl"
              initial={{ x: '-400px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.3 }}
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              className=""
              initial={{ x: '-500px' }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.5 }}
            >
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
            </motion.div>
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
