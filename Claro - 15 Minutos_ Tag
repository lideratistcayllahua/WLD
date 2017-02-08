window.loadPageView = function() {}
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM TAG PV");
    var titleTag = $(".res").html();
    pageView = [];
    pageView["pageId"] = window.prefijo + " TAG: " + titleTag + window.sufijo;
    pageView["primaryCategory"] = digitalData.pageInstanceID;
    digitalData = window.LideratisLibrary.PageView(pageView);
});
