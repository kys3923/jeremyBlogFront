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
import PostView from './landing/PostView';

const App = (props) => {

  const [ allPosts, setAllPosts ] = useState([]);
  const [ searchedText, setSearchedText ] = useState('');
  const [ searchedPosts, setSearchedPosts] = useState([]);
  const [ searchedTextHero, setSearchedTextHero ] = useState('');

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
    {console.log(allPosts)}
      <Router>
        <Header searchedText={searchedText} setSearchedText={setSearchedText} allPosts={allPosts} setSearchedPosts={setSearchedPosts} />
        <Routes>
          <Route path='/' element={<Landing allPosts={allPosts} searchedText={searchedText} searchedPosts={searchedPosts} setSearchedPosts={setSearchedPosts} searchedTextHero={searchedTextHero} setSearchedTextHero={setSearchedTextHero} />} />
          {/* Account */}
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          {/* Post */}
          <Route path='/post' element={<PostLanding searchedText={searchedText} searchedPosts={searchedPosts} />} />
          <Route path='/post/:id' element={<PostView searchedText={searchedText} searchedPosts={searchedPosts} />} />

          <Route path='/memo' element={<Memo />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
}
export default App;