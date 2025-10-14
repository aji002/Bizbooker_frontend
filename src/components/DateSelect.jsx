import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon } from 'lucide-react'
// import toast from 'react-hot-toast'
import isoTimeFormat from '../lib/isoTimeFormat'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'


function DateSelect({ id }) {

    const { shops, backendUrl, token, getShopsData } = useContext(AppContext)

    const nav = useNavigate()

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)
    const [shopData, setShopData] = useState(0)
    const [availableDates, setAvailableDates] = useState([])
    const [currentDateIndex, setCurrentDateIndex] = useState(0)

    const bookAppointment = async () => {
        if (!selectedDate) return toast('Please select a date')
        if (!selectedTime) return toast('Please select a time slot')
        if (!token) {
            toast.warn('Login to book appointment')
            return nav('/login')
        }
        if (!shopData || !shopData.available) {
        toast.error('Shop is currently unavailable')
        return
    }

        try {

            // const date = availableDates[shopData][0].datetime

            // let day=date.getDate()
            // let month = date.getMonth()+1 
            // let year = date.getFullYear()

            // const slotDate = day +"_" + month + "_" + year

            // console.log(slotDate);

            const [year, month, day] = selectedDate.split('-')  // '2025-07-24'
            const slotDate = `${day}_${month}_${year}`
            

            const {data} = await axios.post(backendUrl + '/api/user/bookappointment',{shopId:id,slotDate,slotTime:selectedTime.time},{headers:{token}})
            
            if(data.success){
                toast.success(data.message)
                getShopsData()
                nav('/mybookings')
            
            }else{
                toast.error(data.message)
            }

            // console.log("✅ Booking Confirmed:")
            // console.log("📅 Formatted Slot Date:", slotDate)
            // console.log("⏰ Booked Time:", selectedTime.time)

        } catch (error) {
            console.error(error)
            toast.error(error.message)
        }
    }

    // Generate time slots from 10am to 5pm with 1-hour gaps
    const generateTimeSlots = () => {
        const slots = []
        for (let hour = 10; hour <= 17; hour++) {
            const time = `${hour.toString().padStart(2, '0')}:00`
            slots.push({
                time: time,
                available: true
            })
        }
        return slots
    }

    // Generate available dates (current date onwards for next 30 days)
    const generateAvailableDates = () => {
        const dates = []
        const today = new Date()

        for (let i = 0; i < 30; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            dates.push(date.toISOString().split('T')[0])
        }

        setAvailableDates(dates)
    }

    // Navigate to previous dates
    const goToPreviousDates = () => {
        if (currentDateIndex > 0) {
            setCurrentDateIndex(currentDateIndex - 7)
        }
    }

    // Navigate to next dates
    const goToNextDates = () => {
        if (currentDateIndex + 7 < availableDates.length) {
            setCurrentDateIndex(currentDateIndex + 7)
        }
    }

    // Get current visible dates (7 dates at a time)
    const getVisibleDates = () => {
        return availableDates.slice(currentDateIndex, currentDateIndex + 7)
    }

    // Load shop data
    useEffect(() => {
        const shop = shops.find(data => data._id === id)
        if (shop) {
            setShopData(shop)
        }
        generateAvailableDates()
    }, [id])

    // Scroll to slot section after selecting date
    useEffect(() => {
        if (selectedDate) {
            setTimeout(() => {
                document.getElementById("slotSection")?.scrollIntoView({ behavior: 'smooth' })
            }, 200)
        }
    }, [selectedDate])

    // const onBookHandler = () => {
    //     if (!selectedDate) return toast('Please select a date')
    //     if (!selectedTime) return toast('Please select a time slot')

    //     // Navigate or do something with selectedDate & selectedTime
    //     nav('/mybookings')
    //     scrollTo(0, 0)
    // }

    // Format time for display
    const formatTimeForDisplay = (time) => {
        const [hour, minute] = time.split(':')
        const hourNum = parseInt(hour)
        const ampm = hourNum >= 12 ? 'PM' : 'AM'
        const displayHour = hourNum > 12 ? hourNum - 12 : hourNum
        return `${displayHour}:${minute} ${ampm}`
    }

    return (
        <div id='dateSelect' className='pt-30'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-10
        relative p-8 bg-primary/10 border border-primary/20 rounded-lg'>
                <BlurCircle top="-100px" left="-100px" />
                <BlurCircle top="100px" right="0px" />

                {/* Date Selection */}
                <div>
                    <p className='text-lg font-semibold'>Choose Date</p>
                    <div className='flex items-center gap-6 text-sm mt-5'>
                        <ChevronLeftIcon
                            width={28}
                            className={`cursor-pointer transition-all ${currentDateIndex === 0
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-primary hover:text-primary/80'
                                }`}
                            onClick={goToPreviousDates}
                        />
                        <span className='grid grid-cols-3 md:flex flex-wrap md:max-w-lg gap-4'>
                            {getVisibleDates().map((date) => {
                                const dateObj = new Date(date)
                                const isToday = date === new Date().toISOString().split('T')[0]

                                return (
                                    <button
                                        onClick={() => {
                                            setSelectedDate(date)
                                            setSelectedTime(null)
                                        }}
                                        key={date}
                                        type="button"
                                        className={`flex flex-col items-center justify-center h-14 w-14 aspect-square rounded
                      cursor-pointer transition-all ${selectedDate === date ?
                                                "bg-primary text-white" : "border border-primary/70 hover:bg-primary/10"}`}>
                                        <span>{dateObj.getDate()}</span>
                                        <span>{dateObj.toLocaleDateString("en-US", { month: "short" })}</span>
                                        {isToday && <span className='text-xs'>Today</span>}
                                    </button>
                                )
                            })}
                        </span>
                        <ChevronRightIcon
                            width={28}
                            className={`cursor-pointer transition-all ${currentDateIndex + 7 >= availableDates.length
                                ? 'text-gray-400 cursor-not-allowed'
                                : 'text-primary hover:text-primary/80'
                                }`}
                            onClick={goToNextDates}
                        />
                    </div>

                    {/* Time Slot Selection */}
                    {selectedDate && (
                        <div id="slotSection" className='mt-6'>
                            <p className='text-lg font-semibold mb-3'>Available Timings</p>
                            <div className='flex flex-wrap gap-2'>
                                {generateTimeSlots().map((slot) => (
                                    <div
                                        key={slot.time}
                                        onClick={() => setSelectedTime(slot)}
                                        className={`flex items-center gap-2 px-4 py-2 rounded-md cursor-pointer transition text-sm
                      ${selectedTime?.time === slot.time ? 'bg-primary text-white' : 'hover:bg-primary/20 border border-primary/30'}`}>
                                        <ClockIcon className='w-4 h-4' />
                                        <p>{formatTimeForDisplay(slot.time)}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Book Button */}
                    <button
                        onClick={bookAppointment}
                        className='bg-primary text-white px-8 py-2 mt-6 rounded
              hover:bg-primary/90 transition-all cursor-pointer disabled:opacity-50'
                        disabled={!selectedDate || !selectedTime}>
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DateSelect