// Page pour voir tous les utilisateurs

import React, { useReducer, useEffect } from 'react'
import axios from 'axios'
import { Card, Icon } from 'semantic-ui-react'

function AllUsers() {

    const initialState = {
        loading: true,
        error: '',
        users: {}
    }
    const reducer = (state, action) => {
        switch (action.type) {
            case 'SUCCESS':
                return {
                    loading: false,
                    error: '',
                    users: action.payload
                }
            case 'ERROR':
                return {
                    loading: false,
                    error: action.payload,
                    users: {}
                }
            default:
                return state
        }
    }
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://localhost:5001/allusers')
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
                    state.loading ? 'Loading...' : state.users.data.map((user, index) => {
                        return (
                            <div key={index}>
                                {/* username = {user.username}
                                <br />
                                email = {user.email}
                                <br />
                                age = {user.age}
                                <br />
                                telephone = {user.tel}
                                <hr /> */}
                                <Card>
                                    <Card.Content header={user.username} />
                                    <Card.Content description={user.email} />
                                    <Card.Content extra>
                                        <Icon name='user' />{user.admin ? "L'utilisateur est admin" : "L'utilisateur n'est pas admin"}
                                    </Card.Content>
                                </Card>
                            </div>
                        )
                    })
                }
            </React.Fragment>
        </div>
    )
}

export default AllUsers