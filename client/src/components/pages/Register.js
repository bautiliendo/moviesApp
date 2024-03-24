import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

export const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const registerUser = async (e) => {
    e.preventDefault();
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })
      if(data.error) {
        toast.error(data.error)
      } else {
        setData({})
        toast.success('Register succesful')
        navigate('/login')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  return (
    <div className='container'>
      <div className='form'>
      <h1>Sign up</h1>
      <h4>Already have an account ? <Link to="/login">Log in</Link></h4>
      <form onSubmit={registerUser}>
        <div>
          <label>Name</label>
          <input type='text' placeholder='enter name...' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
        </div>
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
