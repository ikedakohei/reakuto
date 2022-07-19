import { FC } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Home from "./components/pages/Home";
import Characters from "./components/pages/Characters";
import AllCharacters from "./containers/templates/AllCharacters";
import SchoolCharacters from "./containers/templates/SchoolCharacters";
import "./App.css";

const App: FC = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="characters" element={<Characters />}>
            <Route path="" element={<AllCharacters />} />
            <Route path=":schoolCode" element={<SchoolCharacters />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
