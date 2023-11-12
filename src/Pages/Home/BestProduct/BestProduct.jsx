import React from 'react';
import SectionTitle from '../../../Shard/SectionTitle/SectionTitle';
import fetureImg from '../../../assets/home/featured.jpg';
import './BestProcuct.css'

const BestProduct = () => {
    return (
        <div className='my-10 feture py-20'>
            <SectionTitle
                subHeading='Check it out'
                heading='FROM OUR MENU'
            ></SectionTitle>

            <div className='flex text-white justify-center items-center max-w-4xl mx-auto my-10'>
                <div>
                    <img className='' src={fetureImg} alt="" />
                </div>
                <div className='ml-10'>
                    <p>March 20, 2023</p>
                    <h1>WHERE CAN I GET SOME?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sint alias sequi, dolorem animi laboriosam labore ab eaque non laudantium explicabo, ipsam harum eligendi architecto, nisi aut ipsa porro pariatur quasi nemo itaque. Nulla beatae sit mollitia id pariatur dolore delectus obcaecati fugit dolores doloremque. Illum impedit neque qui dolor?</p>
                </div>
            </div>
        </div>
    );
};

export default BestProduct;