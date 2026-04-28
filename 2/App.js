import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListPage from "./pages/ListPage";
import Main from "./pages/main";
import Dobavlenie from "./pages/dobavlenie";
import Tovar from "./pages/tovar";
import Karzina from "./pages/dly_22_lb";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/eee" element={<ListPage />} />
        <Route path="/ttt" element={<Dobavlenie />} />
        <Route path="/eee/:id" element={<Tovar />} />
        <Route path="/eee/:id/karzina" element={<Karzina />} />
      </Routes>
    </Router>
  );
}

export default App;
