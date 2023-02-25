
//ADD YOUR FIREBASE LINKS HERE
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
  apiKey: "AIzaSyAojGXp-LDsp5K4pxlaLNLF5pTuk-fPpac",
  authDomain: "kwitter-2-d55be.firebaseapp.com",
  databaseURL: "https://kwitter-2-d55be-default-rtdb.firebaseio.com",
  projectId: "kwitter-2-d55be",
  storageBucket: "kwitter-2-d55be.appspot.com",
  messagingSenderId: "529966572860",
  appId: "1:529966572860:web:56dc53d45cf7b986296a39"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}


getData();


function logOut(){
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location("kwitter_pageDirections");

};

