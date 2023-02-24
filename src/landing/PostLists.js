import { useState, useEffect } from 'react';
import moment from 'moment'; 

const PostLists = ({allPosts}) => {

  const listClickHandler = (e, id) => {
    e.preventDefault();
    console.log(id)
  }

  const dateFormatter = (string) => {
    return moment(string).format('LLL')
  }

  return (
    <section>
      {!!allPosts && allPosts.map((post) => {
        return <div
          key={post._id}
          onClick={(e) => listClickHandler(e, post._id)}
          className='mb-2 p-4 bg-indigo-400 text-white hover:bg-indigo-600'
        >
          <h3 className='font-bold text-lg'>{post.title}</h3>
          <p className='text-xs'>{dateFormatter(post.createdAt)}</p>
        </div>
      })}
    </section>
  );
}
export default PostLists;