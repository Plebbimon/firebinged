import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Button, Container, Title} from "@mantine/core";
import firebase from "firebase/compat";

function App() {
  const [count, setCount] = useState(0)
    const firebaseApp = firebase.apps[0];
  console.log(firebaseApp)
  return (
    <div className="App">

        <Container>
            <Title order={3}>React + TypeScript + Vite</Title>
            <Button onClick={() => console.log("noob")}>add data</Button>
        </Container>
    </div>
  )
}

export default App
