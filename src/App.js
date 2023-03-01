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
import DashboardLanding from './dashboard/DashboardLanding';

const App = (props) => {

  const [ allPosts, setAllPosts ] = useState([]);
  const [ searchedText, setSearchedText ] = useState('');
  const [ searchedPosts, setSearchedPosts] = useState([]);
  const [ searchedTextHero, setSearchedTextHero ] = useState('');
  const [ authUser, setAuthUser ] = useState('');

  useEffect(() => {
    let isMounted = true;

    const getAllPost = async () => {
      const request = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/getAllPosts`)
      if(request.data.status) {
        setAllPosts(request.data.posts)
      }
    }

    // const setUser = () => {
    //   if (adminUser === 'user') {
    //     setAuthUser('user')
    //   }
    //   if (adminUser === 'admin') {
    //     setAuthUser('admin')
    //   }
    // }

    getAllPost();
    return () => {
      isMounted = false;
    }
  },[])
  return (
    <>
    {console.log(allPosts)}
      <Router>
        <div className="mx-auto" >
          <div className="relative h-screen isolate overflow-hidden bg-gray-900 px-6 shadow-2xl sm:px-24 flex flex-col items-center flex-nowrap">

            {/* Routes */}
            <Header searchedText={searchedText} setSearchedText={setSearchedText} allPosts={allPosts} setSearchedPosts={setSearchedPosts} />
            <Routes>
              <Route path='/' element={<Landing allPosts={allPosts} searchedText={searchedText} searchedPosts={searchedPosts} setSearchedPosts={setSearchedPosts} searchedTextHero={searchedTextHero} setSearchedTextHero={setSearchedTextHero} />} />
              {/* Account */}
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              {/* Post */}
              <Route path='/post' element={<PostLanding searchedText={searchedText} searchedPosts={searchedPosts} />} />
              <Route path='/post/:id' element={<PostView searchedText={searchedText} searchedPosts={searchedPosts} />} />
              {/* Dashboard */}

              <Route path='/dashboard' element={<DashboardLanding />} />
              <Route path='/memo' element={<Memo />} />

            </Routes>
            <Footer />

            <svg
              viewBox="0 0 1024 1024"
              className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient
                  id="759c1415-0410-454c-8f7c-9a820de03641"
                  cx={0}
                  cy={0}
                  r={1}
                  gradientUnits="userSpaceOnUse"
                  gradientTransform="translate(512 512) rotate(90) scale(512)"
                >
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
                </radialGradient>
              </defs>
            </svg>

          </div>

        </div>
      </Router>
    </>
  );
}
export default App;