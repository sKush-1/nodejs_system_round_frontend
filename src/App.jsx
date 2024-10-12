
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import { Toaster } from 'react-hot-toast';
import Login from './pages/Login';
import ForgotPassword from './components/ForgotPassword';
import ChangePassword from './components/ChangePassword';
import Profile from './pages/Profile';

function App() {

  const router = createBrowserRouter([

    {
      path:'/',
      element: <Navbar/>
    },

    {
      path: "users/profile",
      element: <Profile/>
    },
   
    {
      path:'/change-password/:token',
      element: <ChangePassword/>
    },

    {
      path: "/signup",
      element: <Register/>
    },

    {
      path: "/signin",
      element: <Login/>
    },

    {
      path: "/forgot-password",
      element: <ForgotPassword/>
    }

   

  ]);


  return (
    <>
    <div className="App">
      
     <RouterProvider router={router} />
     <Toaster/>
    </div>
    </>
  );
}

export default App;