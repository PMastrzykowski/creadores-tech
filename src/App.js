import React, { Component, useRef } from 'react'
import './styles/all-styles.scss';
import {TimelineMax, Elastic, Power3, gsap} from 'gsap';
import Layout from './components/layout';
import Landing from './components/landing';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
     this.enterAnimation = gsap.timeline();
  }
  componentDidMount = () => {
    this.enterAnimation
    .fromTo(this.frontLayer, {width: '0', opacity: 0}, {width: '100%', opacity: 1, duration: .6}, 0.2)
    .fromTo(this.bigLogoWrapper, {opacity: '0', scale: 0}, {opacity: '1', scale: 1, ease: Elastic.easeOut.config(0.9, 0.6), duration: .6})
    .fromTo(this.bigLogoStroke, {height: '100%'}, {height: '1%', duration: .5}, '=-0.1')
    .to(this.bigLogoWrapper, {scale: 0, ease: Elastic.easeIn.config(0.9, 0.6), delay: 0.3, duration: 1})
    .to(this.frontLayer, {height: '0%', ease: Power3.easeOut, duration: .6})
    .set(this.contentWrapper, {display: 'block', opacity: 0})
    .to(this.contentWrapper, {opacity: 1, duration: .6})
  }
  render = () => {
    return (
      <div id="App">
        <div className='content-wrapper' ref={div => this.contentWrapper = div}>
        <Layout>
          <Landing/>
          </Layout>
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
