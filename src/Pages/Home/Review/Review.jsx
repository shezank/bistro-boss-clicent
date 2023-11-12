import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import SectionTitle from '../../../Shard/SectionTitle/SectionTitle';

const Review = () => {
    const [review, setReview] = useState([]);
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])
    return (
        <>
            <div className='py-20 my-10'>
                <SectionTitle
                    subHeading={'---What Our Clients Say---'}
                    heading={'TESTIMONIALS'}
                ></SectionTitle>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper py-20">
                {
                    review.map(post => <SwiperSlide key={post._id}>

                        <div className='flex flex-col items-center space-y-5 max-w-4xl mx-auto py-10'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={post.rating}
                                readOnly
                            />
                            <p>{post.details}</p>
                            <h3 className='text-yellow-600 text-2xl'>{post.name}</h3>
                        </div>

                    </SwiperSlide>)
                }

            </Swiper>
        </>
    );
};

export default Review;