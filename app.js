const firebaseConfig = {
    apiKey: "AIzaSyCkpI2Qex6vtF4BuwFhSPLa9RWnKbi2i7g",
    authDomain: "pop-a-ballon-688e3.firebaseapp.com",
    projectId: "pop-a-ballon-688e3",
    storageBucket: "pop-a-ballon-688e3.appspot.com",
    messagingSenderId: "244344932845",
    appId: "1:244344932845:web:2402f3dd4e3dbace0b3fe4"
  };



// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  
  function signUp() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


const auth = firebase.auth();
// var database = firebase.database();
 function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            window.location = "http://127.0.0.1:5500/main.html"
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
            // ..
        });
        console.log(email,password)
}



    