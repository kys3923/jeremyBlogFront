import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export const RegisterAccountChangeHandler = (e, func) => {
  func((prev) => ({
    ...prev,
    [e.target.name]: e.target.value
  }))
}

export const RegisterAccountSubmit = (e, data) => {
  e.preventDefault();
  
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
    let navigate = useNavigate();
    if(validator(data)) {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, data)

      if(!!response.data.success) {
        console.log(response.data, 'received')
        // sessionStorage.setItem('authToken', response.data.token)
        // sessionStorage.setItem('userId', response.data.user._id)
        // sessionStorage.setItem('role', response.data.role)
      }
    }
  }

  RegisterToApi(data)
}