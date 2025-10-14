import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import ShopCard from '../components/ShopCard'
import Loading from '../components/Loading'

function Bookmark() {
  const { bookmarks, loading, token } = useContext(AppContext)

  if (!token) return <p className="text-center py-10 text-red-500">Please login to view bookmarks.</p>
  if (loading) return <Loading />

  return (
    <div className="px-6 md:px-16 lg:px-40 py-10">
      <h1 className="text-2xl font-semibold mb-6">Your Bookmarked Shops</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-500">You haven’t bookmarked any shops yet.</p>
      ) : (
        <div className="flex flex-wrap gap-6">
          {bookmarks.map(shop => (
            <ShopCard key={shop._id} shop={shop} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Bookmark
