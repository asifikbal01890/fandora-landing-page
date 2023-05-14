import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../img/FANDORA LOGO.png';
import { BiMenuAltRight } from "react-icons/bi";

const NavBar = () => {

    const [open, setOpen] = useState(false);

    const handleMenuBtn = () => {
        setOpen(open => !open)
    }
    console.log(open)

    const menuContent = <React.Fragment>
        <li className={`${({isActive})=> isActive ? 'active' : undefined} transition-colors ease-in-out text-base font-bold text-white hover:text-[#52C1B9] duration-300`}><NavLink to="/">Home</NavLink></li>
        <li className={`${({isActive})=> isActive ? 'active' : undefined} transition-colors ease-in-out text-base font-bold text-white hover:text-[#52C1B9] duration-300`}><NavLink to="/keyFeatures">Key Features</NavLink></li>
        <li className={`${({isActive})=> isActive ? 'active' : undefined} transition-colors ease-in-out text-base font-bold text-white hover:text-[#52C1B9] duration-300`}><NavLink to="/preNFTRight">Pre-NFT Rights</NavLink></li>
        <li className={`${({isActive})=> isActive ? 'active' : undefined} transition-colors ease-in-out text-base font-bold text-white hover:text-[#52C1B9] duration-300`}><NavLink to="/marketplace">Marketplace</NavLink></li>
        <li className={`${({isActive})=> isActive ? 'active' : undefined} transition-colors ease-in-out text-base font-bold text-white hover:text-[#52C1B9] duration-300`}><NavLink to="/login">Login</NavLink></li>
        <li className='transition-colors ease-in-out text-sm font-bold text-white btn-primary py-[21.5px] px-[41.3px] rounded-[34px]'><NavLink to="/signUp"><span className=''>Sign Up</span></NavLink></li>
    </React.Fragment>

    return (
        <div className='bg-[#080809] lg:py-[41px]'>
            {/*------------- Large device navbar start ----------------*/}
            <nav className="w-full mx-auto z-50">
                <div className="max-w-[1264px] px-8 xl:mx-auto">
                    <div className="flex items-center justify-between">
                        <div className="w-full items-center flex justify-between lg:w-auto">
                            <Link to={'/'} >
                                <div className='relative z-50'>
                                    <img className='lg:w-[383px] w-[180px]' src={logo} alt="" />
                                </div>
                            </Link>
                            <label onClick={handleMenuBtn} className="peer-checked:hamburger block relative z-20 p-6 -mr-6 cursor-pointer lg:hidden">
                                {/* <div className="m-auto h-0.5 w-5 rounded bg-white dark:bg-gray-300 transition duration-300"></div>
                                <div className="m-auto mt-2 h-0.5 w-5 rounded bg-white dark:bg-gray-300 transition duration-300"></div> */}
                                <div className='text-[#52C1B9] hover:text-[#357b76] duration-300 text-4xl'>
                                    <BiMenuAltRight></BiMenuAltRight>
                                </div>
                            </label>
                        </div>
                        <div className="hidden w-full flex-wrap justify-end items-center space-y-8 p-6  lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">
                            <div className="text-gray-600 dark:text-gray-300 z-50">
                                <ul className="flex items-center justify-between w-[812.01px]">
                                    {menuContent}
                                </ul>
                            </div>
                        </div>
                    </div >
                </div >
            </nav >
            {/*------------- Large device navbar end ----------------*/}
            {/*------------- Mobile device navbar start ----------------*/}
            <div className={`${open ? 'flex' : 'hidden'} navbar-menu relative z-50`}>
                <div className="navbar-backdrop fixed inset-0"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#07060E] overflow-y-auto">
                    <div className="flex items-center justify-end mb-8">
                        <button onClick={handleMenuBtn} className="navbar-close">
                            <svg className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul className=' text-center text-base text-white space-y-6'>
                            {menuContent}
                        </ul>
                    </div>
                </nav>
            </div>
            {/*------------- Mobile device navbar end ----------------*/}
        </div>
    );
};

export default NavBar;