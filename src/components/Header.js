import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import HorizontalHeader from './HorizontalHeader';
import VerticalHeader from './VerticalHeader';
import { headerStyleDistributor } from './Formatters';

const Header = ({ searchedText, setSearchedText, allPosts, setSearchedPosts, authUser, setAuthUser, setCurrentLocation, isHorizontal, setIsHorizontal }) => {

  const [ showSearch, setShowSearch ] = useState(false);

  const location = useLocation();

  const searchHandler = (e) => {

    let filteredPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchedText.toLowerCase())
    })
    setSearchedText(e.target.value);
    setSearchedPosts(filteredPosts)
  }

  useEffect(() => {
    setCurrentLocation(location.pathname)
    if(location.pathname === '/' || location.pathname === '/login') {
      setIsHorizontal(true);
    } else {
      setIsHorizontal(false);
    }
  },[location.pathname])

  return (
    <div className={headerStyleDistributor(isHorizontal)}>
      {!!isHorizontal ? <HorizontalHeader /> : <VerticalHeader allPosts={allPosts} />}
      {/* { showSearch &&
        <div className="relateive flex bg-white items-center rounded-lg px-2">
          <div>
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input type='search' value={searchedText} onChange={searchHandler} className='flex items-center px-2 py-2 text-sm text-slate-600 focus:outline-none' placeholder="Search Keywords"/>
        </div>
      } */}
    </div>
  );
}
export default Header;