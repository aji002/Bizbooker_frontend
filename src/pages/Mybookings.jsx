import React, { useContext, useEffect, useState } from 'react'
import { dummyBookingData } from '../assets/assets'
import BlurCircle from '../components/BlurCircle'
import Loading from '../components/Loading'
import { dateFormat } from '../lib/ddateFormat'
// import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Button } from 'bootstrap'

function Mybookings() {

  const { backendUrl, token,getShopsData } = useContext(AppContext)

  const nav = useNavigate()

  const [appointments, setAppointments] = useState([])

  // const months = ["Jan","Feb","Mar"]

  const [isLoading, setLoading] = useState(true)


  // star rating
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [ratingData, setRatingData] = useState({ rating: 0, comment: '', shopId: '' });




  const getUserAppointments = async () => {

    try {
      const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments);

      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {

    try {

      const { data } = await axios.post(backendUrl + '/api/user/cancelappointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getShopsData()
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }


  //star rating
  const submitReview = async () => {
  try {
    const { data } = await axios.post(`${backendUrl}/api/user/submitreview`, ratingData, {
      headers: { token },
    });

    if (data.success) {
      toast.success('Review submitted');
      setShowReviewModal(false);
      getShopsData(); // refresh local cache
    } else {
      toast.error(data.message);
    }
  } catch (error) {
    console.log(error);
    toast.error('Error submitting review');
  }
};



  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
    setLoading(false)
  }, [token])

  return !isLoading ? (
    <div className='relative px-6 md:px-16 lg:px-40 pt-30 md:pt-40 min-h-[80vh] overflow-x-hidden'>
      <BlurCircle top="100px" left="100px" />
      <div>
        <BlurCircle bottom="0px" left="600px" />
      </div>
      <h1 className='text-lg font-semibold mb-4'>My Bookings</h1>

      {appointments.map((item, index) => (
        <div
          key={index}
          className='flex flex-col md:flex-row justify-between bg-primary/8 border border-primary/20 rounded-lg mt-4 p-2 max-w-3xl mx-auto'
        >
          <div className='flex flex-col md:flex-row'>
            <img
              src={item.shopData.image}
              alt=""
              className='w-50 md:max-w-45 aspect-video h-auto object-cover object-bottom rounded'
            />
            <div className='flex flex-col p-2'>
              <p className='text-lg font-semibold'>{item.shopData.title}</p>
              <p className='text-gray-400 text-sm mt-auto'>{item.shopData.category}</p>
              <p className='text-gray-400 text-sm mt-auto'>
                <span className='font-semibold text-white'>Date & Time :</span>{' '}
                {item.slotDate} - {item.slotTime}
              </p>
            </div>
          </div>

          <div className='flex flex-col md:items-end md:text-right justify-between p-4'>
            <div className='flex flex-col items-start md:items-end gap-2'>
              {!item.cancelled && !item.isCompleted && (
                <button
                  onClick={() => cancelAppointment(item._id)}
                  className='bg-primary px-4 py-1.5 text-sm rounded-full font-medium cursor-pointer'
                >
                  Cancel Booking
                </button>
              )}

              {item.cancelled && !item.isCompleted && (
                <button className='sm:min-w-48 py-2 border border-red-500 rounded text-red-500'>
                  Appointment Cancelled
                </button>
              )}

              {item.isCompleted && (
                <>
                  <button className='sm:min-w-48 py-2 border border-green-500 rounded text-green-500'>
                    Completed
                  </button>

                  {/* start rating */}

                  <button
                    onClick={() => {
                      setRatingData({
                        shopId: item.shopData._id,
                        rating: 0,
                        comment: '',
                      });
                      setShowReviewModal(true);
                    }}
                    className='text-sm mt-2 border border-primary text-primary px-4 py-1.5 rounded-full'
                  >
                    Give Rating
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* ⭐ Rating Modal */}
      {showReviewModal && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'>
          <div className='bg-white text-black rounded-lg p-6 w-full max-w-md'>
            <h2 className='text-lg font-semibold mb-4'>Submit Your Review</h2>

            <label className='block mb-2'>Rating (1 to 5)</label>
            <input
              type='number'
              max={5}
              min={1}
              value={ratingData.rating}
              onChange={(e) =>
                setRatingData({ ...ratingData, rating: e.target.value })
              }
              className='border w-full mb-4 p-2 rounded'
            />

            <label className='block mb-2'>Comment</label>
            <textarea
              value={ratingData.comment}
              onChange={(e) =>
                setRatingData({ ...ratingData, comment: e.target.value })
              }
              className='border w-full mb-4 p-2 rounded'
            />

            <div className='flex justify-between'>
              <button
                onClick={submitReview}
                className='bg-primary text-white px-4 py-2 rounded'
              >
                Submit
              </button>
              <button
                onClick={() => setShowReviewModal(false)}
                className='text-red-500 px-4 py-2'
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}
export default Mybookings
