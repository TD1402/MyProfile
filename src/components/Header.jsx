import React from 'react';
import logo from '../assets/images/astronout.png';
import logo1 from '../assets/images/astronout1.png';
import bg from '../assets/images/bg.jpg';
import Navbar from './Navbar';
import '../styles.css';

function Header() {
    return (
        <>
            <div
                id="home"
                style={{ backgroundImage: `url(${bg})` }}
                className=" bg-center bg-cover bg-no-repeat h-screen flex flex-col "
            >
                <Navbar />
                <div className="wrapper flex justify-between items-center h-screen w-full px-20 lg:justify-center lg:px-6">
                    <div className="content lg:text-center">
                        <div className="btn py-3">
                            <button className=" border-2 border-[#b0aaaa] font-bold text-white bg-[linear-gradient(90deg,#b004b0,#38097a)] p-4 rounded-2xl">
                                Welcome to my Profile
                            </button>
                        </div>
                        <h1 className="text-white text-5xl font-bold">Hi! I'm Tan Dung</h1>
                        <p className="text-white py-4 max-w-lg ">
                            Hello, my name is Nguyen Tan Dung. I am a third-year student studying Information Technology
                            at Da Nang University of Technology. I am currently 21 years old. In my free time, I enjoy
                            playing video games. I find that gaming is a great way to relieve stress and have fun with
                            friends. Apart from that, I also like to explore new technologies and learn new skills
                            related to my field of study. As a student of Information Technology, I am very passionate
                            about this field and its many applications. I am always looking for opportunities to expand
                            my knowledge and skills in areas such as web development, mobile app development, and data
                            analysis. Overall, I am a hardworking and enthusiastic individual who is eager to learn and
                            grow both academically and personally. Thank you for taking the time to get to know me.
                        </p>
                        <a href="https://www.facebook.com/user.error.14/" target="_blank">
                            <button className="  text-white text-2xl">
                                Let's Connect <i className="fa-solid fa-arrow-right text-lg  p-[2px] "></i>{' '}
                            </button>
                        </a>
                    </div>
                    <div className="image banner-astronout lg:hidden absolute w-[300px] flex ">
                        <img className="w-96 ast-img" src={logo1} alt="" />
                    </div>
                    <div className="image banner-astronout1 lg:hidden absolute w-[300px] flex ">
                        <img className="w-96 ast-img" src={logo} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
