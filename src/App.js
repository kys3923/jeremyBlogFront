import * as React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { FirstStyleDistributor, SecondStyleDistributor } from './AppHandlers';

// components
import Header from './components/Header';
import Footer from './components/Footer';
import EmployeeHeader from './components/EmployeeHeader';

// pages - account
import Login from './account/Login';
import Register from './account/Register';

// pages
import Landing from "./landing/Landing";
import PostLanding from './post/PostLanding';
import PostView from './landing/PostView';
import DashboardLanding from './dashboard/DashboardLanding';

const App = (props) => {

  const [ allPosts, setAllPosts ] = useState([]);
  const [ searchedText, setSearchedText ] = useState('');
  const [ searchedPosts, setSearchedPosts] = useState([]);
  const [ searchedTextHero, setSearchedTextHero ] = useState('');
  const [ authUser, setAuthUser ] = useState('');
  const [ currentLocation, setCurrentLocation ] = useState();
  const [ isHorizontal, setIsHorizontal ] = useState(true);

  // set Auth
  useEffect(() => {

    let isLoading = true;
    
    if(sessionStorage.authToken && isLoading) {
      const setUser = (adminUser) => {
        if (adminUser.role === 'employee') {
          setAuthUser('employee')
        }
        if (adminUser.role === 'admin') {
          setAuthUser('admin')
        }
      }
      setUser(sessionStorage)
    }
    
    return () => {
      isLoading = false;
    }

  },[sessionStorage])

  // GET POSTS
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

  // Custom User Route
  const AdminRoute = () => {
    if(sessionStorage.role === 'admin') {
      return <Outlet />
    } else {
      return <Navigate to='/login' />
    }
  }

  const EmployeeRoute = () => {
    if(sessionStorage.role === 'employee' || sessionStorage.role === 'admin') {
      return <div className='flex flex-col w-full'>
        <EmployeeHeader />
        <Outlet />
      </div>
    } else {
      return <Navigate to='/login' />
    }
  }

  return (
    <>
    {console.log(allPosts, authUser)}
      <Router>
        <div className={FirstStyleDistributor(currentLocation)} >
          <div className={SecondStyleDistributor(currentLocation)}>
            <Header searchedText={searchedText} setSearchedText={setSearchedText} allPosts={allPosts} setSearchedPosts={setSearchedPosts} authUser={authUser} setAuthUser={setAuthUser} setCurrentLocation={setCurrentLocation} isHorizontal={isHorizontal} setIsHorizontal={setIsHorizontal}/>

            <Routes>
              {/* Public Route */}
              <Route path='/' element={<Landing allPosts={allPosts} searchedText={searchedText} searchedPosts={searchedPosts} setSearchedPosts={setSearchedPosts} searchedTextHero={searchedTextHero} setSearchedTextHero={setSearchedTextHero} />} />
              <Route path='/login' element={<Login />} />

              {/* Employee Route */}

              <Route element={<EmployeeRoute />}>
                {/* Post */}
                <Route path='/post' element={<PostLanding searchedText={searchedText} searchedPosts={searchedPosts} />} />
                <Route path='/post/:id' element={<PostView searchedText={searchedText} searchedPosts={searchedPosts} />} />
                {/* Dashboard */}
                <Route path='/dashboard' element={<DashboardLanding allPosts={allPosts} />} />
              </Route>


              {/* Admin Route */}

              <Route element={<AdminRoute />}>
                {/* Account */}
                <Route path='/register' element={<Register />} />
              </Route>


            </Routes>
            <Footer />

            {currentLocation === '/' || currentLocation === '/login' ?
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
              :
              null
            }

          </div>

        </div>
      </Router>
    </>
  );
}
export default App;