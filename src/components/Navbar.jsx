import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'
import { ChevronDown, MenuIcon, SearchIcon, XIcon } from 'lucide-react'
import { AppContext } from '../context/AppContext'

function Navbar() {

  const nav=useNavigate()

  const {token,setToken,userData} = useContext(AppContext)
  const [isOpen, setIsOpen] = useState(false)

  const [showMenu,setShowMenu]= useState(false)
  // const [token,setToken] = useState(true)

  const logout = () =>{
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='fixed top-0 left-0 z-50 w-full flex items-center
    justify-between px-6 sm:px-6 md:px-10 lg:px-36 py-5 '>
      <Link to='/' data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500" className='max-md:flex-1' >
        <img src={assets.logo} alt="" className='w-36 h-auto' />
      </Link>

      <div className={`max-md:absolute max-md:top-0 max-md:left-0 max-md:font-medium
        max-md:text-lg z-50 flex flex-col  md:flex-row items-center
        max-md:justify-center gap-8 max-md:gap-4 min-md:px-8 py-3 max-md:h-screen
        min-md:rounded-full backdrop-blur bg-black/70 md:bg-white/10 md:border
        border-gray-300/20 overflow-x-auto md:overflow-visible transition-[width] duration-300 ${isOpen ? 'max-md:w-full' : 'max-md:w-0'}`}>

        <XIcon className='md:hidden absolute top-6 right-6 w-6 h-6 cursor-ponter'
          onClick={() => setIsOpen(!isOpen)} />

        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1 "
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/'>Home</NavLink>
        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1 "
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/biss'>All Businesses</NavLink>
        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1"
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/bookmarked'>Bookmarked</NavLink>
        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1"
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/mybookings'>MyBookings</NavLink>
        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1"
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/about'>About</NavLink>
        <NavLink data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3500" className={({ isActive }) =>
            isActive
              ? "border-b-2 border-amber-500 text-white pb-1"
              : "hover:border-b-2 hover:border-gray-500 text-white pb-1"
          } onClick={() => { scrollTo(0, 0); setIsOpen(false) }} to='/contact'>Contact</NavLink>
      </div>

      <div data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="1500" className='flex items-center gap-8'>
        {/* <SearchIcon className='max-md:hidden w-6 h-6 cursor-pointer' /> */}
        {
          token && userData ? 
          <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={userData.image} alt="" />
              <ChevronDown />
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48  rounded flex flex-col gap-4 p-4'>
                  <p className='hover:text-white cursor-pointer' onClick={()=>nav('myprofile')}>My Profile</p>
                  <p className='hover:text-white cursor-pointer' onClick={logout} >Logout</p>
                </div>
              </div>
          </div>
          : <button onClick={()=>nav('login')} className='px-4 py-1 sm:px-7 sm:py-2 bg-primary
            hover:bg-primary-dull transition rounded-full font-medium
            cursor-pointer'>Login</button>
        }
       
      </div>

      <MenuIcon className='max-md-4 md:hidden w-8 h-8 cursor-pointer'
        onClick={() => setIsOpen(!isOpen)} />

    </div>
  )
}

export default Navbar
