import Navbar from '@/components/Navbar';
import React from 'react';
import { montserrat } from '../layout';

const layout = ({ children }) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;