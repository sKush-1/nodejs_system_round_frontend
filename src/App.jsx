
import { createBrowserRouter } from 'react-router-dom';
import ChangePassword from './ChangePassword';
import { RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
   
    {
      path:'/change-password/:token',
      element: <ChangePassword></ChangePassword>
    },

   

  ]);


  return (
    <>
    <div className="App">
      
     <RouterProvider router={router} />
    </div>
    </>
  );
}

export default App;