import AllPosts from "./AllPosts";
import SearchedPosts from "./SearchedPosts";

const DashboardLanding = ({allPosts}) => {
  return (
    <section className="text-white">
      <p >Landing</p>
      {/* show all post */}
      <AllPosts allPosts={allPosts} />
    </section>
  );
}
export default DashboardLanding;