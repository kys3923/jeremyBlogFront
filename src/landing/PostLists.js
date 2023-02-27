import { dateFormatter } from '../components/Formatters';
import { ListClickHandler } from './Handlers';
import { useNavigate } from 'react-router-dom';

const PostLists = ({allPosts}) => {

  const navigate = useNavigate();

  return (
    <section>
      {!!allPosts && allPosts.map((post) => {
        return <div
          key={post._id}
          onClick={(e) => ListClickHandler(e, post._id, allPosts, navigate)}
          className='mb-2 p-4 bg-indigo-400 text-white hover:bg-indigo-600'
        >
          <h3 className='font-bold text-lg'>{post.title}</h3>
          <p className='text-xs'>{dateFormatter(post.createdAt)}</p>

          {post.tags.length > 0 && <div className='flex mt-1'>
            {post.tags.map((tag) => {
            return <div key={tag._id} className='px-2 py-1 rounded-full bg-white text-indigo-600 text-xs mr-1'>
              {tag.tag}
            </div>
            })}
          </div>
          }
        </div>
      })}
    </section>
  );
}
export default PostLists;