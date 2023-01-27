// Page pour afficher tous les concerts

import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'

function AllConcerts() {

    const initialState = {
        loading: true,
        error: '',
        concerts: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
                return {
                    loading: false,
                    error: '',
                    concerts: action.payload
                }
            case 'ERROR':
                return {
                    loading: false,
                    error: action.payload,
                    concerts: {}
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://localhost:5001/allconcerts')
            .then((response) => {
                dispatch({ type: 'SUCCESS', payload: response.data })
            })
            .catch((error) => {
                dispatch({ type: 'ERROR', payload: error })
            })
    });
    return (
        <div>
            <React.Fragment>
                {
                    state.loading ? 'Loading...' : state.concerts.data.map((concert, index) => {
                        return (
                            <div key={index}>
                                <Card href={["/concert/" + concert._id]}>
                                    <Card.Content header={concert.titre} />
                                    <Card.Content extra>
                                        <Icon name='user' />{concert.artiste}
                                    </Card.Content>
                                    <Card.Content description={concert.description} />
                                    <Card.Content description={concert.date_debut} />
                                    <Card.Content description={concert.date_fin} />


                                </Card>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        </div>
    )
}
export default AllConcerts