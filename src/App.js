import "./App.css";

import {  Container } from "react-bootstrap";

import { Routes,Route } from "react-router-dom";

import MakeState from "./context/MakeState";

import CombineAll from "./components/CombineAll";

function App() {
  return (
    <Container>
    <MakeState>
      <Routes>
        <Route path="/" element={<CombineAll />} />
      </Routes>
      
        
        </MakeState>
    </Container>
  );
}

export default App;
