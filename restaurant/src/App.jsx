import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState } from "react";
import Login from "./components/Login/Login";
import "./App.css";
function App() {
  const [showLogin, setShowLogin] = useState(false);
  return (
    <>
      {showLogin && <Login setShowLogin={setShowLogin} />}
      <div className={`app ${showLogin ? "no-scroll" : ""}`}>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <div className={`app ${showLogin ? "hidden" : ""}`}>
        <Footer />
      </div>
    </>
  );
}

export default App;
