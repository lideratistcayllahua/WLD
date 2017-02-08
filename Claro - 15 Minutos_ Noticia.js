window.prefijo = "ART: ";
window.onload = function() {
    /*var categoryId = document.getElementById("categoryid").getAttribute("content")
    pageView = [];
    pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
    pageView["primaryCategory"] = categoryId;
    digitalData = window.LideratisLibrary.PageView(pageView);*/
    console.log("DOM CARGA DE PAGINA");
}
document.addEventListener('DOMContentLoaded', function() {
    var categoryId = document.getElementById("categoryid").getAttribute("content")
    pageView = [];
    pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
    pageView["primaryCategory"] = categoryId;
    digitalData = window.LideratisLibrary.PageView(pageView);
    console.log("DOM CONTENT");
});
