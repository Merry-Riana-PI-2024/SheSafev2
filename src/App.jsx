import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ViewJurnal from "./pages/DetailJurnal.jsx";
import ListKasus from "./pages/ListPengajuanKasus.jsx";
import ListJurnal from "./pages/ListJurnal.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ViewJurnal />} />
                <Route path="/listkasus" element={<ListKasus />} />
                <Route path="/listjurnal" element={<ListJurnal />} />
            </Routes>
        </Router>
    );
}

export default App;
