const firebaseConfig = 
{
    apiKey: "AIzaSyDyiv9Hqvf8EHKAzR3QWpylNDA2Gj1nVcQ",
    authDomain: "semana10-95dc8.firebaseapp.com",
    databaseURL: "https://semana10-95dc8-default-rtdb.firebaseio.com",
    projectId: "semana10-95dc8",
    storageBucket: "semana10-95dc8.appspot.com",
    messagingSenderId: "259452409334",
    appId: "1:259452409334:web:2c28a0860bb6e7e7b9a3d7",
    measurementId: "G-1GFVLC8KLM"
};


export function getFirebaseConfig()
{
    if(!firebaseConfig || !firebaseConfig.apiKey)
    {
        throw new Error("Firebase config error");
    }
    else
    {
        return firebaseConfig;
    }
}