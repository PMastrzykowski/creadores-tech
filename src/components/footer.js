import React from 'react';
const menu = [
    {
        caption: 'About us',
        link: 'about'
    },
    {
        caption: 'Careers',
        link: 'careers'
    },
    {
        caption: 'Terms of Use',
        link: 'terms-of-use'
    },
    {
        caption: 'Privacy Policy',
        link: 'privacy-policy'
    },
    {
        caption: 'Client portal',
        link: 'client'
    }
]
const services = [
    {
        caption: 'Node.js',
        link: 'service/node'
    },
    {
        caption: 'React.js',
        link: 'service/react'
    },
    {
        caption: 'Web shops',
        link: 'service/web-shop'
    },
    {
        caption: 'Quality assurance',
        link: 'service/qa'
    },
    {
        caption: 'Design',
        link: 'service/design'
    }
]
const Footer = () => <footer>
    <div className='set-width'>
    <div className='logo-white-medium'/>
    <div>
        <div className='title'>Menu</div>
        <div>
            <ul>
                {menu.map((item, index) => <li key={`item-${index}`}>{item.caption}</li>)}
            </ul>
        </div>
    </div>
    <div>
        <div className='title'>Services</div>
        <div>
            <ul>
                {services.map((item, index) => <li key={`item-${index}`}>{item.caption}</li>)}
            </ul>
        </div>
    </div>
    <div>
        <div className='title'>Contact</div>
        <div>
            hi@creadores.tech
        </div>
    </div>
    </div>
</footer>

export default Footer;