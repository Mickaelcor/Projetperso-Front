import './App.css';
import { Route, Routes } from 'react-router-dom';
import IndexPage from './components/pages/IndexPage';
import LoginPage from './components/pages/LoginPage';
import Layout from './Layout';
import RegisterPage from './components/pages/RegisterPage';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5001';

// import de semantic framework
// import 'semantic-ui-css/semantic.min.css'
// import { Route, Routes } from 'react-router-dom';
// import Register from './components/Register';
// import Home from './components/Home';
// import Login from './components/Login';
// import NotFound from './components/NotFound';
// import AllUsers from './components/AllUsers';
// import Profile from './components/Profile';
// import NewConcert from './components/NewConcert';
// import AllConcerts from './components/AllConcerts';
// import Concert from './components/Concert';
// import ImageUpload from './components/ImageUpload';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

    </Routes>

    // {/* <Routes>
    //   <Route path="/home" element={<Home />} />
    //   <Route path="/register" element={<Register />} />
    //   <Route path="/login/" element={<Login />} />
    //   <Route path="/allusers" element={<AllUsers />} />
    //   <Route path="/user/:id" element={<Profile />} />
    //   <Route path="/newconcert" element={<NewConcert />} />
    //   <Route path='/allconcerts' element={<AllConcerts />} />
    //   <Route path='/concert/:id' element={<Concert />} />
    //   <Route path='/uploadimage' element={<ImageUpload />} />
    //   <Route path="/*" element={<NotFound />} /> */}

    // {/* </Routes> */}

  );
}

export default App;
