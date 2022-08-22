import React from "react";
import CustomStepper from "../components/entradas/CustomStepper";
import '../styles/entradas.css'

function EntradasPage() {
  return (
    <main className="holder">
      <div>
        <h3 className="boleteria_title">BOLETERIA VIRTUAL</h3>
        <h1 className="venta_title">Venta de entradas</h1>
      </div>
      <CustomStepper />
    </main>
  );
}

export default EntradasPage;
