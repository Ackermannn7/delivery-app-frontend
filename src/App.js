import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./scss/app.scss";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FullProduct } from "./pages/FullProduct";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, selectIsAuth } from "./redux/slices/authorization";
import Cart from "./pages/Cart";
function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<FullProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
