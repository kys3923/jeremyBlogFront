import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

// components
import Header from './components/Header';
import Footer from './components/Footer';

// pages - account
import Login from './account/Login';
import Register from './account/Register';

// pages
import Landing from "./landing/Landing";
import Memo from './components/Memo';
import PostLanding from './post/PostLanding';

const App = (props) => {

  const [ allPosts, setAllPosts ] = useState([]);

  useEffect(() => {
    let isMounted = true;
    const getAllPost = async () => {
      const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/getAllPosts`)
      if(request.data.status) {
        setAllPosts(request.data.posts)
      }
    }
    getAllPost();
    return () => {
      isMounted = false;
    }
  },[])
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Landing allPosts={allPosts} />} />
          {/* Account */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Post */}
          <Route path='/post' element={<PostLanding />} />

          <Route path='/memo' element={<Memo />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;