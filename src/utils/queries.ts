//Document Query for the "firewatch" collection
import db from "../../firebase";
import {collection, limit, query} from "firebase/firestore";

export function queryDocuments() {
    const collectionRef = collection(db, "/forestfires")
    return query(collectionRef, limit(40))
}

// I've realized that picking firebase for this type of work was a dumbass move
// But I'm sticking with it, and we'll see how bad it can get