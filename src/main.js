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
      var dd = String(currentdate.getDate()).padStart(2, '0');
      var mm = String(currentdate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = String(currentdate.getFullYear()).padStart(2, '0');
    if(!failedchecks <=5){
            if(sessionkeys[0]==dd){
                if(sessionkeys[1]==mm){
                    if(sessionkeys[2]==yyyy){
                        window.location.href = "app/index.html"
                    }else{
                        console.log("year not same")
                    }
                }else{
                    console.log("month not same")
                }
            }else{
                console.log("day not same")
            }
        }
        else{
            failedchecks++
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