var url_string = window.location.href
var url = new URL(url_string);
var code = url.searchParams.get("code");
console.log(code)
window.sessionStorage.setItem("accountcode", code)
    var clientid = "7fffec7134504e539c4150da1dbc046b"
    var clientsecret = "fc63fbaf18c2421993b86aeba620d310"
    var authheader = clientid+":"+clientsecret
    var encodedauth = btoa(authheader)
    const redirectUri = 'whatslistening://home';
    let body = new URLSearchParams({
        grant_type: 'authorization_code',
        code: code,
        redirect_uri: redirectUri
    });
    const response = fetch('https://accounts.spotify.com/api/token', {
        method: 'POST',
        headers: {
            'Authorization': 'Basic ' + encodedauth,
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: body
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('HTTP status ' + response.status);
            }
            return response.json();
        })
        .then(data => {
            sessionStorage.setItem('access_token', data.access_token);
            sessionStorage.setItem('refresh_token', data.refresh_token);
            window.location.href = "index.html"
        })
        .catch(error => {
            console.error('Error:', error);
})
