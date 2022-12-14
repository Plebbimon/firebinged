import { Button, Paper, Table } from "@mantine/core";
import { ForestFire } from "../types";
import {
  useCollection,
  useCollectionData,
} from "react-firebase-hooks/firestore";
import { queryDocumentsPaginated } from "../utils/queries";
import { useState } from "react";
import {
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { useCounter } from "@mantine/hooks";
import db from "../../firebase";
import FullContentLoader from "./FullContentLoader";
import FullPageError from "./FullPageError";

interface IncidentTableProps {
  filterWord: string;
  filterOrder: "asc" | "desc";
}

function IncidentTable({ filterWord, filterOrder }: IncidentTableProps) {
  const [lastVisible, setLastVisible] = useState<DocumentData | null>(null);
  let query_ = queryDocumentsPaginated(
    10,
    filterWord,
    filterOrder,
    lastVisible
  );
  const [docData, loading, error] = useCollection(query_);

  if (error) {
    return <FullPageError />;
  }

  if (loading || !docData) {
    return <FullContentLoader />;
  }
  const data = docData.docs.map((doc) => doc.data()) as ForestFire[];

  const rows = data.map((incident) => (
    <tr key={incident.temp + incident.day + incident.area}>
      <td>{incident.month}</td>
      <td>{incident.day}</td>
      <td>{incident.temp}</td>
      <td>{incident.rain}</td>
      <td>{incident.wind}</td>
      <td>{incident.area}</td>
      <td>{incident.RH}</td>
    </tr>
  ));

  const handleLoadMore = (e: any) => {
    setLastVisible(docData.docs[docData.docs.length - 1]);
    e.preventDefault();
  };

  return (
    <Paper withBorder>
      <Table>
        <thead>
          <tr>
            <th>Month</th>
            <th>Date</th>
            <th>Temp</th>
            <th>Rain</th>
            <th>Wind</th>
            <th>Area</th>
            <th>Relative Humidity</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Button
        my={"md"}
        color={"orange"}
        variant={"light"}
        onClick={(e) => handleLoadMore(e)}
      >
        See more
      </Button>
    </Paper>
  );
}

export default IncidentTable;
