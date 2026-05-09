import { getNewsDetails } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiArrowBack } from 'react-icons/bi';
import { CiBookmark } from 'react-icons/ci';
import { IoMdEye, IoMdShare } from 'react-icons/io';
import { MdStar } from 'react-icons/md';


export const generateMetadata = async ({ params }) => {
    const { id } = await params
    const details = await getNewsDetails(id)
    return {
        title: details.title,
        description: details.details,
    }

}



const DetailsPAge = async ({ params }) => {
    const { id } = await params;
    const details = await getNewsDetails(id)


    return (
        <div>
            <div className='mt-5 container p-5 rounded-xl overflow-hidden shadow-xl bg-white'>

                {/* Header */}
                <div className='flex justify-between items-center bg-gray-100 p-3'>

                    <div className='flex items-center gap-3'>
                        <Image
                            src={details.author?.img}
                            width={50}
                            height={50}
                            className='rounded-full object-cover w-12 h-12'
                            alt="Author image"
                        />

                        <div>
                            <h1 className='font-semibold text-sm md:text-base'>
                                {details.author?.name}
                            </h1>

                            <p className='text-xs md:text-sm text-gray-500'>
                                {details.author?.published_date}
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
                        {details?.title}
                    </h1>

                    <div className='mt-4'>
                        <Image
                            src={details?.thumbnail_url}
                            width={800}
                            height={500}
                            className='w-full h-auto rounded-lg object-cover'
                            alt='News thumbnail '
                        />
                    </div>
                </div>
                <div>
                    <h1 className='line-clamp-3 px-3 '>{details.details}</h1>

                    <hr />
                    {/* View & Ratings  */}
                    <div className='flex items-center justify-between p-3'>
                        <h1 className='flex items-center gap-2  text-[#FF8C47]'>
                            <MdStar size={20} />
                            <MdStar size={20} />
                            <MdStar size={20} />
                            <MdStar size={20} />
                            <MdStar size={20} />
                            {details.rating.number}
                        </h1>
                        <h1 className='flex items-center gap-2'>
                            <IoMdEye size={20} />
                            {details?.total_view} k
                        </h1>
                    </div>
                    <Link className='flex justify-end' href={`/category/${details.category_id}`}>
                        <button className='px-3 py-2 flex gap-2 items-center bg-[#FF8C47] text-white rounded border-b-2 border-transparent hover:border-[#FF8C47] transition duration-300'>
                            <BiArrowBack /> All news in this category
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DetailsPAge;