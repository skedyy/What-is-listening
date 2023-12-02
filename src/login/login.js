var response = null;
var user = null;
var pass = null
function login(){
  user = document.getElementById('user-text-input').value;
  pass = document.getElementById('pass-text-input').value;
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == XMLHttpRequest.DONE) {
          response = xhr.response
          validatelogin()
      }
  }  
xhr.open("POST", "https://skedyy.000webhostapp.com", true);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send(new URLSearchParams({
  'email': user,
  'password': btoa(pass),
})
);}
function validatelogin(){
    if(response.includes("@")){
      const generateRandomString = (length) => {
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const values = crypto.getRandomValues(new Uint8Array(length));
        return values.reduce((acc, x) => acc + possible[x % possible.length], "");
      }      
      var client_id = '7fffec7134504e539c4150da1dbc046b';
      var scope = "user-read-playback-state"
      var redirect_uri = "whatslistening://home"
      var state = generateRandomString(16);
      window.location.href = 'https://accounts.spotify.com/authorize?' +
      new URLSearchParams({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
      })
      var logindate = new Date();
      var dd = String(logindate.getDate()).padStart(2, '0');
      var mm = String(logindate.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = String(logindate.getFullYear()).padStart(2, '0');
      var sessionday = btoa(dd)+"/";
      var sessionmonth = btoa(mm)+"/"
      var sessionyear = btoa(yyyy)+"/"
      var randomid = btoa(generateRandomString(5));
      var sessionkey = sessionday+sessionmonth+sessionyear+randomid
      window.app.removedata('sessionkey')
      window.app.savedata('sessionkey',sessionkey)
    }
    else{
      var error = document.getElementById('null-user-text')
      error.removeAttribute("hidden"); 
    }
}
function returnw(){
  window.location.href = '../index.html'
}