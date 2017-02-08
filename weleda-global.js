console.log("Bienvenido Lideratis");
window.redesSociales  = function() {};
window.pageViewLoad = function(){};
window.preFix = '';
window.sufFix = '';
window.pagin = '';
jQuery(document).ready(function(){
    console.log('ingreso al load');
    var grupoPag = LideratisHelper.URL(2).split('/')[1];
    var templatePage = jQuery('body').attr('class').split(' ');
    var titlePag = jQuery('title').text();
    var pageID = '';
    var categ = '';
    var termBusq = null;
    var cantResult = '0';
    var atrib = '';
    //GRUPO DE PAGINA HOME / BUSQUEDA
    if (grupoPag === '') {
        if (templatePage[0] == 'home') {
        console.log('ingreso a home global');
        pageID = titlePag;
        categ = 'home';
        }
        if (templatePage[0] == 'search') {
        console.log('ingreso a busqueda global');
            if (templatePage[1] == 'search-results') {
                pageID = 'Busqieda con resultados';
            }
            if (templatePage[1] == 'search-no-results') {
                pageID = 'Busqieda sin resultados';
            }
            atrib = 'producto';
            categ = 'busqueda';
            termBusq = LideratisHelper.URL(4).split('=')[1];
            cantResult = jQuery('div.product').find('div.item-producto').length;
        }
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA CATEGORIA
    else if (grupoPag == 'productos') {
        console.log('ingreso a categorias global');
        pageID = titlePag;
        categ = 'categoria';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('CAT','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA PRODUCTO
    else if (grupoPag == 'producto') {
        console.log('ingreso a producto global');
        pageID = titlePag;
        categ = 'producto';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('PRO','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA BLOG
    else if (grupoPag == 'promociones') {
        console.log('ingreso a promociones global');
        pageID = titlePag;
        categ = 'promociones';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA MI CUENTA
    else if (grupoPag == 'mi-cuenta') {
        console.log('ingreso a cuenta global');
        pageID = titlePag;
        categ = 'cuenta';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA BLOG
    else if (grupoPag == 'blog') {
        console.log('ingreso a blog global');
        pageID = titlePag;
        categ = 'blog';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    //GRUPO DE PAGINA FLUJO DE COMPRA
    else if (grupoPag == 'cart') {
        console.log('ingreso a carrito global');
        pageID = titlePag;
        categ = 'flujo de compra';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    else if (grupoPag == 'checkout') {
        console.log('ingreso a checkout global');
        pageID = 'ingresar';
        categ = 'flujo de compra';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    else{
        console.log('ingreso a informativa global');
        pageID = titlePag;
        categ = 'informativa';
        var attr = new Array();
        attr.push('');
        var contentPage = new Array();
        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
        contentPage['primaryCategory'] = categ;
        contentPage['onsiteSearchTerm'] = termBusq;
        contentPage['onsiteSearchResults'] = cantResult;
        contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
        contentPage['extraFields'] = '';
        window.digitalData = new LideratisLibrary.PageView(contentPage);
        window.pageViewLoad();
    }
    console.log('**************************************************************');
    console.log(pageID);
    console.log(categ);
    console.log(termBusq);
    console.log(cantResult);
    console.log('**************************************************************');
});
