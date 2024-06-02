import React, { useRef } from 'react';
import cardImg_1 from '../../assets/course1.jpg'
import cardImg_2 from '../../assets/course2.png'
import cardImg_3 from '../../assets/course3.jpg'
import bookImg from '../../assets/book.png'
import student from '../../assets/student.png'

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Courses = () => {

    const courseRef = useRef(null)

    useGSAP(() => {
        gsap.from(courseRef.current, {
            opacity: 0,
            y: 500,
            duration: 5.5,  // increased duration for smoother animation
            ease: "elastic.out(1,0.7)",
            delay: 0.5,
            stagger: {
                amount: 2.5, // add stagger for collision-like effect
                from: 'start'
            }
        });
    })
    const cardImages = [
        {
            id: 1,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_1,
            button: 'Start Learning'
        },
        {
            id: 2,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_1,
            button: 'Start Learning'
        },
        {
            id: 3,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_2,
            button: 'Start Learning'
        },
        {
            id: 4,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_2,
            button: 'Start Learning'
        },
        {
            id: 5,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_3,
            button: 'Start Learning'
        },
        {
            id: 6,
            title: 'Reverse Engineering',
            description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita temporibus enim, eveniet eligendi deserunt similique perspiciatis vel!",
            img: cardImg_3,
            button: 'Start Learning'
        },
    ]
    
    return (
        <section ref={courseRef} className='w-full h-fit bg-custom-bg text-white font-fun py-4'>
            <div className='flex items-center justify-center gap-12 py-12'>
                <h1 className='text-6xl font-black'>Courses</h1>       
                <img className='w-16 h-16' src={bookImg}  alt="" />
            </div>
            <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-12 lg:px-0 gap-12'>

                  {cardImages.map(({id, title, description, img, button}) => (
                    <div key={id}>
                         <img src={img} alt="card images" />
                        <h1 className='text-3xl font-black py-4'>{title}</h1>
                        <p className='pb-4 font-mono'>{description}</p>
                        <div className='flex bg-white justify-center items-center gap-6 w-fit px-6 py-2 shadow-3xl hover:translate-x-3 hover:translate-y-2 duration-300'>
                        <button className='text-2xl font-black text-black'>{button}</button>
                        <img className='h-10 w-6' src={student} alt="" />
                        </div> 
                    </div>
                  ))}
             
            </div>
        </section>
    );
}

export default Courses;




