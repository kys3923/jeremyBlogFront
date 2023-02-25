import { dateFormatter } from "./Formatters";

const SearchedPosts = ({searchedPosts}) => {

  const listClickHandler = (e, id) => {
    e.preventDefault();
    console.log(id)
  }
  
  return (
    <section>
      {searchedPosts.length > 0 ? searchedPosts.map((post) => {
        return <div
          key={post._id}
          onClick={(e) => listClickHandler(e, post._id)}
          className='mb-2 p-4 bg-indigo-400 text-white hover:bg-indigo-600'
        >
          <h3 className='font-bold text-lg'>{post.title}</h3>
          <p className='text-xs'>{dateFormatter(post.createdAt)}</p>
        </div>
      })
      :
      <div>
        <p>opps! there is no posts with the keywords searched.</p>
      </div>
      }
    </section>
  );
}
export default SearchedPosts;