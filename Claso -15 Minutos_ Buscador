window.loadPageView = function() {}
var title = "";
var number = 0;
window.prefijo = "BUSQUEDA: ";
document.addEventListener('DOMContentLoaded', function() {
    if ($(".row .categoria .col-lg-12:not(.ad)").length == 0) {
        title = window.prefijo + " No existen resultados" + window.sufijo;
        pageView = [];
        pageView["pageId"] = title
        pageView["primaryCategory"] = 'buscador';
        pageView["onsiteSearchTerm"] = '';
        pageView["onsiteSearchResults"] = 0;
        digitalData = window.LideratisLibrary.PageView(pageView);
    } else {
        title = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
        number = $("h2.cantidad").html().trim().replace(/[^0-9]/g, '');
        var word = $(".buscarPage #searchform input[type='text']").val();
        pageView = [];
        pageView["pageId"] = title
        pageView["primaryCategory"] = 'buscador';
        pageView["onsiteSearchTerm"] = word;
        pageView["onsiteSearchResults"] = number;
        digitalData = window.LideratisLibrary.PageView(pageView);
    }
});
