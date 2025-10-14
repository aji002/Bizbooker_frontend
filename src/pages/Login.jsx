import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

function Login() {

  const { backendUrl, token, setToken } = useContext(AppContext)
  const nav=useNavigate()

  const [state, setState] = useState('Sign up')

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {

      if (state === 'Sign up') {
        const { data } = await axios.post(backendUrl + '/api/user/register', { name, password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }
      } else {

        const { data } = await axios.post(backendUrl + '/api/user/login', { password, email })
        if (data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      }

    } catch (error) {
        toast.error(error.message)
    }
  }

  useEffect(()=>{
    if(token){
      nav('/')
    }
  },[token])


  return (
    <form onSubmit={handleSubmit} className='min-h-[90vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Sign up' ? 'Create Account' : "Login"}</p>
        <p className='text-gray-300'>Please {state === 'Sign up' ? "sign up" : "log in"} to book your slot</p>
        {
          state === 'Sign up' &&
          <div className='w-full'>
            <p>User Name</p>
            <input className='border border-gray-500 rounded w-full p-2 mt-1' type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
        }

        <div className='w-full'>
          <p>Email</p>
          <input type="text" className='border border-gray-500 rounded w-full p-2 mt-1' onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className='w-full'>
          <p>Password</p>
          <input type="text" className='border border-gray-500 rounded w-full p-2 mt-1' onChange={(e) => setPassword(e.target.value)} value={password} />
        </div>
        <button type='submit' className='bg-primary  w-full py-2 rounded-md text-base'>{state === 'Sign up' ? 'Create Account' : "Login"}</button>
        {
          state === "Sign up"
            ? <p>Already have account? <span onClick={() => setState('Login')} className='text-primary underline cursor-pointer'>Login here</span></p>
            : <p>Create a new account?<span onClick={() => setState('Sign up')} className='text-primary underline cursor-pointer'> click here</span></p>
        }
      </div>
    </form>
  )
}

export default Login
