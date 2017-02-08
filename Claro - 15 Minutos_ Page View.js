window.loadPageView = function() {}
document.addEventListener('DOMContentLoaded', function() {
    //$(document).ready(function(){
    console.log("DOM CONTENT");
    pageView = [];
    pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
    pageView["primaryCategory"] = digitalData.pageInstanceID;
    digitalData = window.LideratisLibrary.PageView(pageView);
    //window.loadPageView();
});
if (document.location.pathname == "/quienes-somos/" || document.location.pathname == "/politicas-de-uso/") {
    window.onload = function() {
        console.log("DOM CONTENT");
        pageView = [];
        pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
        pageView["primaryCategory"] = digitalData.pageInstanceID;
        digitalData = window.LideratisLibrary.PageView(pageView);
        console.log("DOM CARGA DE PAGINA");
    }
}
