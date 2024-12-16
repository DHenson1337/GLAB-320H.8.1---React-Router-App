import { Routes, Route } from "react-router";
import Nav from "./components/Nav";
import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <Nav />
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/currencies" element={<Currencies />} />
        <Route path="/price/:symbol" element={<Price />} />
      </Routes>
    </div>
  );
}
