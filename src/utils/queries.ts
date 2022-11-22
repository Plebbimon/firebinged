//Document Query for the "firewatch" collection
import db from "../../firebase";
import {
  addDoc,
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";
import { ForestFire } from "../types";
import { QUERY_LIMIT } from "../consts";

export function queryDocuments() {
  const collectionRef = collection(db, "/forestfires");
  return query(collectionRef, limit(QUERY_LIMIT));
}

export function queryDocumentsPaginated(
  limitNumber: number,
  orderByString: string,
  orderDirection: "asc" | "desc",
  lastVisible: DocumentData | null
) {
  const collectionRef = collection(db, "/forestfires");
  if (lastVisible) {
    return query(
      collectionRef,
      orderBy(orderByString, orderDirection),
      startAfter(lastVisible),
      limit(limitNumber)
    );
  }
  return query(
    collectionRef,
    limit(limitNumber),
    orderBy(orderByString, orderDirection)
  );
}

export const submitForestFire = async (data: ForestFire) => {
  const collectionRef = collection(db, "/forestfires");
  console.log("submitForestFire", data);
  await addDoc(collectionRef, data);
};

// I've realized that picking firebase for this type of work was a dumbass move
// But I'm sticking with it, and we'll see how bad it can get
