import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HandsOn from './pages/HandsOn';
import OCHacks from './pages/OCHacks';

import "./index.css";

export default function App() {
  return (
    <div>
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/handsOn" element={<HandsOn />}/>
                <Route path="/ocHacks" element={<OCHacks />}/>
            </Routes>
        </Router>
    </div>
  );
}