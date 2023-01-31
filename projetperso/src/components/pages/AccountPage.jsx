import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../../UserContext.jsx"

export default function AccountPage() {
    const { ready, user } = useContext(UserContext);

    // Si pas pret retour au chargement
    if (!ready) {
        return 'Loading...';
    }
    // Pret et pas d'User rediriger vers login
    if (ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>account page for {user.name}</div>
    );
}