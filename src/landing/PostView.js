import { useLocation } from 'react-router-dom';
import { DateFormatter, commentChangeHandler, commentSubmitHandler } from './Handlers';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SearchedPosts from '../components/SearchedPosts';
import { useState } from 'react';

const PostView = ({searchedText, searchedPosts}) => {

  const [ commentSubmit, setCommentSubmit ] = useState({
    name: '',
    email: '',
    comment: '',
  })

  const location = useLocation();
  const { name, email, comment } = commentSubmit;

  return (
    <section>
      { searchedText !== '' ? <SearchedPosts searchedPosts={searchedPosts} /> :
        <div className='p-8'>
          <div className='mb-4'>
            <p className='text-3xl font-bold'>{location.state.title}</p>
            <p className='text-xs'>{DateFormatter(location.state.createdAt)}</p>
          </div>
          <div className='flex mb-4 border-b pb-4'>
            {location.state.tags.length > 0 &&
              <div className='flex items-center'>
                <p className='mr-2 text-slate-500 italic text-xs'>tags:</p>
                {location.state.tags.map((tag) => {
                  return <div 
                    key={tag._id}
                    className='flex px-4 py-1 bg-indigo-600 text-xs rounded-full text-white mr-2'
                  >
                    <p>{tag.tag}</p>
                  </div>
                })}
              </div>
            }
          </div>
          <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className='prose prose-indigo' 
          >
            {location.state.article}
          </ReactMarkdown>
          {/* TODO: needs to be full width below */}
          { location.state.comments.length > 0 &&
            <div>
              {location.state.comments.map((comment) => {
                return <div key={comment._id}>
                  {comment.comment}
                </div>
              })}
            </div>
          }
          <form onSubmit={(e) => commentSubmitHandler(e, commentSubmit, location.state._id)}>
            <div className='flex'>
              <input type='text' name='name' value={name} className='p-1 border rounded-md border-slate-500' onChange={(e) => commentChangeHandler(e, setCommentSubmit)} placeholder='name'/>
              <input type='email' name='email' value={email} className='p-1 border rounded-md border-slate-500' onChange={(e) => commentChangeHandler(e, setCommentSubmit)} placeholder='email' />
            </div>
            <div>
              <textarea name='comment' value={comment} className='p-1 border rounded-md border-slate-500' onChange={(e) => commentChangeHandler(e, setCommentSubmit)} placeholder='comment here ...' />
            </div>
            <button type='submit' className='px-4 py-2 rounded-md bg-indigo-600 text-white'>Comment</button>
          </form>
        </div>
      }
    </section>
  );
}
export default PostView;