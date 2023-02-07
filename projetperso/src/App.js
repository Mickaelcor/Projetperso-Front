import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './components/pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import ProfilePage from './components/pages/ProfilePage.jsx';
import PlacesPage from './components/pages/PlacesPage';
import PlacesFormPage from './components/pages/PlacesFormPage.jsx';
import PlacePage from './components/pages/PlacePage.jsx';

axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.withCredentials = true;


// import NotFound from './components/NotFound';




function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account" element={<ProfilePage />} />
          <Route path="/account/places" element={<PlacesPage />} />
          <Route path="/account/places/new" element={<PlacesFormPage />} />
          <Route path="/account/places/:id" element={<PlacesFormPage />} />
          <Route path="/place/:id" element={<PlacePage />} />
        </Route>
      </Routes>
    </UserContextProvider>


    //   <Route path="/*" element={<NotFound />} /> */}



  );
}

export default App;
