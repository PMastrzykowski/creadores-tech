import React from 'react';
import logo from './logo.svg';
import './styles/all-styles.scss';
import { useSpring, animated, interpolate } from 'react-spring'

function App() {
  const props = useSpring({
    opacity: 1,
    config: { duration: 3000 }, from: { opacity: 0 }
  })
  const props2 = useSpring({
    number: 1,
    config: { duration: 3000, precision: 0.01 }, from: { number: 0 }
  })
  const { o, xyz, color } = useSpring({
    from: { o: 0, xyz: [0, 0, 0], color: 'red' },
    config: { duration: 5000 },
    o: 1,
    xyz: [10, 20, 5],
    color: 'green'
  })
  const props3 = useSpring({
    to: async (next, cancel) => {
      await next({ opacity: 1, color: '#ffaaee', config: { duration: 3000 } })
      await next({ opacity: 0, color: 'rgb(14,26,19)', config: { duration: 500 } })
    },
    from: { opacity: 0, color: 'red' }
  })
  return (
    <div id="App">
      <header className="App-header">
        <animated.div style={props3}><h1>I will fade in</h1></animated.div>
        <animated.span>{props2.number}</animated.span>
        <animated.div
          style={{
            // If you can, use plain animated values like always, ...
            // You would do that in all cases where values "just fit"
            color,
            // Unless you need to interpolate them
            background: o.interpolate(o => `rgba(210, 57, 77, ${o})`),
            // Which works with arrays as well
            transform: xyz.interpolate((x, y, z) => `translate3d(${x}px, ${y}px, ${z}px)`),
            // If you want to combine multiple values use the "interpolate" helper
            border: interpolate([o, color], (o, c) => `${o * 10}px solid ${c}`),
            // You can also form ranges, even chain multiple interpolations
            padding: o.interpolate({ range: [0, 0.5, 1], output: [0, 0, 10] }).interpolate(o => `${o}%`),
            // Interpolating strings (like up-front) through ranges is allowed ...
            borderColor: o.interpolate({ range: [0, 1], output: ['red', '#ffaabb'] }),
            // There's also a shortcut for plain, optionless ranges ...
            opacity: o.interpolate([0.1, 0.2, 0.6, 1], [1, 0.1, 0.5, 1])
          }}
        >
          {o.interpolate(n => n.toFixed(2)) /* innerText interpolation ... */}
        </animated.div>
      </header>
      <animated.div className='frontLayer'>
        <div className='big-logo-wrapper'>
          <animated.div className='big-logo-stroke' />
          <div className='big-logo-filled'/>
        </div>
      </animated.div>
    </div>
  );
}

export default App;
