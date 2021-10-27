import {initializeApp} from "firebase/app";
import {getDatabase, ref, set, onValue} from "firebase/database";

import {getFirebaseConfig} from "./firebase-config";

// Initialize Firebase
const firebaseAppConfig = getFirebaseConfig();
const firebaseApp = initializeApp(firebaseAppConfig); 

//function to register the candidate on the database
function registerUser(userObject)
{
    const db = getDatabase();
    const dbRef = ref(db, "candidates/ " + userObject.NAME);
    set(dbRef, userObject);
}

function getCandidates()
{
    const db = getDatabase();
    const dbRef = ref(db, "candidates");

    onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        updateCandidateList(data);
        console.log(data);
    });
}

function updateCandidateList(info)
{
    let text = "";

    Object.keys(info).forEach((key, index)=>
    {
        //text += info[index].NAME + ", " + info[index].ID + "\n";
        text += info[key].NAME + ", " + info[key].ID + "\n";
    });

    alert(text);
}

function registerVote(iV)
{

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

const voteForCandidateUsingId = (e, event) =>
{
    let iV = idVoter.value;

    let votingData =
    {

        
    }
}

registerBtn.addEventListener("click", saveDataIdName);
voteBtn.addEventListener("click", voteForCandidateUsingId);

candidateListBtn.addEventListener("click", getCandidates);