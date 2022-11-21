import firebase from "firebase/compat";
import FirestoreDataConverter = firebase.firestore.FirestoreDataConverter;
import {DocumentData, WithFieldValue } from "firebase/firestore";
import QueryDocumentSnapshot = firebase.firestore.QueryDocumentSnapshot;
import SnapshotOptions = firebase.firestore.SnapshotOptions;
import DocumentReference = firebase.firestore.DocumentReference;

type ForestFire = {
    DC: number;
    DMC: number;
    FFMC: number;
    ISI: number;
    RH: number;
    X: number;
    Y: number;
    area: number;
    day: string;
    month: string;
    rain: number;
    temp: number;
    wind: number;
    id: string;
    ref: DocumentReference<DocumentData>
}

const ForestFireConverter: FirestoreDataConverter<ForestFire> = {
    toFirestore(modelObject : ForestFire): DocumentData {
        return {
            DC: modelObject.DC,
            DMC: modelObject.DMC,
            FFMC: modelObject.FFMC,
            ISI: modelObject.ISI,
            RH: modelObject.RH,
            X: modelObject.X,
            Y: modelObject.Y,
            area: modelObject.area,
            day: modelObject.day,
            month: modelObject.month,
            rain: modelObject.rain,
            temp: modelObject.temp,
            wind: modelObject.wind,
        };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): ForestFire {
        const data = snapshot.data(options);
        return {
            id: snapshot.id,
            ref: snapshot.ref,
            DC: data.DC,
            DMC: data.DMC,
            FFMC: data.FFMC,
            ISI: data.ISI,
            RH: data.RH,
            X: data.X,
            Y: data.Y,
            area: data.area,
            day: data.day,
            month: data.month,
            rain: data.rain,
            temp: data.temp,
            wind: data.wind
        }
    }
}