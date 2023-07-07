import {createBrowserRouter} from 'react-router-dom'
import Home from '../page/Home'
import App from '../App';
import Login from '../page/Login';
import Notfound from '../page/Notfound';

const routes = createBrowserRouter([
    {
     path: "/",
     element :<App/>,
    },
    {
     path: "/login",
     element :<Login/>,
    },
    {
      path: "*",
      element :<Notfound/>,
       },
])

export default routes;