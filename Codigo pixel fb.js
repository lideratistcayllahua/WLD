$(window).load(function(){
    //inserción
    var nodo = document.createElement("noscript");
    var cont = "<img height='1' width='1' style='display:none' src='https://www.facebook.com/tr?id=1622519241394284&ev=PageView&noscript=1'/>"
    var contenido = document.createTextNode(cont);
    nodo.appendChild(contenido);
    document.getElementsByTagName('head')[0].appendChild(nodo);
    //termino inserción
	$("#agregarcarrito").on('click',function(){
		console.log("addtocart");
		fbq('track', 'AddToCart');
	});
	if(window.location.href == 'http://www.lideratis.com/ddx/fbindex3.phtml'){
		console.log("pagina de purchase");
		var precio = $('#precio').html();
		fbq('track', 'Purchase', {value: precio, currency:'PEN'});
	}
});
