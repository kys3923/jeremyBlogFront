import axios from 'axios';

export const submitHandler = (e, form, tag) => {
  e.preventDefault();
  let revisedForm = {
    title: form.title,
    article: form.article,
    tag: tag,
  }
  const requestToApi = async (data) => {
    let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/post/register`, data)
    if (request) {
      console.log(request.data)
      // TODO: setState
    }
  }
  requestToApi(revisedForm)
}

export const changeHandler = (e, func) => {
  func((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

export const tagChangeHandler = (e, func) => {
  func({tag: e.target.value});
}

export const addTagHandler = (e, text, func, prevArry) => {
  e.preventDefault();
  const duplicateValidator = () => {
    let duplicate = prevArry.find(tag => tag.tag === text.tag)
    if (!!duplicate) {
      return
    } else {
      func(prev => ([
        ...prev,
        text
      ]));
    }
  }
  duplicateValidator();
}

export const removeTagHandler = (e, text, func, prev) => {
  e.preventDefault();
  let prevState = prev;
  let selectedTag = prev.find(tag => tag.tag === text.tag);
  let filteredState = prevState.filter(tag => tag !== selectedTag)
  func(filteredState)
}