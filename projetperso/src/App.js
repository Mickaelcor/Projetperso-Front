import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './components/pages/RegisterPage';
import axios from 'axios';
import { UserContextProvider } from './UserContext';
import AccountPage from './components/pages/AccountPage';

axios.defaults.baseURL = 'http://localhost:5001';
axios.defaults.withCredentials = true;


// import NotFound from './components/NotFound';

// import NewConcert from './components/NewConcert';
// import AllConcerts from './components/AllConcerts';
// import Concert from './components/Concert';
// import ImageUpload from './components/ImageUpload';


function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/account/:subpage?" element={<AccountPage />} />
          <Route path="/account/:subpage/:action" element={<AccountPage />} />
        </Route>
      </Routes>
    </UserContextProvider>

    //   <Route path="/newconcert" element={<NewConcert />} />
    //   <Route path='/allconcerts' element={<AllConcerts />} />
    //   <Route path='/concert/:id' element={<Concert />} />
    //   <Route path='/uploadimage' element={<ImageUpload />} />
    //   <Route path="/*" element={<NotFound />} /> */}



  );
}

export default App;
