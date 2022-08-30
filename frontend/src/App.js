import "./styles/pages.css";
import "./styles/layout.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//import components
import NavList from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

//import pages
import CarteleraPage from "./pages/CarteleraPage";
import PreguntasPage from "./pages/PreguntasPage";
import EntradasPage from "./pages/EntradasPage";
import ContactoPage from "./pages/ContactoPage";
import LoginPage from "./pages/LoginPage";

//import estilos react boostrap
import "bootstrap/dist/css/bootstrap.min.css";
import PeliculaDetalle from "./pages/PeliculaDetalle";
// import LoginPage from "./pages/LoginPage";
// import PreguntasPage from "./pages/PreguntasPage";
// import ContactoPage from "./pages/ContactoPage";
// import CarteleraPage from "./pages/CarteleraPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={<CarteleraPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/entradas" element={<EntradasPage />} />
          <Route path="/preguntas" element={<PreguntasPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/detalle/:id" element={<PeliculaDetalle />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
