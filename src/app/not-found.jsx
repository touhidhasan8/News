import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className='text-center font text-2xl'>
            <h1>Not Found</h1>
            <Link href={'/'}>
                <Button>Go Home </Button></Link>
        </div>
    );
};

export default NotFound;