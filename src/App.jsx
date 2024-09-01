import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Cart } from "./components/Cart";
import { Header } from "./components/Header";
import { Checkout } from "./components/Checkout";
import UploadProductos from "./components/UploadProductos";
import DeleteCollection from "./components/DeleteCollection"; // Importa el nuevo componente

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={404} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/upload" element={<UploadProductos />} />
        <Route path="/delete-collection" element={<DeleteCollection />} /> {/* Nueva ruta */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
