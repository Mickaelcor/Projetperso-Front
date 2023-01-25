// Page de connexion

import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost:5001/api/login" method='post'>
                    <label>Email :</label>
                    <input type="email" name="email" />
                    <br />
                    <label>Password :</label>
                    <input type="password" name="password" />
                    <br />
                    <input type="submit" value="Connexion" />
                </form>
            </div>
        )
    }
}

export default Login