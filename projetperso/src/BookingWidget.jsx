import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "./UserContext.jsx";

export default function BookingWidget({ place }) {

    const [checkIn, setChekIn] = useState('');
    const [numberOfGuests, setNumberOfGuests] = useState(0);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const { user } = useContext(UserContext);

    // Si un user est log autoremplissage de son nom lors de la reservation
    useEffect(() => {
        if (user) {
            setName(user.name);
        }
    }, [user]);

    // Transformer la valeur du calendrier en number
    let checkInDate = 0;
    if (checkIn) {
        checkInDate = parseInt(checkIn);
    }

    // Fonction reservation 
    async function bookThisPlace() {
        const response = await axios.post('/bookings', {
            checkIn, numberOfGuests, name, phone,
            place: place._id,
            price: numberOfGuests * place.price,
        });
        const bookingId = response.data._id;
        setRedirect(`/account/bookings/${bookingId}`);
    }

    if (redirect) {
        return <Navigate to={redirect} />
    }



    return (
        <div className="bg-white shadow p-4 rounded-2xl">
            <div className="text-2xl text-center">
                Prix: {place.price}€ / par pers
            </div>
            <div className="border rounded-2xl mt-4">
                <div className="flex">
                    <div className="py-3 px-4">
                        <label>Date: </label>
                        <input type="date"
                            value={checkIn}
                            onChange={ev => setChekIn(ev.target.value)} />
                    </div>
                </div>
                <div className="py-3 px-4 border-t">
                    <label>Nombre de billets:</label>
                    <input type="number"
                        value={numberOfGuests}
                        onChange={ev => setNumberOfGuests(ev.target.value)} />
                </div>
                {checkInDate > 0 && (
                    <div className="py-3 px-4 border-t">
                        <label>Prénom & Nom:</label>
                        <input type="text"
                            value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <label>N° Portable:</label>
                        <input type="tel"
                            value={phone}
                            onChange={ev => setPhone(ev.target.value)} />
                    </div>
                )}
            </div>
            <button onClick={bookThisPlace} className="primary mt-4">
                Reserver pour:
                {numberOfGuests > 0 && (
                    <span> {numberOfGuests * place.price} €</span>
                )}
            </button>
        </div>
    );
}