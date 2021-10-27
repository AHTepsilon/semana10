import {initializeApp} from "firebase/app";
import {getDatabase, ref, set} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

function registerUser(userObject)
{
    const db = getDatabase();
    const dbRef = ref(db, "users");
    set(dbRef, userObject);
}

const id = document.getElementById("IDtext");
const nameCandidate = document.getElementById("nameText");
const idVoter = document.getElementById("candidateId");

const registerBtn = document.getElementById("registerButton");
const voteBtn = document.getElementById("voteButton");

const candidateListBtn = document.getElementById("candidateList");
const votListBtn = document.getElementById("votintList");

const saveDataIdName = (e, event) =>
{
    let i = id.value;
    let n = nameCandidate.value;

    let userObject =
    {
        ID: i,
        NAME: n
    };

    registerUser(userObject);
}

const voteForCandidateUsingId = () =>
{
    let iV = idVoter.value;

    console.log(iV);
}



registerBtn.addEventListener("click", saveDataIdName);