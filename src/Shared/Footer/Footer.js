import React from 'react';
import logo from '../../img/FANDORA LOGO.png';
import logoForMobile from '../../img/F LOGO.png';
import { Link } from 'react-router-dom';
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='mt-8 text-center'>
            <div className='max-w-[1200px] mx-auto'>
                {/*----------- 1st line content start -----------*/}
                <div className='block lg:flex items-center justify-between'>
                    <img className='hidden lg:block' src={logo} alt="" />
                    <div className='flex justify-center lg:hidden'>
                        <img src={logoForMobile} alt="" />
                    </div>
                    <div className='lg:flex items-center gap-12 mt-[17px] lg:mt-0'>
                        <p className='font-bold text-[#FEFEFE]'><Link to={'/'}>Home</Link></p>
                        <p className='font-bold text-[#FEFEFE] mt-[10px] lg:mt-0'><Link to={'/'}>Key features</Link></p>
                        <p className='font-bold text-[#FEFEFE] mt-[10px] lg:mt-0'><Link to={'/'}>Pre-NFT Rights</Link></p>
                        <p className='font-bold text-[#FEFEFE] mt-[10px] lg:mt-0'><Link to={'/'}>Marketplace</Link></p>
                    </div>
                </div>
                {/*----------- 1st line content end -----------*/}
                {/*----------- border line ------------*/}
                <p className='border border-[#FEFEFE1F] w-[85%] lg:w-full mt-[19px] lg:mt-8 mb-6 lg:mb-9 mx-[30px] lg:mx-0'></p>
                {/*----------- 2nd line content start -----------*/}
                <div className='lg:flex items-center justify-between'>
                    <div className='flex items-center justify-center gap-[27px]'>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[27px]'><FaTwitter></FaTwitter></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[27px]'><FaLinkedin></FaLinkedin></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><AiFillInstagram></AiFillInstagram></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><FaDiscord></FaDiscord></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><MdEmail></MdEmail></Link>
                    </div>
                    <p className='font-medium text-[#FEFEFE66] hidden lg:block'>reachus@fandora.app</p>
                    <div className='lg:flex items-center gap-[90px] lg:ml-[55px] mt-4'>
                        <p className='font-medium text-[#FEFEFE66] text-[10px] lg:text-base'><Link to={'/'}>Privacy Policy</Link></p>
                        <p className='font-medium text-[#FEFEFE66] text-[10px] lg:text-base mt-3 lg:mt-0'><Link to={'/'}>Terms of use</Link></p>
                        <p className='font-medium text-[#FEFEFE66] text-[10px] lg:text-base mt-3 lg:mt-0'>© Fandora 2022 - All rights reserved</p>
                    </div>
                </div>
                {/*----------- 2nd line content end -----------*/}
                {/*----------- 3rd line content start -----------*/}
                <div className='flex flex-col-reverse lg:flex-row items-center justify-between mt-3 lg:mt-[26px] mb-[30px]'>
                    <p className='font-medium text-[#FEFEFE66] text-[10px] lg:text-base mt-3 lg:mt-0'>Designed by @indiecreatorsco</p>
                    <p className='font-medium text-[#FEFEFE66] text-[10px] lg:text-base mx-[30px] lg:mx-0'>Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</p>
                </div>
                {/*----------- 3rd line content end -----------*/}
            </div>
        </div>
    );
};

export default Footer;