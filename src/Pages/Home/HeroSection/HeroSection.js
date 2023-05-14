import React from 'react';
import heroImg from '../../../img/Hero Image.png';
import heroImgForMobile from '../../../img/Hero Image for mobile.png';
import { GoPrimitiveDot } from "react-icons/go";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { Link } from 'react-router-dom';

const HeroSection = () => {
    return (
        <div>
            {/*--------- Header of hero section start -----------*/}
            <div className='relative'>
                <div className='lg:mt-[-169px]'>
                    <img className='lg:block hidden lg:w-full z-0' src={heroImg} alt="" />
                    <img className='lg:hidden block w-full z-0' src={heroImgForMobile} alt="" />
                </div>
                <div className='max-w-[1200px] mx-auto'>
                    <div className='text-white absolute top-1 lg:top-[176px]'>
                        <h1 className='font-bebas text-[55px] lg:text-[140px] lg:w-[607px] leading-[90%] pl-[9px] text-center lg:text-start'>CALLING CREATORS OF THE FUTURE</h1>
                    </div>
                    <div className='absolute lg:top-[567px] bottom-[60px] lg:text-start text-center'>
                        <p className='text-[#52C1B9] mx-[30px] lg:mx-0 lg:w-[458px] lg:text-[25px] text-base font-semibold lg:pl-[13px]'>The World’s First Pre-NFT Rights and Content Marketplace</p>
                        <div className='flex justify-center lg:justify-start'>
                            <button className='btn-outline py-[6px] pl-[11px] pr-[23px] mt-[13px] lg:ml-[18px] flex items-center gap-1 lg:text-sm text-xs'><span className='text-[22px]'><GoPrimitiveDot></GoPrimitiveDot></span>NOW LIVE</button>
                        </div>
                    </div>
                    <div className='lg:absolute mt-[31px] lg:mt-0 lg:bottom-[31px] text-center lg:text-start'>
                        <p className='text-[#52C1B9] text-sm lg:text-[23px] font-semibold mx-[10px] lg:mx-0 lg:ml-[31px] lg:mt-[147px]'>Know about the launch before everyone else</p>
                    </div>
                </div>
            </div>
            {/*--------- Header of hero section end -----------*/}
            {/*--------- Footer of hero section start -----------*/}
            <div className='max-w-[1200px] mx-auto mt-[14px] lg:mt-3 pl-[9px] lg:flex items-center'>
                <div className='mx-[30px] lg:mx-0'>
                    <input type='email' name='email' className='bg-transparent text-white text-sm lg:text-xl py-4 lg:py-6 px-6 lg:px-9 w-full lg:w-[575px] border-2 lg:border-4 border-[#74B4B3] rounded-[83px] box-border focus-visible:outline-none focus-visible:border-[#4efff3]' placeholder='Enter Email Here' />
                </div>
                <div className='flex items-center mt-5 lg:mt-0 justify-center'>
                    <div className='lg:ml-[24.5px] mr-1 lg:mr-[53px]'>
                        <Link to={'/'}><button className='btn-primary font-semibold text-sm lg:text-xl text-white py-[14px] lg:py-[23px] px-[42px] lg:px-[83px] rounded-[83px] font-[Outfit] tracking-widest'>SIGN UP</button></Link>
                    </div>
                    <div className='flex items-center gap-[5px] lg:gap-[9px]'>
                        <p className='lg:block hidden border-r border-[#15E8BA] mr-[19.5px] h-[50px]'></p>
                        <Link to={'/'}><button className='btn-primary rounded-[83px] text-white text-lg lg:text-3xl p-[14px] lg:p-[23px]'><FaGoogle></FaGoogle></button></Link>
                        <Link to={'/'}><button className='btn-primary rounded-[83px] text-white text-lg lg:text-3xl p-[14px] lg:p-[23px]'><FaLinkedinIn></FaLinkedinIn></button></Link>
                        <Link to={'/'}><button className='btn-primary rounded-[83px] text-white text-lg lg:text-3xl p-[14px] lg:p-[23px]'><FaFacebookF></FaFacebookF></button></Link>
                    </div>
                </div>
            </div>
            {/*--------- Footer of hero section end -----------*/}
        </div>
    );
};

export default HeroSection;