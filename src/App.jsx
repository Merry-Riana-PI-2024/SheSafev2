import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewJurnal from "./pages/DetailJurnal.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ViewJurnal />} />
            </Routes>
        </Router>
    );
}

export default App;
