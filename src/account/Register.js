import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = (props) => {
  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    username: '',
    address: '',
    contact: '',
  })

  let navigate = useNavigate();

  let { email, password, username, address, contact } = formData;

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const registerButtonHandler = (e) => {
    e.preventDefault();
    console.log('button clicked')

    // validate
    const validator = (username, email, password) => {
      if (username === '' || email === '' || password === '') {
        return false
      } else {
        return true
      }
    }

    // sending data
    const registerToApi = async (data) => {
      if(validator(username, email, password)) {
        const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/register`, data)

        if(!!response.data.success) {
          sessionStorage.setItem('authToken', response.data.token)
          sessionStorage.setItem('userId', response.data.user._id)
          navigate('/')
        }

        console.log(response)
      }
    }

    registerToApi(formData)
  }

  useEffect(() => {
   if(!!sessionStorage.authToken) {
    navigate('/')
   }
  },[])

  return (

    <section className="flex flex-col items-center p-10">
      <div className="border-2 shadow-md rounded-md w-11/12 md:w-2/3 border-gray-200 px-8 py-10 flex flex-col md:items-center">
        <div className="w-full flex flex-col items-center pb-4 border-b border-gray-200">
          <p className="mt-4"><span className="text-blue-800 font-bold">Register</span></p>
        </div>
        <div className="pt-4 mb-4 md:w-72 lg:w-96">
        <form onSubmit={registerButtonHandler} className='flex flex-col'>
          <label htmlFor='email' className='mb-2'>
            email
          </label>
          <input type='email' name='email' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2'/>
          <label htmlFor='password' className='mb-2'>
            password
          </label>
          <input type='password' name='password' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
          <label htmlFor='password' className='mb-2'>
            username
          </label>
          <input type='text' name='username' onChange={changeHandler} className='border px-4 py-2 border-gray-200 rounded-md mb-2' />
          <button type='submit' className="truncate px-4 py-2 w-full bg-blue-800 text-white rounded-md hover:bg-blue-900 mt-4">login</button>
        </form>
        </div>
      </div>
    </section>
  );
}
export default Register;