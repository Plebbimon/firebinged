import "./App.css";
import { Container, Divider, Group, Stack, Title } from "@mantine/core";

// TODO: Place this somewhere else
import { initializeApp } from "firebase/app";
import FrequencyChart from "./components/charts/FrequencyChart";
import TempChart from "./components/charts/TempChart";
import IncidentTable from "./components/IncidentTable";
import CreateIncidentForm from "./components/CreateForestFireForm";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { queryDocuments } from "./utils/queries";
import FullPageError from "./components/FullPageError";
import FullContentLoader from "./components/FullContentLoader";
import { ForestFire } from "./types";
import HumidityChart from "./components/charts/HumidityChart";
import WindChart from "./components/charts/WindChart";
import { FilterSelect } from "./components/filters/FilterSelect";
import { useState } from "react";
import { FilterOrderControl } from "./components/filters/FilterOrderControl";
import BurnedAreaChart from "./components/charts/BurnedAreaChart";
import RainChart from "./components/charts/RainChart";

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
  const [filterWord, setFilterWord] = useState("area");
  const [filterOrder, setFilterOrder] = useState<"asc" | "desc">("desc");

  if (error) {
    return <FullPageError />;
  }

  if (loading || !docData) {
    return <FullContentLoader />;
  }

  const data = docData as ForestFire[];

  return (
    <div className="App">
      <Container
        size={"xl"}
        style={{ borderRight: "1px solid #ddd", borderLeft: "1px solid #ddd" }}
      >
        <Title
          variant={"gradient"}
          gradient={{ from: "red", to: "yellow", deg: 30 }}
          transform={"uppercase"}
        >
          Firewatch
        </Title>
        <Stack>
          <Group my={"md"} position={"apart"}>
            <FrequencyChart data={data} />
            <TempChart data={data} />
            <HumidityChart data={data} />
          </Group>
          <Group>
            <WindChart data={data} />
            <BurnedAreaChart data={data} />
            <RainChart data={data} />
          </Group>
        </Stack>
        <Divider my={"xl"} variant={"dashed"} />
        <Group position={"apart"} mb={"lg"} px={"xl"}>
          <Group>
            <FilterSelect onChange={setFilterWord} />
            <FilterOrderControl onChange={setFilterOrder} />
          </Group>
          <CreateIncidentForm />
        </Group>
        <IncidentTable filterOrder={filterOrder} filterWord={filterWord} />
      </Container>
    </div>
  );
}

export default App;
