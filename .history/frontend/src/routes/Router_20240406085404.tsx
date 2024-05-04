import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Routes } from "react-router-dom";
import App from '../App';

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
