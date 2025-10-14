import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyShopsData } from '../assets/assets'
import { ArrowRightIcon, ClockIcon } from 'lucide-react'
import Loading from '../components/Loading'
import isoTimeFormat from '../lib/isoTimeFormat'

function SlotLayout() {

    const { id, date } = useParams()
    const [selectedSlots, setSelectedSlots] = useState([])
    const [selectedTime, setSelectedTime] = useState(null)
    const [data, setData] = useState(null)

    const nav = useNavigate()

    const getData = async () => {
        const data = dummyShopsData.find(data => data._id === id)
        if (data) {
            setData({
                shop: data,
                dateTime: dummyDateTimeData
            })
        }
    }

    useEffect(() => {
        getData()
    }, [])


    return data ? (
        <div className='flex flex-col md:flex-row px-6 md:px-16 lg:px-40 py-30
    md:pt-50'>
            {/* Available Timings  */}
            <div className='w-60 bg-primary/10 border bordeer-primary/20 rounded-lg py-10
        h-max md:sticky md:top-30'>
                <p className='text-lg font-semibold px-6'>Available Timings</p>
                <div className='mt-5 space-y-1'>
                    {data.dateTime[date].map((item) => (
                        <div key={item.time} onClick={() => setSelectedTime(item)} className={`flex items-center gap-2 px-6 py-2 w-max rounded-r-md
                        cursor-pointer transition ${selectedTime?.time === item.time ?
                                "bg-primary text-white" : "hover:bg-primary/20"} `}>
                            <ClockIcon className='w-4 h-4' />
                            <p className='text-sm'>{isoTimeFormat(item.time)}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* seat layout  */}
            <div>


            </div>

            <div>
                <button onClick={() => nav('/mybookings')} className='flex
                 items-center gap-1 mt-20 px-10 py-3 text-sm bg-primary
                hover:bg-primary-dull transition rounded-full font-medium cursor-pointer
                active:scale-95'>
                    Proceed to Checkout
                    <ArrowRightIcon strokeWidth={3} className='w-4 h-4' />
                </button>
            </div>

        </div>
    ) : (
        <Loading />
    )
}

export default SlotLayout
