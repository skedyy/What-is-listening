var response = null;
function register(){
    var user = document.getElementById('user-text-input').value;
    var email = document.getElementById('email-text-input').value;
    var pass = document.getElementById('pass-text-input').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          response = xhr.response
          login()
      }
  }  
xhr.open("POST", "https://skedyy.000webhostapp.com/register/", true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(new URLSearchParams({
  'email': email,
  'password': btoa(pass),
  'user': user 
})
);}
function login(){
    if(response.includes("@")){
      window.location.href = "../login/login.html"
    }
    else{
        var error = JSON.stringify(response)
        error = error.slice(14,-4);
        var usererror = document.getElementById('null-user-text')
        usererror.removeAttribute("hidden"); 
        usererror.innerHTML = error;
      
    }
}
function returnw(){
  window.location.href = '../index.html'
}