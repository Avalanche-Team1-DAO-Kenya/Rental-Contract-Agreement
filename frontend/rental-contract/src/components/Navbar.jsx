import React from 'react'
import { assets } from '../../assets/frontend-assets/assets'
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300'>
        <img onClick={()=>navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="" />

        <ul className='hidden md:flex items-start gap-5 font-medium'>
            <NavLink to='/'>
                <li className='py-1'>Home</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
            <NavLink to='/houses'>
                <li className='py-1'>Houses</li>
                <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden'/>
            </NavLink>
        </ul>
        
        <div className='flex items-center gap-4'>
            {
                isLoggedIn ?
                <div className='flex items-center gap-2 cursor-pointer group relative'>
                    <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
                    <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                    <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                        <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 '>
                            <p onClick={() =>navigate('/profile')} className='cursor-pointer hover:text-black '>My Profile</p>
                            <p onClick={() =>navigate('/houses')} className='cursor-pointer hover:text-black '>My Appointments</p>
                            <p onClick={() =>setIsLoggedIn(false)} className='cursor-pointer hover:text-black '>Log out</p>
                        </div>
                    </div>
                </div>
                :
                <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>Create Account</button>
            }
            <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
            {/*----Mobile Menu-----*/}
            <div className={` ${showMenu? 'fixed w-full':'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all duration-300`}>
                <div className='flex items-center justify-betweem px-5 py-6'>
                    <img className='w-36' src={assets.logo} alt="" />
                    <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                </div>
                <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                    <NavLink  onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>Home</p></NavLink>
                    <NavLink onClick={()=>setShowMenu(false)} to='/houses'><p  className='px-4 py-2 rounded inline-block'>Houses</p></NavLink>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar