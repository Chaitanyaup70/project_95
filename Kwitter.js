function add_user(){
    user_name=document.getElementById("input").value;
    localStorage.setItem("input",user_name);
    window.location="Kwitter_room.html"
};