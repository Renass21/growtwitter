import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';


export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        children: [
            {
                path: "/login",
                element: <Login />
            }  
    ]}
])