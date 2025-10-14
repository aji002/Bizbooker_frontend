import React, { useEffect } from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home  from './pages/Home'
import Businesses from './pages/Businesses'
import BusinessDetails from './pages/BusinessDetails'
import Mybookings from './pages/Mybookings'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import Bookmark from './pages/Bookmark'
import SlotLayout from './pages/SlotLayout'
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import { ToastContainer, toast } from 'react-toastify';


function App() {

  useEffect(()=>{
    AOS.init({
      duration:1500,
      once:true,
    })
  })

  const isAdminRoute=useLocation().pathname.startsWith('/admin')

  return (
    <>
    <ToastContainer />
    <Toaster/>
     {!isAdminRoute && <Navbar/>}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/biss' element={<Businesses/>}/>
      <Route path='/biss/:id' element={<BusinessDetails/>}/>
      <Route path='/biss/:id/:date' element={<SlotLayout/>}/>
      <Route path='/bookmarked' element={<Bookmark/>}/>
      <Route path='/mybookings' element={<Mybookings/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/myprofile' element={<MyProfile/>}/>
     </Routes>
     {!isAdminRoute && <Footer/>}
    </>
  )
}

export default App
