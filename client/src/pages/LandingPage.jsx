import React from 'react';
import hero from '../stock_medical.png';
import '../styles/LandingPage.css';
import NavBar from '../components/NavBar.jsx';
import LoginButton from '../components/LoginButton';

export default function LandingPage() {
    return (
        <div className="landing-page-root">
            <NavBar/>
            <img src={hero} className='hero-image' height='100%' width='50%'/>
            <div className='landing-page-content'>
                Welcome to &lt;CompanyName&gt; - Technical Review
                <LoginButton/>
            </div>
        </div>
    )
}