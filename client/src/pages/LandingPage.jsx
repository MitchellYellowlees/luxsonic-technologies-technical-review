import React from 'react';
import hero from '../stock_medical.png';
import '../styles/LandingPage.css';

export default function LandingPage() {
    return (
        <div className="landing-page-root">
            <img src={hero} className='hero-image' height='100%' width='50%'/>
            <div className='landing-page-content'>
                Welcome to &lt;CompanyName&gt; - Technical Review
                <button>
                    LOG IN
                </button>
            </div>
        </div>
    )
}