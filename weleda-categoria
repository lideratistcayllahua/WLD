console.log('bienvenido a lideratis - categoria');
window.agregarCarrito = function() {};
window.detalleProducto = function() {};
window.pageID = '';
window.atrib = '';
window.categ = '';
window.contentProduct = new Array();
window.grupoPag =  LideratisHelper.URL(2).split('/')[1];
window.templatePage = jQuery('body').attr('class').split(' ');
if (grupoPag == 'productos') {
        jQuery('#content').children('ul.products').children('li.product').children('a.add_to_cart_button').on('click', function() {
                console.log('add-car');
                var prodID = jQuery(this).attr('data-product_id');
                var categPro = 'por definir';
                var proName = jQuery(this).parent('li.product').children('a:eq(0)').children('h4').text();
                var proquantity = jQuery(this).attr('data-quantity');
                var PreProReg = jQuery(this).parent('li.product').children('a:eq(0)').children('span.price').children('del').children('span.amount').text();
                var PreProVen1 = jQuery(this).parent('li.product').children('a:eq(0)').children('span.price').children('ins').children('span.amount').text();
                var PreProVen2 = jQuery(this).parent('li.product').children('a:eq(0)').children('span.price').children('span.amount').text();
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
                contentProduct['productName'] = proName;
                contentProduct['quantity'] = proquantity;
                contentProduct['price'] = ProPriceVentaFinal;
                contentProduct['primaryCategory'] = categPro;
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
}
