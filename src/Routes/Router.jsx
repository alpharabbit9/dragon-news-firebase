import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../Layouts/HomeLayout';
import CategoryNews from '../Pages/CategoryNews';
import AuthLayout from '../Layouts/AuthLayout';
import Login from '../Components/Login';
import Register from '../Components/Register';
import NewDetails from '../Pages/NewDetails';
import PrivateRoute from './PrivateRoute';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'} replace />
            },
            {
                path: 'category/:id',
                element: <CategoryNews />,
                loader: async ({ params }) => {
                    const response = await fetch(
                        `https://openapi.programming-hero.com/api/news/category/${params.id}`
                    );
                    if (!response.ok) {
                        throw new Error('Failed to load data');
                    }
                    return response.json(); // Return the parsed data
                }
            }
        ]
    },
    {
        path: '/news/:id',
        element: <PrivateRoute>
            <NewDetails></NewDetails>
        </PrivateRoute>,
        loader: async ({ params }) => {
            const response = await fetch(
                `https://openapi.programming-hero.com/api/news/${params.id}`
            );
            if (!response.ok) {
                throw new Error('Failed to load data');
            }
            return response.json();
        }
        
    },
    {
        path: '/auth',
        element: <AuthLayout></AuthLayout>,
        children:[
            {
                path:'/auth/login',
                element:<Login></Login>
            },
            {
                path:'/auth/register',
                element:<Register></Register>
            }
        ]
    },
    {
        path: '*',
        element: <h1>Error: Page Not Found</h1>
    }
]);

export default Router;
