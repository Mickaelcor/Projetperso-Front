// Page Profil perso

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function Profile() {

    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [users, setUser] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5001/user/${params.id}`)
            .then(response => {
                setLoading(false)
                setError('')
                setUser(response.data.data)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
                setUser({})
            })
    })

    return (
        <div>
            <h1>Hello, {params.id}</h1>
            <br />
            {
                loading ? 'Loading..' : users.prenom
            }
            <br />
            {
                loading ? 'Loading..' : users.nom
            }
            <br />
            {
                loading ? 'Loading..' : users.email
            }
            <br />
            {
                loading ? 'Loading..' : users.password
            }
            <br />
            {
                loading ? 'Loading..' : users.age
            }
            <br />
            {
                loading ? 'Loading..' : users.tel
            }
            {error ? 'error' : null}
        </div>
    )
}

export default Profile