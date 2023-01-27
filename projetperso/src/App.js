
import './App.css';
// import de semantic framework
import 'semantic-ui-css/semantic.min.css'
import { Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import AllUsers from './components/AllUsers';
import Profile from './components/Profile';
import NewConcert from './components/NewConcert';
import AllConcerts from './components/AllConcerts';
import Concert from './components/Concert';
import ImageUpload from './components/ImageUpload';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login/" element={<Login />} />
        <Route path="/allusers" element={<AllUsers />} />
        <Route path="/user/:id" element={<Profile />} />
        <Route path="/newconcert" element={<NewConcert />} />
        <Route path='/allconcerts' element={<AllConcerts />} />
        <Route path='/concert/:id' element={<Concert />} />
        <Route path='/uploadimage' element={<ImageUpload />} />
        <Route path="/*" element={<NotFound />} />

      </Routes>
    </div>
  );
}

export default App;
