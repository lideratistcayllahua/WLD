function getAudienceId(){
        try
       {
             var audId = "";
             var cookieNames = document.cookie.split(';');
             var cname = "USERACTIVITY";
             for(var i=0; i<cookieNames.length; i++){
                  var c = cookieNames[i];
                  if(c.indexOf(cname) != -1){
                        var breakNameAndValue = c.split("=");
                        var breakName = breakNameAndValue[0].split("_");
                        audId = breakName[breakName.length-1];
                  }
         }
         if(audId.trim().length == 0)
         {
               audId = "-1002";
         }
               return "USERS_ID,"+audId+",numeric";
         }
         catch(err) {
               return "USERS_ID,-1002,numeric";
         }
    }
   function getSessionId(){
        var sessionId = "12345";
        try
        {
             var value = getCookie("WC_PERSISTENT");
             if(value.trim().length != 0){
                  sessionId = value;
             }
             var decoded = decodeURIComponent(sessionId);
             var ssid = decoded.split("_");
             return ssid[1];
       }
       catch(err) {
             return sessionId;
       }
   }
   function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++) {
             var c = ca[i];
             while (c.charAt(0)==' ') c = c.substring(1);
             if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
         }
         return "";
   }
cookie_object = {};
cookie_object.ssid = getSessionId();
cookie_object.audId = getAudienceId();
cookie_object.contenedor='micontenedor';
cookie_object.contenido='Un contenido';
