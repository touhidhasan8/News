import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { IoMdEye, IoMdShare } from 'react-icons/io';
import { MdStar } from 'react-icons/md';

const News = ({ n }) => {

    return (
        <div className='mt-5 border rounded-xl overflow-hidden shadow-sm bg-white'>

            {/* Header */}
            <div className='flex justify-between items-center bg-gray-100 p-3'>

                <div className='flex items-center gap-3'>
                    <Image
                        src={n.author?.img}
                        width={50}
                        height={50}
                        className='rounded-full object-cover w-12 h-12'
                        alt="Author image"
                    />

                    <div>
                        <h1 className='font-semibold text-sm md:text-base'>
                            {n.author?.name}
                        </h1>

                        <p className='text-xs md:text-sm text-gray-500'>
                            {n.author?.published_date}
                        </p>
                    </div>
                </div>

                <div className='flex items-center gap-3 text-gray-600'>
                    <button className='hover:text-black transition'>
                        <IoMdShare size={20} />
                    </button>

                    <button className='hover:text-black transition'>
                        <CiBookmark size={20} />
                    </button>
                </div>
            </div>

            {/* Content */}
            <div className='p-4'>

                <h1 className='font-bold text-lg md:text-2xl leading-snug'>
                    {n?.title}
                </h1>

                <div className='mt-4'>
                    <Image
                        src={n?.thumbnail_url}
                        width={800}
                        height={500}
                        className='w-full h-auto rounded-lg object-cover'
                        alt='News thumbnail '
                    />
                </div>
            </div>
            <div>
                <h1 className='line-clamp-3 px-3 '>{n.details}</h1>
                <Link href={`/news/${n._id}`}>
                    <button className='px-3 py-2 text-[#FF8C47] border-b-2 border-transparent hover:border-[#FF8C47] transition duration-300'>
                        Read More
                    </button>
                </Link>
                <hr />
                {/* View & Ratings  */}
                <div className='flex items-center justify-between p-3'>
                    <h1 className='flex items-center gap-2  text-[#FF8C47]'>
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        <MdStar size={20} />
                        {n.rating.number}
                    </h1>
                    <h1 className='flex items-center gap-2'>
                        <IoMdEye size={20} />
                        {n?.total_view} k
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default News;