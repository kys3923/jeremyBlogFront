import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  let { email, password } = formData;

  let navigate = useNavigate();

  const changeHandler = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const loginButtonHandler = async (e) => {
    e.preventDefault();

    if(email === '' || password === '') {
      return 
    }

    let request = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, formData)

    if(!!request.data.success) {
      sessionStorage.setItem('authToken', request.data.token)
      sessionStorage.setItem('userId', request.data.user._id)
      sessionStorage.setItem('role', request.data.user.role)
      // navigate('/dashboard')
      navigate('/dashboard')
    }
  }

  useEffect(() => {
    if (!!sessionStorage.authToken) {
      navigate('/dashboard')
    }
  },[]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="m-auto flex flex-col items-center pb-12">
      <div className="w-full md:w-11/12 flex flex-col md:items-center">
        <div className="w-full flex flex-col items-center pb-4">
          <p><span className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tighte sm:text-4xl text-gray-300">Login</span></p>
        </div>
        <div className="pt-4 mb-4 w-96">
        <form onSubmit={loginButtonHandler} className='flex flex-col'>
          <label htmlFor='email' className='mb-2 text-gray-300'>
            email
          </label>
          <input type='email' name='email' onChange={changeHandler} className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mb-2'/>
          <label htmlFor='password' className='mb-2  text-gray-300'>
            password
          </label>
          <input type='password' name='password' onChange={changeHandler} className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mb-2' />
          <label htmlFor='password' className='mb-2  text-gray-300'>
            Confirm password
          </label>
          <input type='password' name='confirmPassword' onChange={changeHandler} className='min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 mb-2' />
          <button type='submit' className="truncate px-4 py-2 w-full bg-indigo-900 text-gray-300 rounded-md hover:bg-indigo-700 mt-6">login</button>
        </form>
        </div>
      </div>
    </section>
  );
}
export default Login;