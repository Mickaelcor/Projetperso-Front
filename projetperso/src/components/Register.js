// Page de creation de compte

import React, { Component } from 'react'

class Register extends Component {
    render() {
        return (
            <div>
                <form action="http://localhost:5001/api/signup" method="post">

                    <label>Username:</label>
                    <input type="text" name="username" />
                    <label>Prénom:</label>
                    <input type="text" name="prenom" />
                    <label>Nom:</label>
                    <input type="text" name="nom" />
                    <label>Email:</label>
                    <input type="email" name="email" />
                    <label>Mot de passe</label>
                    <input type="password" name="password" />
                    <label>Age</label>
                    <input type="number" name="age" />
                    <label>Telephone</label>
                    <input type="text" name="tel" />

                    <input type="submit" value="Inscription" />
                </form>
            </div>
        )
    }
}

export default Register