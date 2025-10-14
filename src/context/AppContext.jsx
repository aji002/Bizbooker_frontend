import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [shops, setShops] = useState([])

    const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : false)
    const [userData, setUserData] = useState(false)


    // ✅ Bookmark state
    const [bookmarks, setBookmarks] = useState([]);

    // ✅ Fetch user's bookmarked shops
  const fetchBookmarks = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/api/user/bookmarks`, {
        headers: { token },
      });
      if (data.success) {
        setBookmarks(data.shops);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Failed to load bookmarks");
    }
  };

  // ✅ Toggle bookmark (add/remove)
  const toggleBookmark = async (shopId) => {
    try {
      const { data } = await axios.post(
        `${backendUrl}/api/user/toggleBookmark`,
        { shopId },
        { headers: { token } }
      );
      toast.success(data.message);
      fetchBookmarks();
    } catch (error) {
      console.log(error);
      toast.error("Error toggling bookmark");
    }
  };

  // ✅ Check if a shop is bookmarked
  const isBookmarked = (shopId) => {
    return bookmarks.some((shop) => shop._id === shopId);
  };


    const getShopsData = async () => {
        try {
            const { data } = await axios.get(backendUrl + '/api/shop/list')
            if (data.success) {
                setShops(data.shops)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const loadUserProfileData = async () => {
        try {

            const { data } = await axios.get(backendUrl + '/api/user/getprofile', { headers: { token } })
            if (data.success) {
                setUserData(data.userData)
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const value = {
        shops, getShopsData,
        token, setToken,
        backendUrl,
        userData, setUserData,
        loadUserProfileData,

        // ✅ bookmark values
        bookmarks,
        fetchBookmarks,
        toggleBookmark,
        isBookmarked,
    }


    useEffect(() => {
        getShopsData()
    }, [])

    useEffect(() => {
        if (token) {
            loadUserProfileData()
            fetchBookmarks();
        } else {
            setUserData(false)
            setBookmarks([]);
        }
    }, [token])

    return (

        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider