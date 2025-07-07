import { motion } from 'framer-motion';

const BrainWavesAnimation = () => {
  return (
    <div className='relative h-64 w-64'>
      {/* Multiple animated wave layers */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className='absolute inset-0'
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2 + index * 0.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.2,
          }}
        >
          <svg
            viewBox='0 0 200 200'
            className='h-full w-full'
            style={{
              filter: `blur(${index * 0.5}px)`,
            }}
          >
            <motion.path
              d='M0,100 Q25,50 50,100 T100,100 T150,100 T200,100'
              stroke={`hsl(${240 + index * 20}, 70%, 60%)`}
              strokeWidth='2'
              fill='none'
              animate={{
                d: [
                  'M0,100 Q25,50 50,100 T100,100 T150,100 T200,100',
                  'M0,100 Q25,150 50,100 T100,100 T150,100 T200,100',
                  'M0,100 Q25,50 50,100 T100,100 T150,100 T200,100',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.3,
              }}
            />
          </svg>
        </motion.div>
      ))}

      {/* Central brain icon */}
      <motion.div
        className='absolute inset-0 flex items-center justify-center'
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <div className='flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500'>
          <svg
            className='h-8 w-8 text-white'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
            />
          </svg>
        </div>
      </motion.div>
    </div>
  );
};

export default BrainWavesAnimation;
