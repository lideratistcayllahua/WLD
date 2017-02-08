console.log("Bienvenido Lideratis");
window.redesSociales  = function(){};
window.pageViewLoad = function(){};
window.RegistroNewsletter = function(){};
window.titlePag = jQuery('title').text();
window.pageID = '';
window.atrib = '';
window.categ = '';
window.termBusq = null;
window.cantResult = '0';
window.grupoPag = LideratisHelper.URL(2).split('/')[1];
window.templatePage = jQuery('body').attr('class').split(' ');
window.termBusq = null;
window.cantResult = '0';
window.pageviewFunction = function(pageID, categ, atrib, termBusq, cantResult){
    var attr = new Array();
    attr.push(atrib);
    var contentPage = new Array();
    contentPage['pageId'] = pageID;
    contentPage['primaryCategory'] = categ;
    contentPage['onsiteSearchTerm'] = termBusq;
    contentPage['onsiteSearchResults'] = cantResult;
    contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
    contentPage['extraFields'] = '';
    window.digitalData = new LideratisLibrary.PageView(contentPage);
    window.pageViewLoad();
    //console.log(contentPage);
    //console.log("ingreso  a la funcion");
};
setTimeout(function() {
    //GRUPO DE PAGINA INICIO Y BUSQUEDA
    if (grupoPag === '') {
        if (templatePage[0] == 'home') {
        //console.log('ingreso a home global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'home';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
        }
        if (templatePage[0] == 'search') {
        //console.log('ingreso a busqueda global');
            if (templatePage[1] == 'search-results') {
                pageID = LideratisHelper.PrefixSuffix('','WLD','Busqueda con resultados');
            }
            if (templatePage[1] == 'search-no-results') {
                pageID = LideratisHelper.PrefixSuffix('','WLD','Busqueda sin resultados');
            }
            categ = 'busqueda';
            atrib = 'producto';
            termBusq = LideratisHelper.URL(4).split('=')[1];
            cantResult = jQuery('div.product').find('div.item-producto').length;
            window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
        }
    }
    //GRUPO DE PAGINA CATEGORIA
    else if (grupoPag == 'productos') {
        //console.log('ingreso a categorias global');
        pageID = LideratisHelper.PrefixSuffix('CAT','WLD',titlePag);
        categ = 'categoria';
        atrib = jQuery('li span.current').text();
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    //GRUPO DE PAGINA PRODUCTO
     else if (grupoPag == 'producto') {
        //console.log('ingreso a producto global');
        pageID = LideratisHelper.PrefixSuffix('PRO','WLD',titlePag);
        categ = 'producto';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    else if (grupoPag == 'promociones') {
        //console.log('ingreso a promociones global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'promociones';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    //GRUPO DE PAGINA MI CUENTA
    else if (grupoPag == 'mi-cuenta') {
        //console.log('ingreso a cuenta global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'cuenta';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    //GRUPO DE PAGINA BLOG
    else if (grupoPag == 'blog') {
        //console.log('ingreso a blog global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'blog';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    //GRUPO DE PAGINA FLUJO DE COMPRA
    else if (grupoPag == 'cart') {
        //console.log('ingreso a carrito global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'carrito';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    else if (grupoPag == 'checkout') {
        //console.log('ingreso a checkout global');
        if (templatePage[3] == 'logged-in') {
            pageID = LideratisHelper.PrefixSuffix('','WLD','facturacion');
        }else{
            pageID = LideratisHelper.PrefixSuffix('','WLD','ingresar');
        }
            categ = 'carrito';
            atrib = '';
            window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
        //GRUPO DE PAGINA ORDER
    else if (grupoPag == 'compra-recibida') {
        //console.log('ingreso a orden');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'orden';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
    //GRUPO DE PAGINA INFORMATIVA
    else{
        //console.log('ingreso a informativa global');
        pageID = LideratisHelper.PrefixSuffix('','WLD',titlePag);
        categ = 'informativa';
        atrib = '';
        window.pageviewFunction(pageID, categ, atrib, termBusq, cantResult);
    }
}, 1200);
    //REDES SOCIALES FACEBBOK - INSTAGRAM
    jQuery('div.contact-foot div.col-md-5 ul.list-unstyled li a').each(function(e) {
        jQuery('div.contact-foot div.col-md-5 ul.list-unstyled li a').eq(e).click(function(i) {
            var ContentConverEvent = new Array();
            var eventName = jQuery(this).text();
            ContentConverEvent['eventName'] = LideratisHelper.PrefixSuffix('','WLD',eventName);
            ContentConverEvent['eventAction'] = '2';
            ContentConverEvent['eventPoints'] = '';
            ContentConverEvent['primaryCategory'] = 'redes sociales';
            ContentConverEvent['exploreAttributes'] = '';
            ContentConverEvent['extraFields'] = '';
            window.digitalData = new LideratisLibrary.ConversionTag(ContentConverEvent);
            window.redesSociales();
            //console.log(ContentConverEvent);
        });
    });
    //REGISTRO NEWSLETTER
    jQuery('#wpcf7-f625-o1').find('span.input-group-btn').find('button.btn').on('click', function(){
        var emailPersona = jQuery('input#e-mail').val();
        setTimeout(function() {
            if (jQuery('div.wpcf7-mail-sent-ok').css('display') == "block") {
                var contentRegistration = new Array();
                contentRegistration['profileID'] = emailPersona ;
                contentRegistration['profileEmail'] = emailPersona ;
                contentRegistration['city'] = '';
                contentRegistration['state_province'] = '';
                contentRegistration['postalcode'] = '';
                contentRegistration['country'] = '';
                contentRegistration['exploreAttributes'] = '';
                digitalData = new LideratisLibrary.RegistrationTag(contentRegistration);
                window.RegistroNewsletter();
            }
        }, 800);
    });
