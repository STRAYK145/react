import React from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Karzina() {
  return (
    <div className="container">
      <Navbar />

      <main className="container flex-grow-1 mt-4">
        <h1 className="text-center mb-4">Добро пожаловать в Интернет Аптеку</h1>

        <p className="text-center fs-5">
          Работает 24 часа.
        </p> 
      </main>

      <Footer />
    </div>
  );
}

export default Karzina;