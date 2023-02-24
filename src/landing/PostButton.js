import { SimpleSubmitButton } from "../components/Buttons";

const PostButton = (props) => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log('clicked')
  }

  return (
    <form onSubmit={submitHandler} className="w-full h-60 bg-blue-200 flex flex-col justify-center items-center">
      <h1>This is button click section</h1>
      {SimpleSubmitButton('Post')}
    </form>
  );
}
export default PostButton;