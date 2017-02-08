if (window.location.href.indexOf('15minutos.pe') !== -1) {
    if (document.getElementById('categoryid') !== null) {
        window.categoryId = document.getElementById('categoryid').getAttribute('content');
        window.identifier = document.getElementById('identifier').getAttribute('content');
        console.log(categoryId);
        console.log(identifier);
    }
}
