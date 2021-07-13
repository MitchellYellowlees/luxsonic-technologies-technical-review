import React from 'react';

import medical from '../stock_medical.jpg';

export default function LandingPage() {
    return (
        <div className="landing-page-root">
            <div className="imgBox">
            <img className="hero-image" src={medical} alt="VR Doctor" width='100%'></img>
            </div>
        </div>
    )
}