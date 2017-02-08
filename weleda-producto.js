console.log('bienvenido a lideratis - producto v2.6');
window.agregarCarrito = function() {};
window.productotag = function() {};
//window.detalleProducto = function() {};
window.pageViewLoad = function() {};
window.productTabs = function() {};
window.pageID = '';
window.atrib = '';
window.categ = '';
window.grupoPag =  LideratisHelper.URL(2).split('/')[1];
window.templatePage = jQuery('body').attr('class').split(' ');
if (grupoPag == 'producto') {
    jQuery(document).ready(function(){
            console.log('load producto');
            var prodID = jQuery('#content').find('form.cart').find('div.cnt-btn-add').children('input').attr('value');
            var categPro = 'por definir';
            var proName = jQuery('#content').find('div.summary').children('h1.product_title').text();
            var proquantity = jQuery('#content').find('div.row').find('div.cantidad').find('div.quantity').find('input.input-text').val();
            var PreProReg = jQuery('#content').find('form.cart').find('p.price').children('del').children('span.amount').text();
            var PreProVen1 = jQuery('#content').find('form.cart').find('p.price').children('ins').children('span.amount').text();
            var PreProVen2 = jQuery('#content').find('form.cart').find('p.price').children('span.amount').text();
            //Limpiando Valor del Precio del Producto
            console.log('prodID: '+ prodID);
            console.log('categPro: '+ categPro);
            console.log('proName: '+ proName);
            console.log('proquantity: '+ proquantity);
            console.log('PreProReg: '+ PreProReg);
            console.log('PRPreProVen1OID: '+ PreProVen1);
            console.log('PreProVen2: '+ PreProVen2);
            var PreRegularPro = LideratisHelper.Price(PreProReg ,'S/.','');
            var PreVenta1Pro = LideratisHelper.Price(PreProVen1 ,'S/.','');
            var PreVenta2Pro = LideratisHelper.Price(PreProVen2 ,'S/.','');
            //Formateando Decimales Valor del Precio Producto
            var proPriceRegular = LideratisHelper.NumberOfDecimal(PreRegularPro, '2');
            var proPriceVenta = LideratisHelper.NumberOfDecimal(PreVenta1Pro, '2');
            var proPriceVentaU = LideratisHelper.NumberOfDecimal(PreVenta2Pro, '2');
            window.attr = new Array();
            if (proPriceRegular !== 'NaN') {
            attr.push(proPriceRegular);
            }else{
            attr.push('');
            }
            attr.push('');
            if (proPriceVenta !== 'NaN') {
             var ProPriceVentaFinal = proPriceVenta;
            }else{
             var ProPriceVentaFinal = proPriceVentaU;
            }
            var productViewList = new Array();
            productViewList['productID'] = prodID;
            productViewList['productName'] = proName;
            productViewList['primaryCategory'] = categPro;
            productViewList['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
            window.digitalData = new LideratisLibrary.ProductView(productViewList);
            console.log(digitalData);
            var contador = 0;
            window.interval = setInterval(function(){
                contador++;
                console.log("CONTADOR: "+(contador*0.5));
                window.productotag();
                if(contador==10)
                    clearInterval(window.interval);
            },500);
            //window.detalleProducto();
            //console.log("entro");
    });
    jQuery('#content').find('form.cart').find('button.single_add_to_cart_button').on('click' , function(){
        console.log('add-car');
        var prodID = jQuery(this).parent('div.cnt-btn-add').children('input').attr('value');
        var categPro = 'por definir';
        var proName = jQuery(this).parents('div.summary').children('h1.product_title').text();
        var proquantity = jQuery(this).parents('div.row').find('div.cantidad').find('div.quantity').find('input.input-text').val();
                var PreProReg = jQuery(this).parents('form.cart').find('p.price').children('del').children('span.amount').text();
                var PreProVen1 = jQuery(this).parents('form.cart').find('p.price').children('ins').children('span.amount').text();
                var PreProVen2 = jQuery(this).parents('form.cart').find('p.price').children('span.amount').text();
                //Limpiando Valor del Precio del Producto
                var PreRegularPro = LideratisHelper.Price(PreProReg ,'S/.','');
                var PreVenta1Pro = LideratisHelper.Price(PreProVen1 ,'S/.','');
                var PreVenta2Pro = LideratisHelper.Price(PreProVen2 ,'S/.','');
                //Formateando Decimales Valor del Precio Producto
                var proPriceRegular = LideratisHelper.NumberOfDecimal(PreRegularPro, '2');
                var proPriceVenta = LideratisHelper.NumberOfDecimal(PreVenta1Pro, '2');
                var proPriceVentaU = LideratisHelper.NumberOfDecimal(PreVenta2Pro, '2');
                window.attr = new Array();
                if (proPriceRegular !== 'NaN') {
                attr.push(proPriceRegular);
                }else{
                attr.push('');
                }
                attr.push('');
                if (proPriceVenta !== 'NaN') {
                 var ProPriceVentaFinal = proPriceVenta;
                }else{
                 var ProPriceVentaFinal = proPriceVentaU;
                }
                var contentProduct = new Array();
                contentProduct['productID'] = prodID;
                contentProduct['primaryCategory'] = categPro;
                contentProduct['productName'] = proName;
                contentProduct['quantity'] = proquantity;
                contentProduct['price'] = ProPriceVentaFinal;
                contentProduct['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
                var productViewList = new Array();
                productViewList['productID'] = prodID;
                productViewList['productName'] = proName;
                productViewList['primaryCategory'] = categPro;
                productViewList['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
                console.log(contentProduct);
                console.log(productViewList);
                contentProductView = new LideratisLibrary.ProductView(productViewList);
                window.digitalData = new LideratisLibrary.ShopAction5_BtnClick(contentProduct);
                window.digitalData.product = [contentProductView.product[0]];
                agregarCarrito();
                window.detalleProducto();
                console.log(digitalData);
    });
    //CLICK COSTO DE ENVIO
    jQuery('a.inline-popups').on('click', function(){
            pageID = 'costo de envio';
            categ = 'producto';
            atrib = '';
            var attr = new Array();
            attr.push(atrib);
            var contentPage = new Array();
            contentPage['pageId'] = LideratisHelper.PrefixSuffix('POP UP:','WLD',pageID);
            contentPage['primaryCategory'] = categ;
            contentPage['onsiteSearchTerm'] = termBusq;
            contentPage['onsiteSearchResults'] = cantResult;
            contentPage['exploreAttributes'] = LideratisHelper.AttributesJoin(attr,'-_-');
            contentPage['extraFields'] = '';
            window.digitalData = new LideratisLibrary.PageView(contentPage);
            window.pageViewLoad();
            console.log(contentPage);
    });
   jQuery('UL.wc-tabs').find('li').each(function() {
        jQuery(this).on('click', function (){
            console.log('click sub_menu_producto');
                elemetPRO = jQuery(this).children('a').text();
                eventName = jQuery('#content').find('form.cart').find('div.cnt-btn-add').children('input').attr('value');
                categ = 'producto';
                var attrElement = new Array();
                attrElement.push('-_-');
                attrElement.push(elemetPRO);
                var ContentConverEvent = new Array();
                ContentConverEvent['eventName'] = LideratisHelper.PrefixSuffix('PRO','WLD',eventName);
                ContentConverEvent['eventAction'] = '1';
                ContentConverEvent['eventPoints'] = '';
                ContentConverEvent['primaryCategory'] = 'producto';
                ContentConverEvent['exploreAttributes'] = LideratisHelper.AttributesJoin(attrElement,'-_-');
                ContentConverEvent['extraFields'] = '';
                window.digitalData = new LideratisLibrary.ConversionTag(ContentConverEvent);
                window.productTabs();
        });
    });
}
