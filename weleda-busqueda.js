console.log('bienvenido a lideratis - busqueda');
window.agregarCarrito = function() {};
window.detalleProducto = function() {};
window.pageViewLoad = function(){};
window.pageID = '';
window.atrib = '';
window.categ = '';
window.contentProduct = new Array();
window.termBusq = null;
window.cantResult = '0';
window.grupoPag =  LideratisHelper.URL(2).split('/')[1];
window.templatePage = jQuery('body').attr('class').split(' ')
if (templatePage[0] == 'search') {
        jQuery('div.product').find('div.item-producto').find('a.add_to_cart_button').on('click' , function(){
                console.log('add-car');
                var prodID = jQuery(this).attr('data-product_id');
                var categPro = 'busqueda';
                var proName = jQuery(this).parents('div.item-producto').children('div.resNov').children('a').attr('title');
                var proquantity = jQuery(this).attr('data-quantity');
                var PreProReg = jQuery(this).parent('p.add_to_cart_inline').children('del').children('span.amount').text();
                var PreProVen1 = jQuery(this).parent('p.add_to_cart_inline').children('ins').children('span.amount').text();
                var PreProVen2 = jQuery(this).parent('p.add_to_cart_inline').children('span.amount').text();
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
                contentProduct['productID'] = prodID;
                contentProduct['primaryCategory'] = categPro;
                contentProduct['productName'] = proName;
                contentProduct['quantity'] = proquantity;
                contentProduct['price'] = proPriceVenta;
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
        jQuery('#main').find('label:eq(1) span').on('click',function(){
            pageID = 'Busqieda con resultados';
            categ = 'busqueda';
            atrib = 'blog';
            termBusq = LideratisHelper.URL(4).split('=')[1];
            cantResult = jQuery('#main').find('div.grid-producto:eq(0)').children('div').length;
            var attr = new Array();
            attr.push(atrib);
            var contentPage = new Array();
            contentPage['pageId'] = pageID + " | WLD";
            contentPage['primaryCategory'] = categ;
            contentPage['onsiteSearchTerm'] = termBusq;
            contentPage['onsiteSearchResults'] = cantResult;
            contentPage['exploreAttributes'] = attr.join('-_-');
            contentPage['extraFields'] = '';
            window.digitalData = new LideratisLibrary.PageView(contentPage);
            window.pageViewLoad();
            console.log(contentPage);
        });
}
