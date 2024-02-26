import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import { SelectState } from "./pages/SelectState";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selectState" element={<SelectState />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
