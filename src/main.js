var sessionkey = localStorage.getItem('sessionkey')
sessionkey = atob(sessionkey)
sessionkey.split('/')
var currentdate = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    logindate = dd + '-' + mm + '-' + yyyy;
if(sessionkey==null){
    
}
if(sessionkey[0]){
    
}
function login(){
    window.location.href = "login/login.html"
}
function register(){
    window.location.href = "register/index.html"
}