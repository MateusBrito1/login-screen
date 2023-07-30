import React from 'react';
import "./global.css";
import { Container } from "./components/container";
import { Form } from "./components/Form";

export function App() {
  return (
    <div>
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default App;