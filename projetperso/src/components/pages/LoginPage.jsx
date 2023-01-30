// Importe les hooks "useState" et le composant "Link" de React Router DOM
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

// Définit le composant "LoginPage"
export default function LoginPage() {
    // Définit les états locaux "email" et "password" avec des valeurs initiales vides
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleLoginSubmit(ev) {
        ev.prevenDefault();
        try {
            await axios.post('http://localhost5001/login', { email, password });
            alert('Login successful');
        } catch (e) {
            alert('Login failed');
        }
    }

    // Retourne le formulaire de connexion
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <form className="max-w-md mx-auto" onSubmit={handleLoginSubmit}>

                    <input
                        type="email"
                        placeholder="votre@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />

                    <input
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />

                    <button className="primary">Login</button>

                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet? <Link className="underline text-black" to={'/register'}>Register now</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}