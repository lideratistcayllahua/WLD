window.loadPageView = function() {}
window.guardarRegistroUsuario = function() {}
    //document.addEventListener('DOMContentLoaded', function() {
window.onload = function() {
    pageView = [];
    pageView["pageId"] = window.prefijo + document.title.trim() + window.sufijo;
    pageView["primaryCategory"] = "newsletter";
    digitalData = window.LideratisLibrary.PageView(pageView);
    //window.loadPageView();
}
window.onload = function() {
        console.log("LOAD");
        pageView = [];
        pageView["pageId"] = window.prefijo + document.title.trim() + window.sufijo;
        pageView["primaryCategory"] = "newsletter";
        digitalData = window.LideratisLibrary.PageView(pageView);
        //window.loadPageView();
    }
    /*$(document).ready(function(){
      console.log("JQUERY READY");
    })
    $(window).load(function(){
      console.log("JQUERY LOAD");
    })*/
    //Obtencion de datos Ifram
window.addEventListener('message', function(e) {
    if (~e.origin.indexOf('http://www.somark.pe')) {
        console.log(e.data[4]);
        if (e.data[4] != '') {
            //console.log(e.origin);
            //console.log(e.data);
            var atrib = new Array();
            atrib.push(e.data[0]);
            atrib.push(e.data[1]);
            atrib.push(e.data[2]);
            atrib.push(e.data[5]);
            atrib.push(e.data[3]);
            window.digitalData = {
                user: [{
                    profile: [{
                        profileInfo: {
                            profileID: e.data[4],
                            profileEmail: e.data[4],
                            exploreAttributes: atrib.join('-_-')
                        },
                        address: {
                            city: e.data[6],
                            state_province: '',
                            postalcode: '',
                            country: 'PERU'
                        }
                    }]
                }]
            };
            guardarRegistroUsuario();
        }
    }
});
