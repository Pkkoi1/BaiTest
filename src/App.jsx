import "./App.css";
import Header from "./layout/header/index";
import Footer from "./layout/footer";
import Home from "./pages/home/home";
import Detail from "./pages/detail/Detail";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <Router>
      <CartProvider>
        <div className="flex flex-col min-h-screen bg-[#f0f2f5] w-[100vh] min-w-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
