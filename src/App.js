import React, { Component, useRef } from 'react'
import './styles/all-styles.scss';
import {TimelineMax, Elastic, Power3} from 'gsap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
     this.enterAnimation = new TimelineMax();
  }
  componentDidMount = () => {
    this.enterAnimation
    .fromTo(this.frontLayer, .6, {width: '0', opacity: 0}, {width: '100%', opacity: 1}, 0.2)
    .fromTo(this.bigLogoWrapper, .6, {opacity: '0', scale: 0}, {opacity: '1', scale: 1, ease: Elastic.easeOut.config(0.9, 0.6)})
    .fromTo(this.bigLogoStroke, .5, {height: '100%'}, {height: '1%'}, '=-0.1')
    .to(this.bigLogoWrapper, 1, {scale: 0, ease: Elastic.easeIn.config(0.9, 0.6), delay: 0.3})
    .to(this.frontLayer, 0.6, {height: '0%', ease: Power3.easeOut})
    .set(this.contentWrapper, {display: 'block'})
    .to(this.appHeader, 0.6, {background: '#8CCED8'})
  }
  render = () => {
    return (
      <div id="App">
        <div className='content-wrapper' ref={div => this.contentWrapper = div}>
        <header id="app-header" ref={div => this.appHeader = div}>
          <div className='navigation'>
            <div className='navigation-logo' />
            <div className='navigation-menu'>
              <button className='estimate'>Estimate project</button>
              <button className='contact'>Contact</button>
            </div>
          </div>
        </header>
        <section id='section-1'>
          <div className='left-side'/>
          <div className='text'>We tailor products that help you sell better.
Using top technologies we <u>design, build, ship and maintain</u> your website.</div>
        </section>
        <section id='section-2'>
          <div className='buttons'>
            <button>Frontend</button>
          </div>
        </section>
        </div>
        <div className='frontLayer' ref={div => this.frontLayer = div}>
          <div className='big-logo-wrapper' ref={div => this.bigLogoWrapper = div}>
            <div className='big-logo-stroke' ref={div => this.bigLogoStroke = div}/>
            <div className='big-logo-filled'/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
