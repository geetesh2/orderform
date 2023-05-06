import OrderForm from "./OrderForm.js";
import './OrderForm.css';
import Navbar from './Navbar.js';

function App() {
  return (
    <div className="App">
    <Navbar />
    <h1>Welcome to APML</h1>
    <p>We offer the best services and products.</p>
    <OrderForm />
    </div>
  );
}

export default App;
