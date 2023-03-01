import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Header = ({searchedText, setSearchedText, allPosts, setSearchedPosts}) => {

  const location = useLocation();
  let currentRoute = location.pathname

  const searchHandler = (e) => {

    let filteredPosts = allPosts.filter((post) => {
      return post.title.toLowerCase().includes(searchedText.toLowerCase())
    })
    setSearchedText(e.target.value);
    setSearchedPosts(filteredPosts)
  }

  const [ showSearch, setShowSearch ] = useState(false);

  useEffect(() => {
    return () => {
      console.log(currentRoute, 'at header')
    }
  },[currentRoute])


  return (
    <nav className="w-full py-4 text-white flex items-center justify-center md:justify-between">
      {/* Landing Header */}
      <div>
        <a href="/">YK Codes</a>
      </div>
      <ul className="flex flex-row gap-4">
        <li><a href="memo">memo</a></li>
        <li><a href="login">login</a></li>
        <li><a href="post">post</a></li>
        <li><a href="dashboard">dashboard</a></li>
      </ul>
      { showSearch &&
        <div className="relateive flex bg-white items-center rounded-lg px-2">
          <div>
            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
          </div>
          <input type='search' value={searchedText} onChange={searchHandler} className='flex items-center px-2 py-2 text-sm text-slate-600 focus:outline-none' placeholder="Search Keywords"/>
        </div>
      }
    </nav>
  );
}
export default Header;