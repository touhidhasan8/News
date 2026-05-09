import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialPage = () => {
    return (
        <div>
            <h1 className="text-xl font-bold mb-4">Login With</h1>
            <div className='flex flex-col items-center gap-3 '>
                <button className='flex items-center gap-2 border-2 p-2 cursor-pointer transition hover:bg-gray-300'> <FaGoogle />Login with Google </button>
                <button className='flex items-center gap-2 border-2 p-2 cursor-pointer transition hover:bg-gray-300'>
                    <FaGithub />
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialPage;