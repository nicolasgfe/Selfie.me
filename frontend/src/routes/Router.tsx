import { Route, Routes } from "react-router-dom";
import { Home, Login, Product } from "../pages";
import Liked from "../pages/liked/liked";
import { YourCount } from "../pages/YourCount";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product" element={<Product />} />
      <Route path="/login" element={<Login />} />
      <Route path="/liked" element={<Liked />} />
      <Route path="/YourCount" element={<YourCount />} />
    </Routes>
  )
}
