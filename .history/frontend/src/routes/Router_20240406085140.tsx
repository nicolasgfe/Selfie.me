import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
