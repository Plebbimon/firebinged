import "./App.css";
import { Container, Divider, Group, Title } from "@mantine/core";

// TODO: Place this somewhere else
import { initializeApp } from "firebase/app";
import FrequencyChart from "./components/FrequencyChart";
import LowestTempChart from "./components/LowestTempChart";
import IncidentTable from "./components/IncidentTable";
import CreateIncidentForm from "./components/CreateForestFireForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryDocuments } from "./utils/queries";
import FullPageError from "./components/FullPageError";
import FullContentLoader from "./components/FullContentLoader";
import { ForestFire } from "./types";

const firebaseConfig = {
  apiKey: "AIzaSyBPGNoCkIz9QYxVpRK0LuvfI3l8f7tjS14",
  authDomain: "firebinged.firebaseapp.com",
  projectId: "firebinged",
  storageBucket: "firebinged.appspot.com",
  messagingSenderId: "139777741263",
  appId: "1:139777741263:web:16fb40d1e7d3a01b8442ba",
};

// Initializing Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [docData, loading, error] = useCollectionData(queryDocuments());

  if (error) {
    return <FullPageError />;
  }

  if (loading || !docData) {
    return <FullContentLoader />;
  }

  const data = docData as ForestFire[];

  return (
    <div className="App">
      <Container size={"xl"}>
        <Title
          variant={"gradient"}
          gradient={{ from: "red", to: "yellow", deg: 30 }}
          transform={"uppercase"}
        >
          Firewatch
        </Title>
        <Group my={"md"} position={"apart"}>
          <FrequencyChart data={data} />
          <LowestTempChart data={data} />
        </Group>
        <Divider my={"xl"} variant={"dashed"} />
        <CreateIncidentForm />
        <IncidentTable />
      </Container>
    </div>
  );
}

export default App;
