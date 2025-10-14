import { StarIcon } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

function ShopCard({shop}) {

    const nav=useNavigate()
    

  return (
    <div className='flex flex-col justify-between p-3 bg-gray-800
    rounded-2xl hover:-translate-y-1 transition duration-300 w-66'>
      
      <img onClick={()=>{nav(`/biss/${shop._id}`);scrollTo(0,0)}}
      src={shop.image} alt="" className='rounded-lg h-52 w-full
      object-cover object-right-bottom cursor-pointer' />

      <p className='font-semibold mt-2 truncate'>{shop.title}</p>
       
       <div className={`flex items-center gap-2 text-xs text-center ${shop.available ? 'text-green-500' : 'text-red-500'} `}>
       <p className={`w-2 h-2 ${shop.available ? ' bg-green-500' : "bg-red-500"  } rounded-full`}></p><p>{shop.available ? 'Avaiable' : 'Not Available'}</p>
      </div>

      <p className='text-xs mt-2'>
        {shop.category}
      </p>

      <p className='text-sm text-gray-400 mt-2'>
        {shop.details}
      </p>

      <p className='text-xs mt-2'>
        {shop.location}
      </p>
      <p className='text-xs text-gray-300 mt-2'>
        {shop.availability}
      </p>

      <div className='flex items-center justify-between mt-4 pb-3'>
        <button onClick={()=>{nav(`/biss/${shop._id}`);scrollTo(0,0)}} className='px-4 py-2 text-xs bg-primary hover:bg-primary-dull
        transition rounded-full font-medium cursor-pointer'>Book Now</button>

        <p className='flex items-center gap-1 text-sm text-gray-400 mt-1 pr-1'>
            <StarIcon className='w-4 h-4 text-secondary fill-primary'/>
            {(shop?.vote_average ?? 0).toFixed(1)}
        </p>
      </div>
    </div>
  )
}

export default ShopCard
