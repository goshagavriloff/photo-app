import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RiHomeFill } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { generateURL } from '../client';
import { categoryQuery } from '../utils/data';
const isNotActiveStyle='flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize text-3xl';
const isActiveStyle='flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize text-3xl';
const Sidebar = ({ user, closeToggle }) => {
    const handleCloseSidebar = () => {
        if (closeToggle) closeToggle(false);
    };
    const [categories, setCategories] = useState([]);

    useEffect( () => {
        const query = categoryQuery();
        fetch(generateURL(query)).
        then((response) => response.json()).
        then((data) => {
            setCategories(data.result);
        })
      }, []);

    return (
        <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
            <div className='flex flex-col'>
                <Link
                    to="/photo-app/"
                    className='flex px-5 gap-2 my-6 pt-1 w-125 items-center '
                    onClick={handleCloseSidebar}
                >

                    <img src={logo} alt="logo" className='w-full' />
                </Link>
                <div className='flex flex-col gap-5'>
                    <NavLink
                        to="/photo-app/"
                        className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                        onClick={handleCloseSidebar}
                    >
                      <RiHomeFill/>  
                      Главная
                    </NavLink>
                    <h3 className='mt-2 px-5 flex items-center px-5 gap-3 font-extrabold border-black transition-all duration-200 ease-in-out capitalize text-3xl'>Доступные категории</h3>
                    
                    {categories.slice(0,categories.length-1).map((category,i)=>(
                        
                        <NavLink
                            to={`/photo-app/category/${category.url}`}
                            className={({isActive})=>isActive?isActiveStyle:isNotActiveStyle}
                            onClick={handleCloseSidebar}
                            key={i}
                        >
                            {category.title}
                        </NavLink>
                    ))}
                </div>
            </div>
            {user && (
                <Link 
                to={`https://github.com/goshagavriloff`}
                className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'
                onClick={handleCloseSidebar}
                >
                <img src={user?.image} className='w-10 h-10 rounded-full' alt='user-profile' />
                <p>{user.name}</p>
              </Link>

            )

            }
        </div>
    )
}

export default Sidebar