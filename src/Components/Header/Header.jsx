import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import searchIcon from '../../assets/search.png';
import { FaBars, FaTimes, FaUserLock, FaEnvelopeOpenText, FaGoogle, FaUserTie } from "react-icons/fa";
import cardImg_1 from '../../assets/course1.jpg';
import cardImg_2 from '../../assets/course2.png';
import cardImg_3 from '../../assets/course3.jpg';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [search, setSearch] = useState(false);
    const [login, setLogin] = useState(false);
    const [signup, setSignUp] = useState(false)



    const navigation = [
        { id: 1, title: 'Courses', link: '/course' },
        { id: 2, title: 'Blog', link: 'blog' },
        { id: 3, title: 'Road Map', link: 'roadmap' },
    ];

    const Search_1 = [
        { id: 1, title: 'Reverse Engineering', description: "Lorem ipsum do adipisicing elit....", img: cardImg_1, button: 'Read More', link: 'roadmap' },
        { id: 2, title: 'Learn Reverse Engineering', description: "Lorem ipsum do adipisicing elit....", img: cardImg_2, link: 'blog' },
    ];

    const Search_2 = [
        { id: 1, title: 'What is Reverse Engineering', description: "Lorem ipsum do adipisicing elit.....", img: cardImg_3, button: 'Read More', link: '/course' },
        { id: 2, title: 'How to crack Denono ?', description: "Lorem ipsum do adipisicing elit....", img: cardImg_1, link: 'blog' },
    ];

    return (
        <header className='sticky z-50 top-0 font-fun text-white w-full bg-violet-950'>
            <nav className='w-full max-w-7xl px-4 mx-auto py-3'>
                <div className='flex justify-between items-center max-w-7xl'>
                    <div>
                        <Link to="" className='text-6xl font-black py-2'>Ipsum</Link>
                    </div>

                    <div className='hidden lg:flex justify-center items-center text-4xl font-extrabold gap-8'>
                        <div
                            onClick={() => setSearch(!search)}
                            className='hidden xl:flex items-center border-slate-400 border-2 gap-4 px-3 shadow-3xl shadow-black hover:cursor-pointer'
                        >
                            <input
                                placeholder='Search For'
                                className='py-2 px-2 text-3xl font-bold bg-transparent outline-none'
                                type="search"
                            />
                            <img className='w-8 h-8' src={searchIcon} alt="" />

                            {search && (
                                <div className='w-1/4 top-20  absolute text-sm bg-violet-950'>
                                    <div className='border-2 border-blue-900 px-6'>
                                        <h1 className='text-xl font-mono text-gray-500 py-6'>Courses</h1>
                                        {Search_1.map(({ id, title, description, img, link }) => (
                                            <Link
                                                to={link} key={id} className='flex justify-between gap-3 items-center mb-8'
                                            >
                                                <img className='w-24 h-16' src={img} alt="abot search" />
                                                <div className=''>
                                                    <h1 className='text-2xl py-1'>{title}</h1>
                                                    <p className='font-mono font-thin -text-sm text-gray-400'>{description}</p>
                                                </div>
                                                <hr />
                                            </Link>
                                        ))}
                                    </div>
                                    <div className='border-2 border-blue-900 px-6'>
                                        <h1 className='text-xl font-mono text-gray-500 py-6'>Blogs</h1>
                                        {Search_2.map(({ id, title, description, img, link }) => (
                                            <Link
                                                to={link} key={id} className='flex justify-between gap-3 items-center mb-8'
                                            >
                                                <img className='w-24 h-16' src={img} alt="abot search" />
                                                <div className=''>
                                                    <h1 className='text-2xl py-1'>{title}</h1>
                                                    <p className='font-mono font-thin -text-sm text-gray-400'>{description}</p>
                                                </div>
                                                <hr />
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {navigation.map(({ id, title, link }) => (
                            <ul key={id}>
                                <Link to={link} className='px-5 font-bold text-3xl'>{title}</Link>
                            </ul>
                        ))}
                        <button 
                        onClick={() => setLogin(!login)}
                        className='text-3xl bg-white py-3 px-8 text-black font-extrabold shadow-3xl shadow-black hover:translate-x-1 hover:translate-y-1 duration-300'>Login</button>

                    </div>

                        {login && (
                            <div 
                            onClick={() => setLogin(!login)}
                            className='absolute z-30 right-4 lg:top-20 top-0 right-0 md:right-80 hover:cursor-pointer'>
                                <FaTimes
                                className='bg-green-400 rounded-lg' size={45} />
                            </div>
                        )}

                    <div
                        onClick={() => setMenu(!menu)}
                        className="lg:hidden cursor-pointer scale-105 duration-300 lg:z-20 z-10"
                    >
                        {menu ? <FaTimes size={35} /> : <FaBars size={35} />}
                    </div>

                    {menu && (
                        <ul
                            className="flex flex-col gap-12 justify-center items-center w-full h-screen absolute top-0 left-0 bg-custom-bg"
                        >
                            {navigation.map(({ id, link, title }) => (
                                <li
                                    key={id}
                                    className="px-4 cursor-pointer capitalize hover:scale-110 text-gray-500 duration-300 text-5xl font-extrabold"
                                >
                                    <Link
                                        onClick={() => setMenu(!menu)}
                                        to={link} smooth="true"
                                    >
                                        {title}
                                    </Link>
                                </li>
                            ))}
                            <button 
                            onClick={() => setLogin(!login)}
                            className='px-4 cursor-pointer capitalize hover:scale-110 text-gray-500 duration-300 text-5xl font-extrabold'>Login</button>
                        </ul>
                    )}
                </div>
            </nav>

          {/* Login and Signup page  */}
          {login && (
            <div className='w-full h-screen flex items-center justify-center absolute lg:top-10 top-0 uppercase z-20'>
              <div className='bg-violet-950 lg:w-2/5 w-full px-6 lg:px-0 h-screen lg:h-fit flex flex-col gap-14 pb-12'>

                <div className='flex justify-between text-2xl md:text-3xl font-black items-center border-b border-b-blue-800'>
                    <NavLink
                    onClick={() => setSignUp(!signup)}
                    className="text-center w-full py-4 hover:cursor-pointer  hover:bg-indigo-950 border-r-white border-r-2">Login</NavLink>
                    <NavLink
                    onClick={() => setSignUp(!signup)} 
                    className="text-center w-full py-4 hover:cursor-pointer  hover:bg-indigo-950">Signup</NavLink>
                </div>

                {/* Login Form  */}
                {login && (
                    <form action="" className='w-full md:w-2/3 md:mx-auto mx-0 px-2 md:px-0 flex flex-col gap-8'>
                        {signup && (
                             <div className='flex items-center border-slate-400 border-4 gap-4 px-3 py-2 shadow-3xl shadow-black hover:cursor-pointer'>
                             <FaUserTie className='bg-yellow-500 text-black rounded-lg' size={35} />
                             <input
                             placeholder='Enter your username'
                             className='py-2 px-2 text-xl md:text-3xl font-bold bg-transparent outline-none'
                             type="email"
                             />
                         </div>
                        )}
                        <div className='flex items-center border-slate-400 border-4 gap-4 px-3 py-2 shadow-3xl shadow-black hover:cursor-pointer'>
                            <FaEnvelopeOpenText className='bg-blue-500 rounded-lg' size={35} />
                            <input
                            placeholder='Enter your email'
                            className='py-2 px-2 text-xl md:text-3xl font-bold bg-transparent outline-none'
                            type="email"
                            />
                        </div>
                        <div className='flex items-center border-slate-400 border-4 gap-4 px-3 py-2 shadow-3xl shadow-black hover:cursor-pointer'>
                            <FaUserLock className='bg-yellow-500 rounded-lg' size={35} />
                            <input
                            placeholder='Enter your password'
                            className='py-2 px-2 text-xl md:text-3xl font-bold bg-transparent outline-none'
                            type="email"
                            />
                        </div>
                        <p className='font-mono'>Forgot password?</p>
                        <button className='text-xl md:text-3xl font-black bg-white text-black py-4 shadow-black shadow-3xl -rotate-1 hover:rotate-0 duration-300'>Login</button>
                        <button className='text-xl md:text-3xl text-white font-black bg-transparent border-4 border-gray-400 py-4 shadow-black shadow-3xl -rotate-2 hover:rotate-0 duration-300'>Login with Google <FaGoogle className='inline mx-6' /> </button>
                    </form>
                )}

              </div>
          </div>
          )}
        </header>
    );
}

export default Header;
