

//Document Query for the "firewatch" collection
import db from "../../firebase";
import {collection, limit, onSnapshot, orderBy, query} from "firebase/firestore";

const ref = collection(db, 'data');
const q = query(ref, limit(20), orderBy('timestamp', 'desc'));

let unsubscribe = onSnapshot(q, (querySnapshot) => {
    const data = querySnapshot.docs.map((doc) => doc.data()).reverse();
    //update(data);
});

unsubscribe;