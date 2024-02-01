import { createBrowserRouter } from 'react-router-dom';
import { Login } from '../pages/Login';
import { Home } from '../pages/Home';
import App from '../App';

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            }  
    ]}
])