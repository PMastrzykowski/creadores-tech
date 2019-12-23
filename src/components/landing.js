import React, { Component, useRef } from 'react'
import ScrollDown from './scroll-down';
class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render = () => {
        return (
            <div>
                <section id='section-short' className='rainbow'>
                    <div className='logo-white-medium' />
                    <ScrollDown />
                </section>
                <section id='section-1'>
                    <div className='text'><div>We tailor products that help you sell better.
Using top technologies we <u>design, build, ship and maintain</u> your digital apps and websites.</div>
                        <button className='round'>Estimate</button></div>
                    <ScrollDown />
                </section>
                <section id='section-2' className='example'>
                    <div className='info'>
                        <div className='text'><div>Goal management web app
crafted for teams and ambitious individuals.</div>
                            <button className='expanding'>Read the success story</button></div>
                        <ScrollDown />
                    </div>
                    <div className='images'>
                        <img src='./goalsio-example-1.svg' />
                        <img src='./goalsio-example-2.svg' />
                    </div>
                </section>
                <section id='section-3' className='example'>
                    <div className='images'>
                        <img src='./karolmierzwa-example-1.svg' />
                        <img src='./karolmierzwa-example-2.svg' />
                    </div>
                    <div className='info'>
                        <div className='text'><div>Complete philosophy blog</div>
                            <button className='expanding'>Read the success story</button></div>
                        <ScrollDown />
                    </div>
                </section>
            </div>
        )
    }
}

export default Landing;
