import moment from 'moment';
import axios from 'axios';

export const ListClickHandler = (e, id, data, navigate) => {
  e.preventDefault();
  let selectedPost = data.find(post => post._id === id)
  navigate(`/post/${id}`, {state: selectedPost})
}

export const DateFormatter = (string) => {
  let formattedDate = moment(string).format('LLL')
  return formattedDate
}

export const commentChangeHandler = (e, func) => {
  func((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

export const commentSubmitHandler = (e, state, postId) => {
  e.preventDefault();
  let requestData = {
    name: state.name,
    email: state.email,
    comment: state.comment,
    id: postId,
  }
  const request = async (data) => {
    let commentRequest = await axios.post(`${process.env.REACT_APP_SERVER_URL}/comment/register`, data)
    console.log(commentRequest);
  }
  request(requestData)
}