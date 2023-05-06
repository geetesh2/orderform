import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import OrderForm from "./pages/OrderForm";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<OrderForm />} />
          <Route path="blogs" element={<OrderForm />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

