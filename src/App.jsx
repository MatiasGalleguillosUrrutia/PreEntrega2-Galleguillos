import { BrowserRouter, Routes, Route } from "react-router-dom"; // componentes que funcionan con el patron children.
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { Header } from "./components/Header";
import {getFirestore, doc,getDoc} from "firebase/firestore";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}>
          {" "}
        </Route>
        <Route path="/categoria/:id" element={<ItemListContainer />}>
          {" "}
        </Route>
        <Route path="/item/:id" element={<ItemDetailContainer />}>
          {" "}
        </Route>
        <Route path="*" element={404}>
          {" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
