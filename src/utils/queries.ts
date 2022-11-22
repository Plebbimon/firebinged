//Document Query for the "firewatch" collection
import db from "../../firebase";
import {
  collection,
  DocumentData,
  limit,
  orderBy,
  query,
  startAfter,
} from "firebase/firestore";

export function queryDocuments() {
  const collectionRef = collection(db, "/forestfires");
  return query(collectionRef, limit(20));
}

export function queryDocumentsWithLimitAndOrder(
  limitNumber: number,
  orderByString: string
) {
  const collectionRef = collection(db, "/forestfires");
  return query(
    collectionRef,
    limit(limitNumber),
    orderBy(orderByString, "asc")
  );
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

// I've realized that picking firebase for this type of work was a dumbass move
// But I'm sticking with it, and we'll see how bad it can get
