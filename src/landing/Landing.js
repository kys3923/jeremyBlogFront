import PostButton from "./PostButton";
import PostLists from './PostLists';
import SearchedPosts from "../components/SearchedPosts";
import Hero from "./Hero";

import { useState } from 'react';

const Landing = ({allPosts, searchedText, searchedPosts, searchedTextHero, setSearchedTextHero}) => {

  const [ searchedValue, setSearchedValue ] = useState('');

  return (
    <div className="mx-auto my-auto">
      {/* <Hero searchedTextHero={searchedTextHero} setSearchedTextHero={setSearchedTextHero} /> */}
      <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Search Guides for your codes.
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
          Find company guides, pre-coded components, and more.
        </p>
        <form className="mx-auto mt-10 flex max-w-md gap-x-4">
          <label htmlFor="search" className="sr-only">
            Search Category
          </label>
          <input
            id="email-address"
            name="search"
            type="text"
            className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
            placeholder="Search Here..."
          />
          <p className="text-white">{searchedValue}</p>
          <button
            type="submit"
            className="flex-none rounded-md bg-indigo-900 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Search
          </button>
        </form>
      {/* <section className='flex flex-nowrap gap-4'>
        
        <div className='w-full'>
          {searchedText === '' && <PostLists allPosts={allPosts} /> }
        </div>
        <div className='bg-white w-60'>
          <p className='text-slate-700'>temp</p>
        </div>
      </section> */}
      {/* {searchedText && <SearchedPosts searchedPosts={searchedPosts} />} */}
    </div>
  );
}
export default Landing;