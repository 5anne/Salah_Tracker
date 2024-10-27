import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-amber-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl font-bold">Salah <span className='text-amber-600'>Tracker</span></a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link href='/home'>Home</Link></li>
                        <li><Link href='/profile'>Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;