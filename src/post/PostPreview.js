import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const PostPreview = ({submitForm}) => {

  const { article } = submitForm;
  
  return (
    <div className='w-full bg-slate-200 p-4'>
      <p>Preview</p>
      <div className='bg-white w-full rounded-sm'>
        <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className='p-8 prose prose-indigo' 
        >{article}</ReactMarkdown>
      </div>
    </div>
  );
}
export default PostPreview;