import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import axios from 'axios';

const PostLanding = (props) => {

  const [ submitForm, setSubmitForm ] = useState({
    title: '',
    article: '',
  });
  const [ tags, setTags ] = useState([]);

  const { title, article } = submitForm;

  const submitHandler = (e) => {
    e.preventDefault();
    const requestToApi = async (data) => {
      let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/post/register`, data)
      if (request) {
        console.log(request.data)
      }
    }
    requestToApi(submitForm)
  }

  const changeHandler = (e) => {
    setSubmitForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className='grid grid-cols-2'>
      <h1 className='col-span-2 text-center font-bold text-red-700 text-lg m-2'>Please post something to share in markdown format</h1>
      {/* LEFT SIDE */}
      <form 
        onSubmit={submitHandler}
        className='flex flex-col items-start w-full bg-blue-400 p-4 h-screen'
      >
        <h1></h1>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title'
          className='border border-slate-500 rounded-sm w-full p-2'
          onChange={changeHandler}
          value={title}
        />
        <label htmlFor='article'>Article</label>
        <textarea name='article' 
          className='border border-slate-500 rounded-sm w-full p-2 h-4/6 overflow-auto'
          onChange={changeHandler}
          value={article}
        />
        <button
          className='px-4 py-2 border border-blue-700 test-white rounded-md'
        >
          Post Article
        </button>
      </form>
      {/* RIGHT SIDE */}
      <div className='w-full bg-slate-200 p-4'>
        <p>Preview</p>
        <div className='bg-white w-full rounded-sm'>
          <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          className='p-8 prose prose-indigo' 
          >{article}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}
export default PostLanding;

const filter = ({ value, language }) => {
  return (
    <SyntaxHighlighter language={language ?? null} style={docco}>
      {value ?? ''}
    </SyntaxHighlighter>
  )
}