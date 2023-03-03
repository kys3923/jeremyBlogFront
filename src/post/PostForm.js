import { submitHandler, changeHandler, tagChangeHandler, addTagHandler, removeTagHandler } from './Handlers';
import { MdRemoveCircleOutline } from "react-icons/md";

const PostForm = ({submitForm, setSubmitForm, tags, setTags, addedTags, setAddedTags}) => {
  
  const { title, article, category, subCategory } = submitForm;

  const { tag } = tags;

  return (
    <form 
    onSubmit={(e) => submitHandler(e, submitForm, addedTags)}
    className='flex flex-col items-start w-full bg-blue-400 p-4 h-screen'
    >
      <label htmlFor='title'>Title</label>
      <input type='text' name='title'
        className='border border-slate-500 rounded-sm w-full px-2 py-1'
        onChange={(e) => changeHandler(e, setSubmitForm)}
        value={title}
      />
      <label htmlFor='title'>Category</label>
      <input type='text' name='category'
        className='border border-slate-500 rounded-sm w-full px-2 py-1'
        onChange={(e) => changeHandler(e, setSubmitForm)}
        value={category}
      />
      <label htmlFor='title'>Sub Category</label>
      <input type='text' name='subCategory'
        className='border border-slate-500 rounded-sm w-full px-2 py-1'
        onChange={(e) => changeHandler(e, setSubmitForm)}
        value={subCategory}
      />
      <label htmlFor='tags' className='flex items-center truncate'>
        Tags
      </label>
      <div className='flex flex-nowrap w-full'>
        <input type='text' name='tags' 
          className='border border-slate-500 rounded-sm w-full px-2 py-1'
          onChange={(e) => tagChangeHandler(e, setTags)}
          value={tags.tag}
        />
        <button className='bg-white text-slate-700 px-4 py-1 ml-2 rounded-sm' onClick={(e) => addTagHandler(e, tags, setAddedTags, addedTags)}>add</button>
      </div>
      <div className='w-full flex '>
        {addedTags.length > 0 && addedTags.map((tag, i) => {
            return <div
              key={i}
              className='m-1 flex items-center px-3 py-1 rounded-full bg-white text-xs'
            >
              <p>{tag.tag}</p>
              <p className='text-red-800 hover:text-red-300 hover:cursor-pointer ml-1' onClick={(e) => removeTagHandler(e, tag, setAddedTags, addedTags)}><MdRemoveCircleOutline /></p>
            </div>
          })}
      </div>
      <label htmlFor='article'>Article</label>
      <textarea name='article' 
        className='border border-slate-500 rounded-sm w-full p-2 h-4/6 overflow-auto'
        onChange={(e) => changeHandler(e, setSubmitForm)}
        placeholder='post something to share in markdown format only.'
        value={article}
      />
      <button
        className='px-4 py-2 border border-blue-700 test-white rounded-md'
      >
        Post Article
      </button>
    </form>
  );
}
export default PostForm;