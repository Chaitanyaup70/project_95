var firebaseConfig = {
  apiKey: "AIzaSyAphTrjg5MYaG0E7KxB8DeynFO9f5EW7Ok",
  authDomain: "kwiter-6f579.firebaseapp.com",
  databaseURL: "https://kwiter-6f579-default-rtdb.firebaseio.com",
  projectId: "kwiter-6f579",
  storageBucket: "kwiter-6f579.appspot.com",
  messagingSenderId: "551901858065",
  appId: "1:551901858065:web:0cf598bb4f9e567fd864b0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function add_room(){
  room=document.getElementById("room_name").value;
  firebase.database().ref("/").child(room).update({
    purpose:"add room"
  });
  localStorage.setItem("add_room", room);
  window.location="index3.html"
}
function get_room(){
  firebase.database().ref("/").on('value',function(snapshot){
    document.getElementById("div-1").innerHTML="";
    snapshot.forEach(function(childsnapshot){
      childkey=childsnapshot.key;
      room_name=childkey;
      row='<div id="'+room_name+ '" onclick="go_room(this.id)">'+room_name+'</div><hr>';
      document.getElementById("div-1").innerHTML+=row
    })
      
   

  })
}
get_room();
  