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
    const dbRef = ref(db, "candidates/ " + userObject.ID);
    set(dbRef, userObject);
}

function registerVotes(votesAmount)
{
    const db = getDatabase();
    const dbRef = ref(db, "votes/" + votesAmount.NAME);
    set(dbRef, votesAmount);
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

function updateVotesCount(info)
{
    let text = "";

    Object.keys(info).forEach((key, index) =>
    {
        text += info[key].VOTES + ", " + info[key].NAME + "\n";
    });
    
    alert(text);
}

function getVotes()
{
    const db = getDatabase();
    const dbRef = ref(db, "votes");

    onValue(dbRef, (snapshot) => 
    {
        const data = snapshot.val();
        updateVotesCount(data);
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
    let votes = 0;

    let userObject =
    {
        ID: i,
        NAME: n,
    };

    let votesAmount =
    {
        VOTES: votes,
        NAME: n
    }

    registerUser(userObject);
    registerVotes(votesAmount);
}

const addVoteToCandidate = (votesAmount) =>
{   
        Object.keys(votesAmount).forEach((key, index)=>
        {
            votesAmount.VOTES++;

            alert("vote added to candidate");
        });
}

registerBtn.addEventListener("click", saveDataIdName);
voteBtn.addEventListener("click", addVoteToCandidate);

candidateListBtn.addEventListener("click", getCandidates);
votListBtn.addEventListener("click", getVotes);