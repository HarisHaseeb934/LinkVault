import { Outlet } from 'react-router-dom'
import Siderbar from './Siderbar'

const AppLayout = () => {
  return (
    <div className='flex flex-col lg:flex-row divide-x divide-y divide-outline-variant'>
        <Siderbar/>
        <Outlet/>
    </div>
  )
}

export default AppLayout