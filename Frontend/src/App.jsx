import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AppLayout from './layout/AppLayout';
import Dashboard from './pages/Dashboard';
import Settings from './pages/Settings';

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/settings',
        element: <Settings/>
      }
    ]
  }
])

const App = () => {
  return <RouterProvider router={router}/>;
};

export default App;
