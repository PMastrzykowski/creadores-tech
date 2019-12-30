import React, { Component } from 'react'
import { TimelineMax, Elastic, Power3, gsap } from 'gsap';
class Estimate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tales: [
                {
                    title: 'What is the device of your project?',
                    buttons: [
                        {
                            caption: 'Desktop',
                            class: 'desktop'
                        },
                        {
                            caption: 'Mobile',
                            class: 'mobile'
                        },
                        {
                            caption: 'Other',
                            class: 'other'
                        }
                    ]
                },
                {
                    title: 'What is the scope of your project?',
                    buttons: [
                        {
                            caption: 'Frontend',
                            class: 'frontend'
                        },
                        {
                            caption: 'Backend',
                            class: 'backend'
                        },
                        {
                            caption: 'Design',
                            class: 'design'
                        }
                    ]
                }
            ]
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    sendEmail = (e) => {
        e.preventDefault();
    }
    componentDidMount = () => {
        window.scrollTo(0, 0);
    }
    render = () => {
        return (
            <div id="estimate">
                <div className='set-width content'>
                    <h1>Get an estimate</h1>
                    <p>Fill the form below and our team will contact you within few days.</p>

                    {this.state.tales.map((talesSet, i) => <div key={`tale-set-${i}`} className='section'>
                        <h3>{talesSet.title}</h3>
                        <div className='tales'>
                            {talesSet.buttons.map((button, index) => <label key={`button-${index}`}><input type='checkbox' />
                                <div className={`tale ${button.class}`}><div className='icon' />{button.caption}
                                    <div className='checkmark' />
                                    <svg className={`tongue`} width="163.296" height="81" viewBox="0 0 163.296 81">
                                        <defs>
                                            <linearGradient id={`linear-gradient-${index}-${i}`} x1="0.04" x2="1" y2="1" gradientUnits="objectBoundingBox">
                                                <stop offset="0" stopColor='#f02e2e' />
                                                <stop offset="1" className='color-2' />
                                            </linearGradient>
                                        </defs>
                                        <path id="Trazado_40" d="M0,0S18.536,45.8,56.286,52.464,123.335,14.752,151,26.646,151,81,151,81H10A10,10,0,0,1,0,71Z" fill={`url(#linear-gradient-${index}-${i})`} />
                                    </svg>
                                </div>
                            </label>)}
                        </div>
                    </div>)}

                    <form>
                        <div className="floating-label-wrap">
                            <input type="text" onChange={this.handleChange} value={this.state.email} name='subject' className="floating-label-field floating-label-field--s3" id="field-1" placeholder=" " ref={(div) => this.name = div}/>
                            <label htmlFor="field-1" className="floating-label">Email</label>
                        </div>
                        <div className="floating-label-wrap">
                            <input type="text" onChange={this.handleChange} value={this.state.name} name='subject' className="floating-label-field floating-label-field--s3" id="field-2" placeholder=" " ref={(div) => this.name = div}/>
                            <label htmlFor="field-2" className="floating-label">First name</label>
                        </div>
                        <div className="floating-label-wrap">
                            <input type="text" onChange={this.handleChange} value={this.state.surname} name='subject' className="floating-label-field floating-label-field--s3" id="field-3" placeholder=" " ref={(div) => this.name = div}/>
                            <label htmlFor="field-3" className="floating-label">Last name</label>
                        </div>
                        <div className="floating-label-wrap">
                            <textarea type="text" onChange={this.handleChange} value={this.state.body} name='body' className="floating-label-field floating-label-field--s3" id="field-4" placeholder=" " />
                            <label htmlFor="field-4" className="floating-label">Short description of your project</label>
                        </div>
                    </form>
                        <button className='round center' onClick={this.sendEmail}>Estimate</button>
                </div>
            </div >
        )
    }
}

export default Estimate;
