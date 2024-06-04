import {motion} from 'framer-motion'
import {Feature} from './components/features/index.tsx'

function App() {
  return (
    <div className="text-center">
         <Feature index={5} centered className="feat-darkmode" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>

      <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '50% 40%', '50% 40%', '100% 100%'],
              backgroundImage: [`radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)`, 'radial-gradient(farthest-corner, #06080a, #e2e5ea)', 'radial-gradient(farthest-corner, #06080a, #e2e5ea)', 'radial-gradient(farthest-corner, #e2e5ea, #e2e5ea)'],
            }}
            transition={{
              backgroundPosition: {
                times: [0, .5, .5, 1],
                type: 'spring',
                repeat: Infinity,
                duration: 10,
                delay: 1
              },
              backgroundImage: {
                times: [0, .2, .8, 1],
                repeat: Infinity,
                duration: 10,
                delay: 1
              },
            }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `radial-gradient(farthest-corner, #06080a, #e2e5ea)`,
              backgroundSize: '400% 400%',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <motion.h3
            animate={{
              color: ['#dae5ff', '#fff', '#fff', '#dae5ff'],
            }}
            transition={{
              color: {
                times: [.25, .35, .7, .8],
                type: 'spring',
                repeat: Infinity,
                duration: 10,
                delay: 1
              },
            }}
            style={{
              position: 'relative',
              mixBlendMode: 'difference',
            }}
          >Dark <br/>mode <br/>included</motion.h3>
        </Feature>
    </div>
  );
}

export default App;
