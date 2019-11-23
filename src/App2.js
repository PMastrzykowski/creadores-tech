import React, { useState, useRef } from 'react'
import logo from './logo.svg';
import './styles/all-styles.scss';
import { useTransition, useSpring, useChain, config, animated } from 'react-spring'

function App() {
  // const props = useSpring({
  //   opacity: 1,
  //   config: { duration: 3000 }, from: { opacity: 0 }
  // })
  // const props2 = useSpring({
  //   number: 1,
  //   config: { duration: 3000, precision: 0.01 }, from: { number: 0 }
  // })
  // const { o, xyz, color } = useSpring({
  //   from: { o: 0, xyz: [0, 0, 0], color: 'red' },
  //   config: { duration: 5000 },
  //   o: 1,
  //   xyz: [10, 20, 5],
  //   color: 'green'
  // })
  const bigLogoRef = useRef()
  const bigLogo = useSpring({
    ref: bigLogoRef,
    config: { mass: 1, tension: 200, friction: 30},
    from: { width: '0%', background: '#ffffff' },
    to: { width: '100%', background: '#295b6e' }
  })
  const bigLogoWrapperRef = useRef()
  let bigLogoWrapper = useSpring({
    ref: bigLogoWrapperRef,
    config: { mass: 1, tension: 300, friction: 12},
    from: { opacity: '0', transform: 'scale(0)' },
    to: { opacity: '1', transform: 'scale(1)' }
  })
  const bigLogoStrokeRef = useRef()
  const bigLogoStroke = useSpring({
    ref: bigLogoStrokeRef,
    config: { mass: 1, tension: 300, friction: 50},
    from: { height: '100%' },
    to: { height: '0%' }
  })
  const bigLogoWrapper2Ref = useRef()
  let bigLogoWrapper2 = useSpring({
    ref: bigLogoWrapper2Ref,
    config: { mass: 1, tension: 300, friction: 12},
    // from: { opacity: '0', transform: 'scale(0)' },
    to: { opacity: '0', transform: 'scale(0)' }
  })
  // const props3 = useSpring({
  //   to: async (next, cancel) => {
  //     await next({ opacity: 1, color: '#ffaaee', config: { duration: 3000 } })
  //     await next({ opacity: 0, color: 'rgb(14,26,19)', config: { duration: 500 } })
  //   },
  //   from: { opacity: 0, color: 'red' }
  // })
  useChain([bigLogoRef, bigLogoWrapperRef, bigLogoStrokeRef, bigLogoWrapper2Ref], [0.1, 0.7, 1])

  return (
    <div id="App">
      <header className="App-header">
        
      </header>
      <animated.div style={bigLogo} className='frontLayer'>
        <animated.div style={bigLogoWrapper} className='big-logo-wrapper'>
          <animated.div style={bigLogoStroke} className='big-logo-stroke' />
          <div className='big-logo-filled'/>
        </animated.div>
      </animated.div>
    </div>
  );
}

export default App;
