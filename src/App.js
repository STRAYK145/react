import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Code Splitting (разделение кода по страницам)
const Main = React.lazy(() => import("./pages/main"));
const ListPage = React.lazy(() => import("./pages/ListPage"));
const Dobavlenie = React.lazy(() => import("./pages/dobavlenie"));
const Tovar = React.lazy(() => import("./pages/tovar"));
const Karzina = React.lazy(() => import("./pages/dly_22_lb"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div style={{ padding: "20px" }}>Загрузка страницы...</div>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/eee" element={<ListPage />} />
          <Route path="/ttt" element={<Dobavlenie />} />
          <Route path="/eee/:id" element={<Tovar />} />
          <Route path="/eee/:id/karzina" element={<Karzina />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
