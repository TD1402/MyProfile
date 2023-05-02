import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper';
import { Pagination } from 'swiper';
import img from '../assets/images/meter1.svg';
import bg from '../assets/images/banner-bg.png';
import reactjs from '../assets/images/reactjs.svg';
import nodejs from '../assets/images/nodejs.svg';
import taiwindcss from '../assets/images/taiwindcss.svg';

function Skills() {
    const [slides, setSlides] = React.useState(0);
    const boxStyle = {
        width: '200px',
        height: '200px',
        backgroundColor: 'blue',
        display: 'inline-block',
    };
    const setSlidesPerview = () => {
        setSlides(window.innerWidth <= 600 ? 1 : window.innerWidth <= 800 ? 2 : window.innerWidth > 1250 ? 3 : 0);
    };
    React.useEffect(() => {
        //Initially set the amount of slides on page load
        setSlidesPerview();
        // Add the event listner on component mount
        window.addEventListener('resize', setSlidesPerview);

        // Remove the listner when component unmounts
        return () => {
            window.removeEventListener('resize', setSlidesPerview);
        };
    }, []);
    return (
        <>
            <div
                id="skills"
                style={{ backgroundImage: `url(${bg})` }}
                className="wrapper h-full bg-no-repeat bg-center bg-cover p-16 lg:p-4"
            >
                <div className="skills-wrapper text-center text-white bg-[#171717]  p-10 rounded-[50px] lg:p-2">
                    <h1 className="text-4xl ">Skills</h1>
                    <p className="text-lg py-3">Some basic skills that I learned</p>
                    <div className="box flex  justify-between  items-center bg-[#171717] my-6">
                        <Swiper
                            slidesPerView={slides}
                            spaceBetween={40}
                            pagination={{
                                clickable: true,
                            }}
                            autoplay={{
                                delay: 1000,
                                disableOnInteraction: false,
                            }}
                            speed={5000}
                            loop={true}
                            navigation={true}
                            modules={[Navigation, Pagination]}
                            className="mySwiper "
                        >
                            <SwiperSlide className="bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img className="w-full h-[240px]" src={reactjs} alt="" />
                                    <h1 className="font-bold text-2xl my-2">Reactjs</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img
                                        className="w-full h-[240px]"
                                        alt="File:Tailwind CSS Logo.svg"
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/600px-Tailwind_CSS_Logo.svg.png?20211001194333"
                                        decoding="async"
                                        srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/900px-Tailwind_CSS_Logo.svg.png?20211001194333 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png?20211001194333 2x"
                                        data-file-width="1000"
                                        data-file-height="1000"
                                    />
                                    <h1 className="font-bold text-2xl my-2">Tailwindcss</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png"
                                        jsaction="VQAsE"
                                        className="w-full h-[240px]"
                                        alt="File:Sass Logo Color.svg - Wikimedia Commons"
                                        jsname="kn3ccd"
                                        aria-hidden="false"
                                    />
                                    <h1 className="font-bold text-2xl my-2">Sass</h1>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide className=" bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img
                                        src="https://cdn.worldvectorlogo.com/logos/javascript-1.svg"
                                        jsaction="VQAsE"
                                        className="w-full h-[240px]"
                                        alt="Javascript Vector Logo - Download Free SVG Icon | Worldvectorlogo"
                                        jsname="kn3ccd"
                                        aria-hidden="false"
                                    />
                                    <h1 className="font-bold text-2xl my-2">Javascript</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img
                                        src="https://seeklogo.com/images/R/react-query-logo-1340EA4CE9-seeklogo.com.png"
                                        jsaction="VQAsE"
                                        className="w-full h-[240px]"
                                        alt="React Query Logo PNG Vector (SVG) Free Download"
                                        jsname="kn3ccd"
                                        aria-hidden="false"
                                    />
                                    <h1 className="font-bold text-2xl my-2">TanStack Query</h1>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className=" bg-[#171717]">
                                {' '}
                                <div className=" bg-[#171717]">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                                        jsaction="VQAsE"
                                        className="w-full h-[240px]"
                                        alt="File:Typescript logo 2020.svg - Wikimedia Commons"
                                        jsname="kn3ccd"
                                        aria-hidden="false"
                                    />
                                    <h1 className="font-bold text-2xl my-2">Typescript</h1>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Skills;
