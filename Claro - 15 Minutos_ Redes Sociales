window.eventClaroRedesSociales = function(){};
if(window.location.pathname=="/portadas/"){
    console.log("PORTADAS");
    $(document).ready(function() {
           console.log("PORTADAS READY");
       var nodeList = Array.prototype.slice.call( document.querySelector('ul.nav:not(.main-nav)').children );
console.log(nodeList);
       var anchors = document.querySelectorAll("ul.nav:not(.main-nav) li");
console.log(anchors);
       for(var i = 0; i < anchors.length; i++) {
       var anchor = anchors[i];
       anchor.onclick = function() {
         console.log("CLICK");
         var indice = nodeList.indexOf(this);
         window.redessociales = arrRedesSociales[indice];
         eventClaroRedesSociales();
      }
    }
    });
}else{
document.addEventListener('DOMContentLoaded', function() {
window.redesSocialesCategory = document.getElementById("identifier").getAttribute("content");
var nodeList = Array.prototype.slice.call( document.querySelector('ul.nav:not(.main-nav)').children );
var anchors = document.querySelectorAll("ul.nav:not(.main-nav) li");
for(var i = 0; i < anchors.length; i++) {
     var anchor = anchors[i];
     anchor.onclick = function() {
         var indice = nodeList.indexOf(this);
         window.redessociales = arrRedesSociales[indice];
         eventClaroRedesSociales();
     }
}
});
}
