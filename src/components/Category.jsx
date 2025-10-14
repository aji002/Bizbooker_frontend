import React from 'react'
import { categoryData } from '../assets/assets'
import { Link } from 'react-router-dom'

function Category() {
  return (
    <div className='flex flex-col items-center gap-4 py-16 w-full'>
      <h3 className='text-3xl font-medium'>Select by Category</h3>
      <p className='sm:w-1/3 text-center text-sm'>Explore Top Services Near You, Your Appointment Starts Here  </p>
      <div className='flex sm:justify-center gap-4 pt-5 w-full overflow-x-auto'>
        {categoryData.map((item,index)=>(
            <Link onClick={()=>scrollTo(0,0)} className='flex flex-col items-center gap-2 min-w-[100px] p-2 rounded hover:bg-gray-800 transition '
             key={index} to={`/biss?category=${item.category}`}>
                <img className='w-25 h-25 object-cover rounded-full' src={item.image} alt="" />
                <p className='text-sm font-medium'>{item.category}</p>
            </Link>
        ))}
      </div>
    </div>
  )
}

export default Category
