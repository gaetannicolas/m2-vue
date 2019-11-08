import firebase from "firebase";
import settings from "./settings.js";

firebase.initializeApp(settings);

export const db = firebase.database();
