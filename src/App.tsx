import './App.css'
import {Container, Divider, Group, Title} from "@mantine/core";


// TODO: Place this somewhere else
import {initializeApp} from "firebase/app";
import FrequencyChart from "./components/FrequencyChart";
import LowestTempChart from "./components/LowestTempChart";
import IncidentTable from "./components/IncidentTable";
import CreateIncidentForm from "./components/CreateForestFireForm";

const firebaseConfig = {
    apiKey: "AIzaSyBPGNoCkIz9QYxVpRK0LuvfI3l8f7tjS14",
    authDomain: "firebinged.firebaseapp.com",
    projectId: "firebinged",
    storageBucket: "firebinged.appspot.com",
    messagingSenderId: "139777741263",
    appId: "1:139777741263:web:16fb40d1e7d3a01b8442ba"
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

function App() {
    return (
        <div className="App">
            <Container size={"xl"}>

                <Title variant={"gradient"} gradient={{from: 'red', to: 'yellow', deg: 60}} order={1}>Firewatch</Title>
                <Group my={"md"} position={"apart"}>
                    <FrequencyChart/>
                    <LowestTempChart/>
                </Group>
                <Divider my={"xl"} variant={"dashed"}/>
                <CreateIncidentForm/>
                <IncidentTable/>
            </Container>
        </div>
    )
}

export default App
