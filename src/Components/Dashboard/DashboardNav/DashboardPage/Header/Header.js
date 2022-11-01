import React from 'react'
import { RiAppsFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { FaUserTie } from "react-icons/fa";
export const Header = () => {
    return (
        <header className='w-full'>
            <nav className='w-full flex justify-between items-center gap-3 '>
                <h1 className='text-lg font-medium '>Dashboard</h1>
                <ul className='flex justify-center item-center gap-3'>
                    <li className='text-lg'><BiSearch /></li>
                    <li className='text-lg'><RiAppsFill /></li>
                    <li className='text-lg'><IoIosNotificationsOutline /></li>
                    <li className='text-lg'><FiSettings /></li>
                    <li className='text-lg'><FaUserTie /></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;