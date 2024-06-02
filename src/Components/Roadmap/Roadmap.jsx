import React, { useRef } from 'react';
import robo from '../../assets/robo.png';
import mark from '../../assets/mark.png';
import character from '../../assets/carton.png';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Roadmap = () => {

    let textRef = useRef(null)
    let charRef = useRef(null)
    let roboRef = useRef(null)
    let markRef = useRef(null)

    const mouseMove = (e) => {
        let x = e.clientX;
        let y = e.clientY;
}

    useGSAP(() => {
        gsap.from([textRef.current, charRef.current, roboRef.current, markRef.current], {
            opacity: 0,
            y: 150,
            duration: 5.5,  // increased duration for smoother animation
            ease: "elastic.out(1.5,0.3)",
            delay: 0.5,     
        })
    })

    return (
        <section onMouseMove={mouseMove} className='w-full h-fit bg-custom-bg text-white font-fun py-4 px-6 md:px-3'>
            <div className='max-w-7xl mx-auto px-12'>
                <div className='w-full flex flex-col md:flex-row justify-between items-center gap-20 pt-16'>
                    <div ref={textRef} className='uppercase flex flex-col gap-6'>
                        <h1 className='text-3xl font-mono text-gray-400'>Step One</h1>
                        <h1 className='text-6xl font-black'>Intro to Cracking</h1>
                        <p className='leading-relaxed'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quod <br /> aliquam. 
                            At vel reprehenderit tempore exercitationem dolores erro <br /> rharum numquam. 
                            Lorem, ipsum dolor.
                            <li>Point 1</li>
                            <li>Point 2</li>
                            <li>Point 3</li>
                        </p>
                    </div>
                    <div className=''>
                        <img ref={charRef} className='w-56 min-w-56' src={character} alt="Character Image" />
                    </div>
                </div>

                <div className='flex flex-col md:flex-row justify-between items-center pt-16 md:pt-0'>
                    <div className=''>
                        <img ref={roboRef} src={robo} alt="Robo Image" />
                    </div>
                    <div className=''>
                        <img ref={markRef}  className='' src={mark} alt="Mark Image" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Roadmap;
