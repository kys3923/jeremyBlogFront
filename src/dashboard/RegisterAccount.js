import { useState } from "react";
import { RegisterAccountChangeHandler, RegisterAccountSubmit } from "./Handlers";

const RegisterAccount = (props) => {

  const [ formData, setFormData ] = useState({
    email: '',
    password: '',
    username: '',
    role: '',
  });

  let { email, password, username, role } = formData;

  return (
    <section className="bg-indigo-100">
      <p>RegisterAccount</p>

      <form className="flex flex-col" onSubmit={(e) => RegisterAccountSubmit(e, formData)}>
        <label htmlFor="username">
          Username
        </label>
        <input 
          type='text' name='username' 
          value={username} 
          onChange={(e) => RegisterAccountChangeHandler(e, setFormData)} 
          className='bg-indigo-100 px-3.5 py-2 text-gray-800 shadow-sm text-sm leading-6 mb-2 border-gray-300'
        />
        {username}

        <label htmlFor="email">
          Email
        </label>
        <input 
          type='email' name='email' 
          value={email} 
          onChange={(e) => RegisterAccountChangeHandler(e, setFormData)} 
          className='bg-indigo-100 px-3.5 py-2 text-gray-800 shadow-sm text-sm leading-6 mb-2 border-gray-300'
        />
        {email}
        <label htmlFor="username">
          Password
        </label>
        <input 
          type='password' name='password' 
          value={password} 
          onChange={(e) => RegisterAccountChangeHandler(e, setFormData)} 
          className='bg-indigo-100 px-3.5 py-2 text-gray-800 shadow-sm text-sm leading-6 mb-2 border-gray-300'
        />
        {password}
        <label htmlFor='role'>
          Role
        </label>
        <select onChange={(e) => RegisterAccountChangeHandler(e, setFormData)} name='role'>
          <option value='' className="hidden">select role</option>
          <option value='employee'>employee</option>
          <option value='admin'>admin</option>
        </select>
        {role}
        <button type='submit'>Register</button>
      </form>
    </section>
  );
}
export default RegisterAccount;