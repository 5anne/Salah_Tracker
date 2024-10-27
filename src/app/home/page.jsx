import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Headland_One } from 'next/font/google'

const headland = Headland_One({ weight: ['400'], subsets: ['latin'] })

const Home = () => {
    return (
        <div className={`${headland.className} min-h-screen bg-gray-50 space-y-4 py-4`}>
            <div className='flex justify-center items-center'>
                <Image src='/images/6723140.jpg' alt='' height={500} width={300}></Image>
            </div>
            <h6 className='text-center text-lg'>Wanna be a prayerful and consistent person.</h6>
            <Link href='/login' className='flex justify-center'><button className='btn bg-amber-600 font-bold'>Get Started</button></Link>
        </div>
    );
};

export default Home;