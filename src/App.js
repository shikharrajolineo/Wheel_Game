import "./App.css";
import StepOne from "./Component/StepOne";
import StepTwo from "./Component/StepTwo";
import StepThree from "./Component/StepThree";
import Start from "./Component/Start";
import Game from "./Component/Game";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { StoreProvider } from "./context/store";
import ProtectedRoute from "./middleware/ProtectedNavigation";
import { Toaster } from "react-hot-toast";
import Prize from "./Component/Prize";
import Fith from "./Component/Fith";
import Six from "./Component/Six";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Start />,
    },
    {
      path: "/1",
      element: <StepOne />,
    },
    {
      path: "/2",
      element: (
        <ProtectedRoute>
          <StepTwo />
        </ProtectedRoute>
      ),
    },

    {
      path: "/3",
      element: (
        <ProtectedRoute>
          <StepThree />
        </ProtectedRoute>
      ),
    },

    {
      path: "/fifth",
      element: <ProtectedRoute><Fith /></ProtectedRoute>,
    },
   
    {
      path: "/game",
      element: (
        // <ProtectedRoute>
          <Game />
        //  {/* </ProtectedRoute> */}
      ),
    },
    {
      path: "/prize",
      element: <ProtectedRoute><Prize /></ProtectedRoute>,
    },
  ]);
  return (
    <>
      <StoreProvider>
        <Toaster />
        <RouterProvider router={router} />
      </StoreProvider>
    </>
  );
}

export default App;
