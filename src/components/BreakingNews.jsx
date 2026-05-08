import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex items-center  rounded border-2 container mx-auto '>
            <button className='bg-red-500 px-2 rounded-lg text-white'>Latest</button>
            <Marquee pauseOnHover>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita cupiditate necessitatibus atque sint debitis esse dolorum fugiat ducimus quod voluptates dicta repudiandae ipsum eius blanditiis, soluta excepturi, veniam, vitae eaque molestias vero maiores! Quis cumque et molestiae exercitationem quos harum tempora labore. Vel, atque similique.
            </Marquee>
        </div>
    );
};

export default BreakingNews;