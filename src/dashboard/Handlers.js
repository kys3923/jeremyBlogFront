import axios from 'axios';

export const RegisterAccountChangeHandler = (e, func) => {
  func((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

export const RegisterAccountSubmit = async (e, state, func) => {
  e.preventDefault();

  let callSuccess = false;

  // validate
  const validator = (data) => {
    if(data.username === '' || data.email === '' || data.password === '' || data.role === '') {
      return false 
    } else {
      return true
    }
  }
  
  // API call
  const RegisterToApi = async (data) => {
    if(validator(data)) {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, data)
      
      if(!!response.data.success) {
        callSuccess = true
      }
    }
  }

  await RegisterToApi(state);
  
  if (callSuccess) {
    await func(`user has been created`)
    callSuccess = false
  }
}