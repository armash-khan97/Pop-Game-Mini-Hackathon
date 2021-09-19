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

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

let popped = 5;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "balloon"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "POP!";
                popped++;
                removeEvent(e);
                checkAllPopped();
    }   
});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popped === 24){
        console.log('all popped!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
    }
};
