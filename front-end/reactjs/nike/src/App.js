import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/Home/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailProductPages from "./pages/DetailProduct/detailProductPages";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" caseSensitive={true} element={<HomePage />} />
          <Route path="/detailProduct/:id" element={<DetailProductPages />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
