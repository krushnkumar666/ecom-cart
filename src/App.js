import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Women from "./pages/Women";
import Men from "./pages/Men";
import Kids from "./pages/Kids";
import Profile from "./pages/profile";
import Wishlist from "./pages/Wishlist";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="overflow-hidden">
      <Router>
        <Header onSearch={setSearchTerm} />
        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/women" element={<Women />} />
          <Route path="/men" element={<Men />} />
          <Route path="/kid" element={<Kids />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
