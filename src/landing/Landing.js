import PostButton from "./PostButton";
import PostLists from './PostLists';
import SearchedPosts from "../components/SearchedPosts";

const Landing = ({allPosts, searchedText, searchedPosts}) => {
  return (
    <div>
      {searchedText === '' && <PostLists allPosts={allPosts} /> }
      {searchedText && <SearchedPosts searchedPosts={searchedPosts} />}
    </div>
  );
}
export default Landing;