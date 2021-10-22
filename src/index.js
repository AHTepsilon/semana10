import {initializeApp} from "firebase/app";
import {getDatabase} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

registerUser = (user) =>
{
    const db = getDatabase();
       
}

const id = document.getElementById("IDtext");
const nameCandidate = document.getElementById("nameText");
const idVoter = document.getElementById("candidateId");

const registerBtn = document.getElementById("registerButton");
const voteBtn = document.getElementById("voteButton");

const candidateListBtn = document.getElementById("candidateList");
const votListBtn = document.getElementById("votintList");

saveDataIdName = () =>
{
    let i = id.value;
    let n = nameCandidate.value;

    let userObject =
    {
        ID: i,
        NAME: n
    };

    let json = JSON.stringify(userObject);

    console.log(json);
}

voteForCandidateUsingId = () =>
{
    let iV = idVoter.value;

    console.log(iV);
}



registerBtn.addEventListener("click", saveDataIdName);