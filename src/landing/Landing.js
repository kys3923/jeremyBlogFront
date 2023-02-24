import PostButton from "./PostButton";
import PostLists from './PostLists';

const Landing = ({allPosts}) => {
  return (
    <div>
      <p>Landing Component</p>
      <PostLists allPosts={allPosts} />
    </div>
  );
}
export default Landing;