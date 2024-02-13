'use client';
import { motion, useTransform } from 'framer-motion';

const AnimatedChart = ({ scrollYProgress }) => {
  return (
    <div className="w-full h-full">
      <svg width="100%" height="100%">
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="rs-cog50"
            transform="translate(200 200)"
            fill="#cdb4db"
            stroke="#000"
            strokeWidth="2"
          >
            <motion.rect
              width="40"
              height={useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [300, 360, 200]
              )}
              y={useTransform(scrollYProgress, [0, 0.5, 1], [0, -60, 100])}
              x={useTransform(
                scrollYProgress,
                [0, 0.6, 0.72, 0.88, 0.96, 1],
                [0, 0, 50, 50, 100, 100]
              )}
              id="Fill-76"
            />
          </g>

          <g
            id="rs-cog50"
            transform="translate(250 200)"
            fill="#ffc8dd"
            stroke="#000"
            strokeWidth="2"
          >
            <motion.rect
              width="40"
              height={useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [200, 280, 400]
              )}
              y={useTransform(scrollYProgress, [0, 0.5, 1], [100, 20, -100])}
              x={useTransform(
                scrollYProgress,
                [0, 0.6, 0.72, 1],
                [0, 0, -50, -50]
              )}
              id="Fill-76"
            />
          </g>

          <g
            id="rs-cog50"
            transform="translate(300 200)"
            fill="#ffafcc"
            stroke="#000"
            strokeWidth="2"
          >
            <motion.rect
              width="40"
              height={useTransform(
                scrollYProgress,
                [0, 0.5, 1],
                [100, 20, 300]
              )}
              y={useTransform(scrollYProgress, [0, 0.5, 1], [200, 280, 0])}
              x={useTransform(
                scrollYProgress,
                [0, 0.88, 0.96, 1],
                [0, 0, -50, -50]
              )}
              id="Fill-76"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default AnimatedChart;
