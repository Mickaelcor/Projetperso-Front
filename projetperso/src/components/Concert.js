// Page pour voir 1 seul concert

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import moment from 'moment'
import 'moment/locale/fr'

function Concert() {

    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")
    const [concerts, setConcert] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:5001/oneconcert/${params.id}`)
            .then(response => {
                setLoading(false)
                setError('')
                setConcert(response.data.data)
            })
            .catch(error => {
                setLoading(false)
                setError(error)
                setConcert({})
            })
    })

    return (
        <div>Concert id {params.id}
            <br />
            {
                loading ? 'Loading..' : concerts.titre
            }
            <br />
            {
                loading ? 'Loading..' : concerts.artiste
            }
            <br />
            {
                loading ? 'Loading..' : moment(concerts.date_debut).format('L')
            }
            <br />
            {
                loading ? 'Loading..' : moment(concerts.date_fin).format('L')
            }
            <br />
            {
                loading ? 'Loading..' : concerts.nbr_place + " places"
            }
            {error ? 'error' : null}
        </div>
    )
}

export default Concert