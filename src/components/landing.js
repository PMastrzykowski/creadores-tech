import React, { Component, useRef } from 'react'
import ScrollDown from './scroll-down';
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
    }
    render = () => {
        return (
            <>
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
                <section id='section-4'>
                    <div className='text'>
                        How we do it
                    </div>
                    <div className='tales'>
                        {this.state.processTales.map((tale, index) => <div className='tale' key={`tale-${index}`}>{tale.caption}</div>)}
                        <div className='tale'><button className='expanding'>Learn more</button></div>
                    </div>
                </section>
                <section id='section-5' className='example'>
                    <div className='info'>
                        <div className='text'><div>Our stack</div>
                            <div className='description'>With modern technologies we use, we can create whatever you imagine. Depending on your needs we will customize the tools.</div></div>
                        <ScrollDown />
                    </div>
                    <div className='images'>
                        <img src='./react-logo.svg' />
                        <img src='./express-logo.svg' />
                        <img src='./mongodb-logo.svg' />
                        <img src='./node-logo.svg' />
                        <img src='./sass-logo.svg' />
                        <img src='./strapi-logo.svg' />
                    </div>
                </section>
                <section id='section-6'>
                    <div>Let's get started</div>
                    <button className='round'>Estimate</button>
                </section>
            </>
        )
    }
}

export default Landing;