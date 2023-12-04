import React from 'react';

const Banner = () => {
    return (
        <div>
            
            <div className="hero w-5/6 mx-auto min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/2cZQpd2/north-south-university1451.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to NSU-Hostel</h1>
                        <p className="mb-5">Get Healthy And Posh Foods. Enjoy your Varsity life with us.</p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;