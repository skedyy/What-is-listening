var sessionkey = null;
var sessionkeys = []
window.app.getdat("sessionkey")
window.app.getdata((event, value) => {
    sessionkey = value['sessionkey']
    sessionkey = sessionkey.split('/')
    console.log(sessionkey)
    for(i = 0; i < sessionkey.length; i++)
{
    sessionkeys[i] = atob(sessionkey[i])
}
var failedchecks
for(i = 0; i < sessionkeys.length; i++)
{
    if(!failedchecks <=5){
        if(sessionkeys[i] == null){
            failedchecks++
        }
        else{
            window.location.href = "app/index.html"
        }   
    }else{
        login()    
    }
}
})
function login(){
    window.location.href = "login/login.html"
}
function register(){
    window.location.href = "register/index.html"
}
function index(){
    window.location.href = ""
}