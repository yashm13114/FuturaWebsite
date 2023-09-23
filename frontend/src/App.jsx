import {
  Collapse,
  initTE,
  Dropdown
} from "tw-elements";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Clients from "./components/Clients";




function App() {
  initTE({ Collapse, Dropdown });


  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Clients" element={<Clients />} />
        </Routes>
      </BrowserRouter>


    </>
  )
}

export default App;
