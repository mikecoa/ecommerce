import Head from 'next/head'
import Image from 'next/image'
import { Card } from 'antd'
import Link from 'next/link'
import { useSelector, useDispatch } from 'react-redux'
import { clearAuth, setAuth } from '@/features/auth/authSlice'

export const Explore = () => {
  const { username } = useSelector((state) => state.auth)

  const dispatch = useDispatch()

  return (
    <>
      <Head>
        <title>NoMoreDelay</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {username ? <h1>{`Welcome, ${username}`}</h1> : <h1>Not Logged in</h1>}
      {username ? <button onClick={() => { dispatch(clearAuth()) }}>logout</button> :
        <button onClick={() => { dispatch(setAuth({ username: "mike" })) }}>login as mike</button>
      }
      
    </>
  )
}

export default Explore