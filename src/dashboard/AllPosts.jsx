import { dateFormatter } from "../components/Formatters";

const AllPosts = ({allPosts}) => {
  return (
    <section>
      {allPosts && allPosts.map(post => {
        return <div key={post._id} className='mb-2'>
          <p className="text-2xl font-bold">{post.title}</p>
          <p className="text-xs">{dateFormatter(post.createdAt)}</p>
          <div className="flex">
            {post.tags.map(tag => {
              return <p key={tag._id}>{tag.tag}</p>
            })}
          </div>
        </div>
      })}
    </section>
  );
}
export default AllPosts;