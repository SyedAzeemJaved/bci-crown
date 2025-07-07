import { motion } from 'framer-motion';
import { Activity, Brain, Waves, Zap } from 'lucide-react';
import { useState } from 'react';
import BrainWavesAnimation from './components/BrainWavesAnimation';

const Dashboard = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [displayMode, setDisplayMode] = useState<'idle' | 'waves' | 'result'>(
    'idle'
  );

  const handleBrainWaveAnalysis = async () => {
    setIsAnalyzing(true);
    setDisplayMode('waves');
    setResult(null);

    try {
      // Simulate API call - replace with your actual API endpoint
      await new Promise(resolve => setTimeout(resolve, 3000));

      // Simulate API response - replace with actual API call
      const mockResponse = await fetch('/api/brain-waves', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ action: 'analyze' }),
      }).catch(() => ({ ok: false }));

      if (mockResponse.ok) {
        const data = await mockResponse.json();
        setResult(data.word || 'CONSCIOUSNESS');
      } else {
        // Fallback for demo
        const words = [
          'CONSCIOUSNESS',
          'AWARENESS',
          'THOUGHT',
          'MIND',
          'INTELLIGENCE',
        ];
        setResult(words[Math.floor(Math.random() * words.length)]);
      }
    } catch (error) {
      console.error('Error analyzing brain waves:', error);
      setResult('ERROR');
    } finally {
      setIsAnalyzing(false);
      setDisplayMode('result');
    }
  };

  return (
    <div className='relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'>
      {/* Animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='animate-blob absolute -top-40 -right-40 h-80 w-80 rounded-full bg-purple-500 opacity-20 mix-blend-multiply blur-xl filter' />
        <div className='animate-blob animation-delay-2000 absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-blue-500 opacity-20 mix-blend-multiply blur-xl filter' />
        <div className='animate-blob animation-delay-4000 absolute top-40 left-40 h-80 w-80 rounded-full bg-pink-500 opacity-20 mix-blend-multiply blur-xl filter' />
      </div>

      {/* Main content */}
      <div className='relative z-10 flex min-h-screen flex-col items-center justify-center p-8'>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='mb-12 text-center'
        >
          <h1 className='mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-6xl font-bold text-transparent'>
            AI Assisted Brain-Computer Interface For EEG to Text Communication
          </h1>
          <p className='mx-auto max-w-2xl text-xl text-gray-300'>
            Advanced Brain-Computer Interface for Real-Time Thought to Text
          </p>
          <div className='mx-auto mt-4 flex justify-center'>
            <span className='rounded-full border border-purple-500/30 bg-gradient-to-r from-purple-500/20 to-pink-500/20 px-6 py-2 text-sm text-gray-300 backdrop-blur-sm'>
              Developed by Mujtaba and Mehak
            </span>
          </div>
        </motion.div>

        {/* Main glassmorphism card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='w-full max-w-4xl rounded-3xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-xl'
        >
          {/* Control panel */}
          <div className='mb-8 flex flex-col items-center justify-between gap-8 lg:flex-row'>
            <div className='flex items-center gap-4'>
              <div className='rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-3'>
                <Brain className='h-8 w-8 text-white' />
              </div>
              <div>
                <h3 className='text-xl font-semibold text-white'>
                  Neural Interface
                </h3>
                <p className='text-gray-400'>Ready for Signal Processing</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBrainWaveAnalysis}
              disabled={isAnalyzing}
              className='flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-purple-700 hover:to-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50'
            >
              {isAnalyzing ? (
                <>
                  <Activity className='h-5 w-5 animate-spin' />
                  Analyzing...
                </>
              ) : (
                <>
                  <Waves className='h-5 w-5' />
                  Analyze Brain Waves
                </>
              )}
            </motion.button>
          </div>

          {/* Visualization area */}
          <div className='relative h-96 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50'>
            {/* Single animated container */}
            <motion.div
              key={displayMode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className='absolute inset-0 flex items-center justify-center'
            >
              {displayMode === 'waves' && <BrainWavesAnimation />}

              {displayMode === 'result' && result && (
                <div className='text-center'>
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{
                      type: 'spring',
                      stiffness: 100,
                      damping: 20,
                    }}
                    className='mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-8xl font-bold text-transparent'
                  >
                    {result}
                  </motion.div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className='text-xl text-gray-400'
                  >
                    Neural pattern detected
                  </motion.p>
                </div>
              )}

              {displayMode === 'idle' && (
                <div className='text-center'>
                  <Zap className='mx-auto mb-4 h-16 w-16 text-gray-500' />
                  <p className='text-xl text-gray-400'>
                    Click "Analyze Brain Waves" to begin
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Status indicators */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='mt-8 flex flex-wrap justify-center gap-6'
        >
          <div className='rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl'>
            <div className='mx-auto mb-2 h-3 w-3 animate-pulse rounded-full bg-green-400' />
            <p className='text-sm text-gray-300'>System Online</p>
          </div>
          <div className='rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl'>
            <div className='mx-auto mb-2 h-3 w-3 animate-pulse rounded-full bg-blue-400' />
            <p className='text-sm text-gray-300'>Neural Ready</p>
          </div>
          <div className='rounded-xl border border-white/10 bg-white/5 p-4 text-center backdrop-blur-xl'>
            <div className='mx-auto mb-2 h-3 w-3 animate-pulse rounded-full bg-purple-400' />
            <p className='text-sm text-gray-300'>BCI Active</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
