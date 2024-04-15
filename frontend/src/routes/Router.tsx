import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/home";
import Product from "../pages/product/product";
import Login from "../pages/login";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )
}
