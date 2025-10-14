import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { dummyDateTimeData, dummyfacilitiesData } from '../assets/assets'
import DateSelect from '../components/DateSelect'
import ShopCard from '../components/ShopCard'
import Loading from '../components/Loading'
import { AppContext } from '../context/AppContext'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import axios from 'axios'
import BlurCircle from '../components/BlurCircle'
import { Heart, Star } from 'lucide-react'

function BusinessDetails() {

  const nav = useNavigate()

  const { id } = useParams()
  const [data, setData] = useState(null)

  // const {shops} = useContext(AppContext)

  const {
    backendUrl,
    shops,
    toggleBookmark,
    isBookmarked,
    token,
  } = useContext(AppContext);


  const [showReviewModal, setShowReviewModal] = useState(false)
  const [reviews, setReviews] = useState([])
  const [loadingReviews, setLoadingReviews] = useState(false)
  const [errorReviews, setErrorReviews] = useState('')


  // Fetch current shop data from context
  useEffect(() => {
    const currentShop = shops.find((s) => s._id === id);
    if (currentShop) {
      setData({
        shop: currentShop,
        dateTime: dummyDateTimeData,
      });
    }
  }, [id, shops]);


  // 🔹 Fetch reviews from backend

  const fetchReviews = async () => {
    console.log('fetchReviews called ✅');
    setLoadingReviews(true);
    setErrorReviews('');
    try {
      const res = await axios.get(`${backendUrl}/api/shop/getreviews/${id}`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      console.log('Fetched reviews:', res.data);

      // ✅ Adjust condition for both cases (with/without "success" key)
      if (res.data.success || res.data.reviews) {
        setReviews(res.data.reviews || []);
        setShowReviewModal(true);
      } else {
        setErrorReviews(res.data.message || 'Failed to load reviews');
      }
    } catch (err) {
      console.error('Error fetching reviews:', err);
      setErrorReviews(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoadingReviews(false);
    }
  };

  const handleBookmarkClick = () => {
    if (!token) {
      nav('/login');
      return;
    }
    toggleBookmark(data.shop._id);
  };

  return data ? (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img
          src={data.shop.image}
          alt=''
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />

        <div className='relative flex flex-col gap-3'>
          <BlurCircle top='-100px' left='-100px' />
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {data.shop.title}
          </h1>
          <p className='text mt-2'>{data.shop.category}</p>
          <p className='text-gray-400 mt-2 text-sm leading-tight max-w-xl'>
            {data.shop.details}
          </p>
          <p className='text-xs mt-2'>{data.shop.location}</p>
          <p className='text-xs mt-2'>{data.shop.availability}</p>
          <p className='text-xs mt-2'>{data.shop.contact}</p>

          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <a
              href='#dateSelect'
              className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900 transition rounded-md font-medium cursor-pointer active:scale-95'
            >
              Book Slot
            </a>
            <button onClick={handleBookmarkClick}
              className={`p-2.5 rounded-full transition cursor-pointer active:scale-95 ${isBookmarked(data.shop._id) ? 'bg-red-500' : 'bg-gray-700'
                }`}
            >
              <Heart className={`w-5 h-5 ${isBookmarked(data.shop._id) ? 'fill-white text-white' : 'text-white'
                }`} />
            </button>
          </div>

          {/* ⭐ Reviews Button */}
          {data?.shop && (
            <div
              className="flex items-center gap-2 text-gray-300 cursor-pointer mt-3"
              onClick={fetchReviews}
            >
              <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              {(data.shop?.vote_average ?? 0).toFixed(1)}
              <span className="text-sm underline ml-1">See Reviews</span>
            </div>
          )}
        </div>
      </div>

      <p className='text-lg font-medium mt-20'>Facilities</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='flex items-center gap-4 w-max px-4'>
          {(dummyfacilitiesData ?? []).slice(0, 12).map((facility, index) => (
            <div
              key={index}
              className='flex flex-col items-center text-center'
            >
              <img
                src={facility.facility_path}
                alt=''
                className='rounded-full h-20 md:h-20 aspect-square object-cover'
              />
              <p className='font-medium text-xs mt-3'>{facility.name}</p>
            </div>
          ))}
        </div>
      </div>

      <DateSelect
        dateTime={data.dateTime}
        id={id}
        shopData={data.shop}
      />

      <p className='text-lg font-medium mt-20 mb-8'>Related Shops</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {shops.slice(0, 4).map((shop, index) => (
          <ShopCard key={index} shop={shop} />
        ))}
      </div>
      <div className='flex justify-center mt-20'>
        <button
          onClick={() => {
            nav('/biss')
            scrollTo(0, 0)
          }}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition rounded-md font-medium cursor-pointer'
        >
          Show more
        </button>
      </div>


      {/* 💬 Review Modal */}
      <Dialog
        open={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        className="fixed z-50 inset-0 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen px-4">
          <DialogBackdrop className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          <DialogPanel className="bg-gray-900 text-white rounded-2xl max-w-lg w-full p-6 z-50 relative shadow-2xl border border-orange-500/30">
            <DialogTitle className="text-xl font-semibold mb-5 text-orange-400 text-center">
              Customer Reviews
            </DialogTitle>

            {loadingReviews ? (
              <p className="text-sm text-gray-400 text-center">Loading...</p>
            ) : errorReviews ? (
              <p className="text-sm text-red-400 text-center">{errorReviews}</p>
            ) : reviews.length === 0 ? (
              <p className="text-sm text-gray-400 text-center">No reviews available.</p>
            ) : (
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {reviews.map((r, idx) => (
                  <div
                    key={idx}
                    className="border border-gray-700 bg-gray-800 p-4 rounded-lg shadow-sm hover:border-orange-500 transition"
                  >
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-orange-300">{r.userId?.name || 'User'}</p>
                      <p className="text-sm text-orange-400">⭐ {r.rating}/5</p>
                    </div>
                    <p className="text-sm mt-2 text-gray-300">{r.comment}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(r.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => setShowReviewModal(false)}
              className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-medium w-full transition"
            >
              Close
            </button>
          </DialogPanel>
        </div>
      </Dialog>


    </div>
  ) : (
    <Loading />
  )
}

export default BusinessDetails
