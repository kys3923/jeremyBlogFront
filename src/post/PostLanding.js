import { useState } from 'react';
import SearchedPosts from '../components/SearchedPosts';
import PostFrom from './PostForm';
import PostPreview from './PostPreview';


const PostLanding = ({searchedText, searchedPosts}) => {

  const [ submitForm, setSubmitForm ] = useState({
    title: '',
    article: '',
    category: '',
    subCategory: '',
  });
  const [ tags, setTags ] = useState({
    tag: '',
  });
  const [ addedTags, setAddedTags ] = useState([]);

  return (
    <section>
      { searchedText !== '' ? <SearchedPosts searchedPosts={searchedPosts} /> :
        <div className='grid grid-cols-2'>
          {/* LEFT SIDE */}
          <PostFrom submitForm={submitForm} setSubmitForm={setSubmitForm} tags={tags} setTags={setTags} addedTags={addedTags} setAddedTags={setAddedTags} />
          {/* RIGHT SIDE */}
          <PostPreview submitForm={submitForm} />
        </div>
      }
    </section>
  );
}
export default PostLanding;