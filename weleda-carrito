console.log('bienvenido a lideratis - carro');
window.pageID = '';
window.atrib = '';
window.categ = '';
window.listarProdIterator = function(){};
window.RegistroCuenta = function(){};
window.pageviewFlujoCompras = function(){};
window.listarProductos = function(){
        console.log('Ingreso a listador de productos');
        LideratisLibrary.initShopAction5Content();
        jQuery('table.shop_table').find('tr.cart_item').each(function (e) {
                jQuery(this).find('td.product-remove').each(function (i) {
                        var proList = [];
                        var ind = e;
                        var attrProList = new Array();
                        var prodID = jQuery(this).find('a').attr("data-product_id");
                        var proNombre = jQuery(this).parent('tr.cart_item').children('td.product-name').find('a:eq(0)').text();
                        var proCant = jQuery(this).parent('tr.cart_item').children('td.product-quantity').find('input.input-text').val();
                        var proPrecio = LideratisHelper.NumberOfDecimal(LideratisHelper.Price(jQuery(this).parent('tr.cart_item').children('td.product-price').find('span.amount').text(),'S/.',''), '2');
                        attrProList.push('');
                        attrProList.push('weleda');
                        attrProList.push('');
                        proList["index"] = ind;
                        proList["productID"] = prodID;
                        proList["productName"] = proNombre;
                        proList["quantity"] = proCant;
                        proList["primaryCategory"] = 'No definido';
                        proList["price"] = proPrecio;
                        proList["exploreAttributes"] = LideratisHelper.AttributesJoin(attrProList,'-_-');
                        console.log(proList);
                        LideratisLibrary.ShopAction5Content(proList);
                });
        });
                        window.digitalData.cart = {'item': new LideratisLibrary.ShopAction5()};
                        window.listarProdIterator();
};
jQuery(document).ready(function(){
        window.grupoPag =  LideratisHelper.URL(2).split('/')[1];
        window.templatePage = jQuery('body').attr('class').split(' ');
        window.pageID = '';
        window.atrib = '';
        window.categ = '';
        window.emailPersona = '';
        window.ciudadPersona = '';
        window.provinciaPersona = '';
        window.codpostalPersona = '';
        window.paisPersona = '';
        window.nombrePersona = '';
        window.apellidoPersona = '';
        window.telefonoPersona = '';
        window.direccionPeronsa = '';
        if (grupoPag == 'cart') {
                setTimeout(function(){
                        window.listarProductos();
                },1500);
        }
        else if (grupoPag == 'checkout') {
            console.log('*ingreso al checkout*');
            //BTN SIGUIENTE - PAGEVIEW DENTRO DEL CHECKOUT
            jQuery('div#pluginator-checkout-steps-wizard').children('div.actions').children('ul').children('li:eq(1)').on('click',function(){
                setTimeout(function() {
                    jQuery('div.content').find('div.body').each(function (e){
                        if(jQuery(this).css('display') == 'block'){
                            pageID = jQuery(this).siblings('h1.current').text();
                            categ = 'carrito';
                            var contentPage = new Array();
                            contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
                            contentPage['primaryCategory'] = categ;
                            contentPage['onsiteSearchTerm'] = '';
                            contentPage['onsiteSearchResults'] = '0';
                            contentPage['exploreAttributes'] = '';
                            contentPage['extraFields'] = '';
                            window.digitalData = new LideratisLibrary.PageView(contentPage);
                            window.pageviewFlujoCompras();
                        }
                    });
                }, 500);
            });
            //BTN ANTERIOR - PAGEVIEW DENTRO DEL CHECKOUT
            jQuery('div#pluginator-checkout-steps-wizard').children('div.actions').children('ul').children('li:eq(0)').on('click',function(){
                setTimeout(function() {
                    jQuery('div.content').find('div.body').each(function (e){
                        if(jQuery(this).css('display') == 'block'){
                            pageID = jQuery(this).siblings('h1.current').text();
                            categ = 'carrito';
                            var contentPage = new Array();
                            contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
                            contentPage['primaryCategory'] = categ;
                            contentPage['onsiteSearchTerm'] = '';
                            contentPage['onsiteSearchResults'] = '0';
                            contentPage['exploreAttributes'] = '';
                            contentPage['extraFields'] = '';
                            window.digitalData = new LideratisLibrary.PageView(contentPage);
                            window.pageviewFlujoCompras();
                        }
                    });
                }, 500);
            });
            //MENU DE PAGINAS
            jQuery('div.steps ul li a').each(function() {
                jQuery(this).on('click', function (){
                    console.log('click menu');
                    if (jQuery(this).parent('li').attr('aria-selected') == 'true') {
                        pageID = jQuery(this).find('span.pluginator-checkout-steps-wizard-step-title').text();
                        categ = 'carrito';
                        console.log(pageID);
                        console.log(categ);
                        var contentPage = new Array();
                        contentPage['pageId'] = LideratisHelper.PrefixSuffix('','WLD',pageID);
                        contentPage['primaryCategory'] = categ;
                        contentPage['onsiteSearchTerm'] = '';
                        contentPage['onsiteSearchResults'] = '0';
                        contentPage['exploreAttributes'] = '';
                        contentPage['extraFields'] = '';
                        window.digitalData = new LideratisLibrary.PageView(contentPage);
                        window.pageviewFlujoCompras();
                    }
                });
            });
            //PRIMER REGISTRO
            jQuery('div#pluginator-checkout-steps-wizard').children('div.clearfix').find('div.form-group:eq(2)').on('click',function(){
                    console.log('click primer registro');
                    emailPersona = jQuery('input#username').val();
                    var contentRegistration = new Array();
                    contentRegistration['profileID'] = emailPersona ;
                    contentRegistration['profileEmail'] = emailPersona ;
                    contentRegistration['city'] = '';
                    contentRegistration['state_province'] = '';
                    contentRegistration['postalcode'] = '';
                    contentRegistration['country'] = '';
                    contentRegistration['exploreAttributes'] = '';
                    digitalData = new LideratisLibrary.RegistrationTag(contentRegistration);
                    window.RegistroCuenta();
            });
            //SEGUNDO REGISTRO
            jQuery('div#pluginator-checkout-steps-wizard').children('div.actions').children('ul').children('li:eq(1)').on('click',function(){
                var title = jQuery('div.content').find('div.body').siblings('h1.current').text();
                if(title == 'Detalles del Envío'){
                    if (jQuery('.pluginator-invalid-email').length === 0) {
                        emailPersona = jQuery('input#billing_email').val();
                        ciudadPersona = jQuery('input#billing_city').val();
                        provinciaPersona = jQuery('#billing_state option:selected').text();
                        codpostalPersona = jQuery('input#billing_postcode').val();
                        paisPersona = jQuery('#billing_country option:selected').text();
                        nombrePersona = jQuery('input#billing_first_name').val();
                        apellidoPersona = jQuery('input#billing_last_name').val();
                        telefonoPersona = jQuery('input#billing_phone').val();
                        direccionPeronsa = jQuery('input#billing_address_1').val();
                        var attrRegistro = new Array();
                        attrRegistro.push(nombrePersona);
                        attrRegistro.push(apellidoPersona);
                        attrRegistro.push(telefonoPersona);
                        attrRegistro.push(direccionPeronsa);
                        var contentRegistration = new Array();
                        contentRegistration['profileID'] = emailPersona ;
                        contentRegistration['profileEmail'] = emailPersona ;
                        contentRegistration['city'] = ciudadPersona;
                        contentRegistration['state_province'] = provinciaPersona;
                        contentRegistration['postalcode'] = codpostalPersona;
                        contentRegistration['country'] = paisPersona;
                        contentRegistration['exploreAttributes'] = LideratisHelper.AttributesJoin(attrRegistro,'-_-');
                        digitalData = new LideratisLibrary.RegistrationTag(contentRegistration);
                        window.RegistroCuenta();
                        console.log(digitalData);
                    }
                }
            });
        }
});
