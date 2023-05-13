import React from 'react';
import logo from '../../img/FANDORA LOGO.png';
import logoForMobile from '../../img/F LOGO.png';
import { Link } from 'react-router-dom';
import { FaDiscord, FaLinkedin, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <div className='mt-8'>
            <div className='max-w-[1200px] mx-auto'>
                {/*----------- 1st line content start -----------*/}
                <div className='block lg:flex items-center justify-between'>
                    <img className='hidden lg:block' src={logo} alt="" />
                    <img className='hidden lg:hidden' src={logoForMobile} alt="" />
                    <div className='flex items-center gap-12'>
                        <p className='font-bold text-[#FEFEFE]'><Link to={'/'}>Home</Link></p>
                        <p className='font-bold text-[#FEFEFE]'><Link to={'/'}>Key features</Link></p>
                        <p className='font-bold text-[#FEFEFE]'><Link to={'/'}>Pre-NFT Rights</Link></p>
                        <p className='font-bold text-[#FEFEFE]'><Link to={'/'}>Marketplace</Link></p>
                    </div>
                </div>
                {/*----------- 1st line content end -----------*/}
                {/*----------- border line ------------*/}
                <p className='border border-[#FEFEFE1F] w-full mt-8 mb-9'></p>
                {/*----------- 2nd line content start -----------*/}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-[27px]'>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[27px]'><FaTwitter></FaTwitter></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[27px]'><FaLinkedin></FaLinkedin></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><AiFillInstagram></AiFillInstagram></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><FaDiscord></FaDiscord></Link>
                        <Link to={'/'} className='text-[#FFFFFFB2] text-[32px]'><MdEmail></MdEmail></Link>
                    </div>
                    <p className='font-medium text-[#FEFEFE66]'>reachus@fandora.app</p>
                    <div className='flex items-center gap-[90px] ml-[55px]'>
                        <p className='font-medium text-[#FEFEFE66]'><Link to={'/'}>Privacy Policy</Link></p>
                        <p className='font-medium text-[#FEFEFE66]'><Link to={'/'}>Terms of use</Link></p>
                        <p className='font-medium text-[#FEFEFE66]'>© Fandora 2022 - All rights reserved</p>
                    </div>
                </div>
                {/*----------- 2nd line content end -----------*/}
                {/*----------- 3rd line content start -----------*/}
                <div className='flex items-center justify-between mt-[26px] mb-[30px]'>
                    <p className='font-medium text-[#FEFEFE66]'>Designed by @indiecreatorsco</p>
                    <p className='font-medium text-[#FEFEFE66]'>Fandora 1364019 B.C Ltd C/o Empowered Startups 744 W Hastings St #420, Vancouver, BC V6C 1A5, Canada</p>
                </div>
                {/*----------- 3rd line content end -----------*/}
            </div>
        </div>
    );
};

export default Footer;