import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const [data, setData] = useState({
    email: '',
    password: '',
  })

  const LoginUser = async (e) => {
    e.preventDefault();
    const {email, password} = data
    try {
      const {data} = await axios.post('/login', {
        email,
        password,
      });
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Login succesful. Welcome! ')
        navigate('/dashboard')
      }
    } catch (error) {
      
    }
  }

  return (
    <div className='container'>
      <div className='form'>
    

        <h1>Login </h1>
        <h4>Do not have an account? <Link to="/register">Sign up</Link></h4>
        <form onSubmit={LoginUser}>
          <div>
            <label>Email</label>
            <input type='email' placeholder='enter email...' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
          </div>
          <div>
            <label>Password</label>
            <input type='password' placeholder='enter password...' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
          </div>
          <button type='submit' className='button'>Submit</button>
        </form> 
      </div>  
      </div>
  )
}
