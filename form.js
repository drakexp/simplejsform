function validateForm() {
   var username = document.getElementById('username').value;
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var validatedig = new RegExp("\\d");
   if(!validatedig.test(username)) alert("Username must have one digit!");
   else if(password !== "12345678") alert("Wrong password!");
   else document.getElementById('main').innerText = "Welcome, " + username;
   return false;
}