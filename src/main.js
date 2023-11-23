var sessionkey = localStorage.getItem('sessionkey')
console.log(sessionkey)
sessionkey = atob(sessionkey)
sessionkey.split('/')
var currentdate = new Date();
    var dd = String(currentdate.getDate()).padStart(2, '0');
    var mm = String(currentdate.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = currentdate.getFullYear();
    logindate = dd + '-' + mm + '-' + yyyy;
console.log(sessionkey)
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