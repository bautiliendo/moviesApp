import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const Dashboard = () => {
    const {user} = useContext(UserContext)
  return (
    <div>
        <h1 className='white'>Dashboard</h1>
        {!!user && (<h2 className='white'>Hi {user.name}!</h2>) }
    </div>
  )
}
