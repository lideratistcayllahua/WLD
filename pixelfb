console.log("PIXEL FB2");
/*
$(document).on("button#eventoPageView","click",function(){
alert("boton pv");
})*/
 document.getElementById("eventoPageView").onclick = function(){
        console.log("evento click");
      fbq('trackCustom', 'eventoClick', {
      content_name: 'Really Fast Running Shoes',
      content_category: 'Apparel Shoes',
      content_ids: ['1234'],
      content_type: 'product',
      value: '4.99',
      currency: 'USD'
    });
    }
window.addToCartButton = function(){}
document.getElementById("addToCartButton").onclick = function(){
        console.log("evento click custom");
        	window.addToCartButton();
    }
