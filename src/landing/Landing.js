import PostButton from "./PostButton";
import PostLists from './PostLists';
import SearchedPosts from "../components/SearchedPosts";
import Hero from "./Hero";

const Landing = ({allPosts, searchedText, searchedPosts, searchedTextHero, setSearchedTextHero}) => {
  return (
    <div>
      <Hero searchedTextHero={searchedTextHero} setSearchedTextHero={setSearchedTextHero} />
      <section className='flex flex-nowrap gap-4'>
        {/* leftSide 2/3 */}
        
        <div className='w-full'>
          {searchedText === '' && <PostLists allPosts={allPosts} /> }
        </div>
        {/* rightSide 1/3 */}
        <div className='bg-white w-60'>
          <p className='text-slate-700'>temp</p>
        </div>
      </section>
      {searchedText && <SearchedPosts searchedPosts={searchedPosts} />}
    </div>
  );
}
export default Landing;