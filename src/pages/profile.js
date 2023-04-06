import React from 'react'
import Form from '../components/Form'
import { useSelector, useDispatch } from 'react-redux'

export const Profile = () => {

    const { username } = useSelector((state) => state.auth)
    return (
        <div>
            <h1>Profile</h1>
            {!username ? <Form></Form> : <></>}
        </div>
    )
}

export default Profile