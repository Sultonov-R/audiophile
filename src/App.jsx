// App.js
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Headphones from "./pages/headphones";
import Speakers from "./pages/speakers";
import Earphones from "./pages/earphones";
import ProductsDetails from "./pages/productsDetails";
import Checkout from "./pages/checkout";
import ErrorPage from "./pages/error";
import Login from "./pages/login";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase";
import { ProtectedRoute } from "./components/protectedRoute";
import { Private } from "./pages/private";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const currentURL = window.location.href;

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //     children: [
  //       {
  //         path: "team",
  //         element: <Team />,
  //         loader: teamLoader,
  //       },
  //     ],
  //   },
  // ])

  function ProtectedRoute({
    children,
    redirectTo = "/login",
    isAuthentication,
  }) {
    if (!isAuthentication) {
      navigate(redirectTo);
    }
    return children;
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
        return;
      }
      setUser(null);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return null;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login user={user} />} />

      <Route
        path="/"
        element={
          <ProtectedRoute isAuthentication={user ? true : false}>
            <Home></Home>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="/earphones" element={<Earphones></Earphones>}></Route>
      <Route path="/headphones" element={<Headphones></Headphones>}></Route>
      <Route path="/speakers" element={<Speakers></Speakers>}></Route>
      <Route path="/checkout" element={<Checkout></Checkout>}></Route>
      <Route
        path="/products/:id"
        element={<ProductsDetails></ProductsDetails>}
      ></Route>
       <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
    </Routes>
  );
}

export default App;
