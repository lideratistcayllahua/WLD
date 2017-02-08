window.loadPageView = function() {}
window.prefijo = 'CAT: ';
if (window.location.pathname == "/portadas/") {
    $(document).ready(function() {
        console.log("JS Load - INTRO");
        var categoryId = document.getElementById('categoryid').getAttribute('content');
        pageView = [];
        pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
        pageView["primaryCategory"] = categoryId;
        digitalData = window.LideratisLibrary.PageView(pageView);
        window.loadPageView();
    });
} else {
    document.addEventListener('DOMContentLoaded', function() {
        console.log("JS Load - INTRO");
        var categoryId = document.getElementById('categoryid').getAttribute('content');
        pageView = [];
        pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
        pageView["primaryCategory"] = categoryId;
        digitalData = window.LideratisLibrary.PageView(pageView);
        window.loadPageView();
    });
}
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOC LOAD CONTENT");
});
window.onload = function() {
        console.log("JS Load");
    }
    /*$(window).load(function(){
       console.log("JQ Load");
    });
    $(document).ready(function(){
       console.log("JQ ready");
    })
    (function() {
        console.log("DOM LOADED");
    })();*/
