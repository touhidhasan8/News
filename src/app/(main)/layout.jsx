import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import React from 'react';

const layout = ({children}) => {
    return (
        <div>
            <Hero></Hero>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;