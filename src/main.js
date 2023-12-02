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
var currentdate = new Date();
      var dd = String(logindate.getDate()).padStart(2, '0');
      var mm = String(logindate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = String(logindate.getFullYear()).padStart(2, '0');
for(i = 0; i < sessionkeys.length; i++)
{
    if(!failedchecks <=5){
        if(!sessionkeys[i] == null){
            failedchecks++
            if(sessionkeys[0]==dd){
                if(sessionkeys[1]==mm){
                    if(sessionkeys[2]==yyyy){
                        window.location.href = "app/index.html"
                    }
                }
            }
        }
        else{
        
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