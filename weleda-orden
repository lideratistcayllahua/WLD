console.log('bienvenido a lideratis - orden');
window.pageID = '';
window.atrib = '';
window.categ = '';
window.listarProdIterator9 = function(){};
window.cargarOrderTag = function(){};
window.listarProductosShopAct9 = function(){
        console.log('Ingreso a listador de productos');
        LideratisLibrary.initShopAction9Content();
        jQuery('table.order_details').find('tr.order_item').each(function (e) {
                        var proList = [];
                        var ind = e;
                        var attrProList = new Array();
                        var prodID = 'indice' +ind;
                        var proNombre = jQuery(this).find('td.product-name').find('a').text();
                        var proCant = LideratisHelper.Price(jQuery(this).find('td.product-name').find('strong.product-quantity').text(),'× ','');
                        var proPrecio = LideratisHelper.NumberOfDecimal(LideratisHelper.Price(jQuery(this).find('td.product-total').find('span.amount').text(),'S/.',''), '2');
                        attrProList.push('');
                        attrProList.push('weleda');
                        attrProList.push('');
                        proList["index"] = ind;
                        proList["productID"] = 'indice' + ind;
                        proList["productName"] = proNombre;
                        proList["quantity"] = proCant;
                        proList["primaryCategory"] = 'No definido';
                        proList["price"] = proPrecio;
                        proList["exploreAttributes"] = LideratisHelper.AttributesJoin(attrProList,'-_-');
                        console.log(proList);
                        LideratisLibrary.ShopAction9Content(proList);
        });
        var orderID = jQuery('ul.order_details').children('li.order').children('strong').text();
        var preTotal = LideratisHelper.NumberOfDecimal(LideratisHelper.Price(jQuery('ul.order_details').children('li.total').children('strong').text(),'S/.',''), '2');
        var preShipping = LideratisHelper.NumberOfDecimal(LideratisHelper.Price(jQuery('span.amount:eq(5)').text(),'S/.',''), '2');
        var personaID = jQuery('ul.order_details').children('li.email').children('strong').text();
        var city = jQuery('div.addresses').find('address:eq(0)').html().split('<br>')[2];
        var prov = jQuery('div.addresses').find('address:eq(0)').html().split('<br>')[3];
        var attr = new Array();
        var medioPAgo = jQuery('ul.order_details').children('li.method').children('strong').text();
        var tipoEnvio = jQuery('ul.order_details').children('li.shipping').children('strong').text();
        attr.push(medioPAgo);
        attr.push(tipoEnvio);
        var ListaOrden = new Array();
        ListaOrden["transactionID"] = orderID;
        ListaOrden["basePrice"] = preTotal;
        ListaOrden["shipping"] = preShipping;
        ListaOrden["city"] = city;
        ListaOrden["state_province"] = prov;
        ListaOrden["profileID"] = personaID;
        ListaOrden["item"] = new LideratisLibrary.ShopAction9();
        ListaOrden['exploreAttributes'] = attr.join('-_-');
        var Order = LideratisLibrary.OrdenTag(ListaOrden);
        window.digitalData.transaction = Order;
        console.log(digitalData);
        window.listarProdIterator9();
        window.cargarOrderTag();
};
jQuery(document).ready(function(){
        window.grupoPag =  LideratisHelper.URL(2).split('/')[1];
        if (grupoPag == 'compra-recibida') {
                setTimeout(function(){
                        window.listarProductosShopAct9();
                },1500);
        }
});
