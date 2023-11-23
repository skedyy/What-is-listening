var response = null;
function login(){
    var user = document.getElementById('user-text-input').value;
    var pass = document.getElementById('pass-text-input').value;
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
      localStorage.removeItem('sessionkey')
      var logindate = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      var yyyy = today.getFullYear();
      logindate = btoa(dd)+"/";
      var sessiondate = logindate+btoa(mm)+"/"
      var sessiondate = logindate+btoa(yyyy)+"/"
      var sessionkey = sessiondate+btoa(user+"/"+pass)
      localStorage.setItem('sessionkey',sessionkey)
    }
    else{
      var error = document.getElementById('null-user-text')
      error.removeAttribute("hidden"); 
    }
}
function returnw(){
  window.location.href = '../index.html'
}