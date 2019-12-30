import React, { Component, useRef } from 'react'
import ScrollDown from './scroll-down';
import Div100vh from 'react-div-100vh';
import { Waypoint } from 'react-waypoint';
import { gsap } from 'gsap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            processTales: [
                {
                    caption: 'Business analysis'
                },
                {
                    caption: 'Product design'
                },
                {
                    caption: 'Prototyping'
                },
                {
                    caption: 'Development'
                },
                {
                    caption: 'Support and maintenance'
                }
            ]
        }
        this.initialAnimationSettings = gsap.timeline();
        this.scrollAnimation = gsap.timeline();
    }
    componentDidMount = () => {
        return
        this.scrollAnimation
            .to(this.section1text, { y: '100px', opacity: 0, duration: .01 })
            .to(this.section2info, { left: '-100%', opacity: 0, duration: .1 }, 0)
            .to(this.section2image1, { y: '200px', opacity: 0, duration: .1 }, 0)
            .to(this.section2image2, { y: '100px', opacity: 0, duration: .1 }, 0)
            .to(this.section3info, { right: '-100%', opacity: 0, duration: .1 }, 0)
            .to(this.section3image1, { y: '200px', opacity: 0, duration: .1 }, 0)
            .to(this.section3image2, { y: '100px', opacity: 0, duration: .1 }, 0)
            .to(this.section4text, { y: '100px', opacity: 0, duration: .1 }, 0)
            .to(this.section4tales, { opacity: 0, duration: .1 }, 0)
            .to(this.section5info, { left: '-100%', opacity: 0, duration: .1 }, 0)
            .to(this.section5images, { right: '-100%', opacity: 0, duration: .1 }, 0)
    }
    _handleWaypointEnter = (point) => {
        return
        switch (point) {
            case 1:
                this.scrollAnimation
                    .to('#section1text', { y: 0, opacity: 1, duration: 1 })
                break;
            case 2:
                this.scrollAnimation
                    .to(this.section2image1, { y: 0, opacity: 1, duration: 1 })
                    .to(this.section2image2, { y: 0, opacity: 1, duration: 1 }, '=-1')
                    .to(this.section2info, { left: 0, opacity: 1, duration: 1 }, '=-1')
                break;
            case 3:
                this.scrollAnimation
                    .to(this.section3image1, { y: 0, opacity: 1, duration: 1 })
                    .to(this.section3image2, { y: 0, opacity: 1, duration: 1 }, '=-1')
                    .to(this.section3info, { right: 0, opacity: 1, duration: 1 }, '=-1')
                break;
            case 4:
                this.scrollAnimation
                    .to(this.section4text, { y: 0, opacity: 1, duration: 1 })
                    .to(this.section4tales, { opacity: 1, duration: 1 }, '=-1')
                break;
            case 5:
                this.scrollAnimation
                    .to(this.section5info, { left: 0, opacity: 1, duration: 1 })
                    .to(this.section5images, { right: 0, opacity: 1, duration: 1 }, '=-1')
                break;
            default:
                break;
        }
    }
    _handleWaypointLeave = (point) => {
        return
        switch (point) {
            case 1:
                this.scrollAnimation
                    .to(this.section1text, { y: '100px', opacity: 0, duration: 1 });
                break;
            case 2:
                this.scrollAnimation
                    .to(this.section2info, { left: '-100%', opacity: 0, duration: .1 }, 0)
                    .to(this.section2image1, { y: '200px', opacity: 0, duration: .1 }, 0)
                    .to(this.section2image2, { y: '100px', opacity: 0, duration: .1 }, 0)
                break;
            case 3:
                this.scrollAnimation
                    .to(this.section3info, { right: '-100%', opacity: 0, duration: .1 }, 0)
                    .to(this.section3image1, { y: '200px', opacity: 0, duration: .1 }, 0)
                    .to(this.section3image2, { y: '100px', opacity: 0, duration: .1 }, 0)
                break;
            case 4:
                this.scrollAnimation
                    .to(this.section4text, { y: '100px', opacity: 0, duration: .1 }, 0)
                    .to(this.section4tales, { opacity: 0, duration: .1 }, 0)
                break;
            case 5:
                this.scrollAnimation
                    .to(this.section5info, { left: '-100%', opacity: 0, duration: .1 }, 0)
                    .to(this.section5images, { right: '-100%', opacity: 0, duration: .1 }, 0)
                break;
            default:
                break;
        }
    }
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render = () => {
        return (
            <>
                <Div100vh className='snap'>
                    <section id='section-short' className='rainbow'>
                        <div className='logo-white-medium' />
                        <Waypoint onEnter={() => this._handleWaypointEnter(0)} onLeave={() => this._handleWaypointLeave(0)} />
                        <ScrollDown onClick={() => this.props.setScroll(this.section1wrapper.getBoundingClientRect().top)} />
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-1' ref={e => this.section1wrapper = e}>
                        <div className='text' id='section1text' ref={e => this.section1text = e}><div>We tailor products that help you sell better.
Using top technologies we <u>design, build, ship and maintain</u> your digital apps and websites.</div>
                            <Waypoint onEnter={() => this._handleWaypointEnter(1)} onLeave={() => this._handleWaypointLeave(1)} />
                            <Link to='/estimate'><button className='round'>Estimate</button></Link></div>
                        <ScrollDown onClick={() => this.props.setScroll(this.section2wrapper.getBoundingClientRect().top * 2)} />
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-2' className='example' ref={e => this.section2wrapper = e}>
                        <div className='info' ref={e => this.section2info = e}>
                            <Waypoint onEnter={() => this._handleWaypointEnter(2)} onLeave={() => this._handleWaypointLeave(2)} />
                            <div className='text'><div>Goal management web app
crafted for teams and ambitious individuals.</div>
                                <button className='expanding'>Read the success story</button></div>
                            <ScrollDown onClick={() => this.props.setScroll(this.section3wrapper.getBoundingClientRect().top * 3)} />
                        </div>
                        <div className='images' ref={e => this.section2images = e}>
                            <img src='./goalsio-example-1.svg' ref={e => this.section2image1 = e} />
                            <img src='./goalsio-example-2.svg' ref={e => this.section2image2 = e} />
                        </div>
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-3' className='example' ref={e => this.section3wrapper = e}>
                        <div className='images'>
                            <Waypoint onEnter={() => this._handleWaypointEnter(3)} onLeave={() => this._handleWaypointLeave(3)} />
                            <img src='./karolmierzwa-example-1.svg' ref={e => this.section3image1 = e} />
                            <img src='./karolmierzwa-example-2.svg' ref={e => this.section3image2 = e} />
                        </div>
                        <div className='info' ref={e => this.section3info = e}>
                            <div className='text'><div>Complete philosophy blog</div>
                                <button className='expanding'>Read the success story</button></div>
                            <ScrollDown onClick={() => this.props.setScroll(this.section4wrapper.getBoundingClientRect().top * 4)} />
                        </div>
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-4' ref={e => this.section4wrapper = e}>
                        <div className='text' ref={e => this.section4text = e}>
                            How we do it
                            <Waypoint onEnter={() => this._handleWaypointEnter(4)} onLeave={() => this._handleWaypointLeave(4)} />
                        </div>
                        <div className='tales' ref={e => this.section4tales = e}>
                            {this.state.processTales.map((tale, index) => <div className='tale' key={`tale-${index}`}>{tale.caption}</div>)}
                            <div className='tale'><button className='expanding'>Learn more</button></div>
                        </div>
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-5' className='example'>
                        <div className='info' ref={e => this.section5info = e}>
                            <Waypoint onEnter={() => this._handleWaypointEnter(5)} onLeave={() => this._handleWaypointLeave(5)} />
                            <div className='text'><div>Our stack</div>
                                <div className='description'>With modern technologies we use, we can create whatever you imagine. Depending on your needs we will customize the tools.</div></div>
                            <ScrollDown onClick={() => this.props.setScroll(this.section6wrapper.getBoundingClientRect().top * 6)} />
                        </div>
                        <div className='images' ref={e => this.section5images = e}>
                            <img src='./react-logo.svg' />
                            <img src='./express-logo.svg' />
                            <img src='./mongodb-logo.svg' />
                            <img src='./node-logo.svg' />
                            <img src='./sass-logo.svg' />
                            <img src='./strapi-logo.svg' />
                        </div>
                    </section>
                </Div100vh>
                <Div100vh className='snap'>
                    <section id='section-6' ref={e => this.section6wrapper = e}>
                        <div>Let's get started</div>
                        <Link to='/estimate'><button className='round'>Estimate</button></Link>
                    </section>
                </Div100vh>
            </>
        )
    }
}

export default Landing;