import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

import img1 from '../../../assets/home/slide1.jpg'
import img2 from '../../../assets/home/slide2.jpg'
import img3 from '../../../assets/home/slide3.jpg'
import img4 from '../../../assets/home/slide4.jpg'
import img5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Shard/SectionTitle/SectionTitle';

const Catagory = () => {
    return (
        <>
            <section>

                <SectionTitle
                subHeading={'---From 11:00am to 10:00pm---'}
                heading={'ORDER ONLINE'}
                >
                </SectionTitle>

                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper max-w-screen-xl my-10"
                >
                    <SwiperSlide>
                        <img src={img1} alt="" />
                        <h1 className='text-center text-4xl font-bold text-white -mt-20'>Salads</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img2} alt="" />
                        <h1 className='text-center text-4xl font-bold text-white -mt-20'>Pizzas</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img3} alt="" />
                        <h1 className='text-center text-4xl font-bold text-white -mt-20'>Shops</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img4} alt="" />
                        <h1 className='text-center text-4xl font-bold text-white -mt-20'>Cakes</h1>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={img5} alt="" />
                        <h1 className='text-center text-4xl font-bold text-white -mt-20'>Salads</h1>
                    </SwiperSlide>

                </Swiper>
            </section>
        </>
    );
};

export default Catagory;