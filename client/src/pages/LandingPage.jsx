import React from 'react';
import hero from '../stock_medical.png';
import '../styles/LandingPage.css';
import LoginButton from '../components/LoginButton';

export default function LandingPage() {
    return (
        <div className="landing-page-root">
            <img src={hero} className='hero-image' height='100%' width='50%'/>
            <div className='landing-page-content'>
                <span className="greeting">
                Welcome to &lt;CompanyName&gt; - Technical Review
                
                <LoginButton/>
                </span>
            </div>
        </div>
    )
}