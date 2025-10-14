import React, { useContext, useState } from 'react'
import ShopCard from '../components/ShopCard'
import BlurCircle from '../components/BlurCircle'
import { useSearchParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

function Businesses() {

  const [searchParams]= useSearchParams();
  const categoryFilter = searchParams.get('category');
  const [search, setSearch] = useState("");

      const {shops} = useContext(AppContext)
  

  const filteredByCategory = categoryFilter
    ? shops.filter((shop) =>
        shop.category.toLowerCase().includes(categoryFilter.toLowerCase())
      )
    : shops;

  const finalShops = filteredByCategory.filter((shop) =>
    shop.title.toLowerCase().includes(search.toLowerCase()) ||
    shop.category.toLowerCase().includes(search.toLowerCase())
  );


   return finalShops.length > 0 ? (
    <div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44 overflow-hidden min-h-[80vh]'>
      <BlurCircle top="150px" left="0px" />
      <BlurCircle top="50px" left="50px" />

      <h2 className='text-sm text-gray-400 mb-2'>
        {categoryFilter ? `Showing results for "${categoryFilter}"` : `All Categories`}
      </h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search shops..."
        className="p-2 border rounded mb-4 w-full max-w-md"
      />

      <h1 className='text-lg font-medium mb-4'>Shops</h1>

      <div className='flex flex-wrap max-sm:justify-center gap-8'>
        {finalShops.map((shop) => (
          <ShopCard shop={shop} key={shop._id} />
        ))}
      </div>
    </div>
  ) : (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold text-center'>No Shops Available</h1>
    </div>
  );
}

export default Businesses
