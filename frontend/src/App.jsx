import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnalyzerPage from "./pages/AnalyzerPage";
import ResultsPage from "./pages/ResultsPage"; // Optional if using separate results page
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<AnalyzerPage />} />
          <Route path="/results" element={<ResultsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;