console.log("CONTACTO BEFORE");
window.guardarDatosContactenos = function() {}
$(document).ready(function() {
    //window.loadPageView  = function(){ console.log("FUNCION LLAMADA"); }
    console.log("CONTACTO");
    pageView = [];
    pageView["pageId"] = window.prefijo + document.title.trim().split('|')[1] + window.sufijo;
    pageView["primaryCategory"] = "contacto";
    digitalData = window.LideratisLibrary.PageView(pageView);
    //console.log(digitalData);
    /*Evento click Formulario*/
    $('button').on('click', function() {
        var cantError = $('.error').length;
        //if (cantError > -1) {
        var nombre = $('.val1').val();
        var correo = $('.val2').val();
        var mensaje = $('.val3').val();
        setTimeout(function() {
            //console.log(nombre + "-" + correo + "-" + mensaje);
            if (correo != '') {
                var atrib = new Array();
                for (var i = 0; i < 19; i++) {
                    atrib.push('');
                }
                atrib.push(nombre);
                atrib.push(correo);
                //atrib.push(mensaje);
                var eventAction = '2';
                //console.log("ERROR LENGTH "+$(".error").length);
                if ($(".error").length != 0) {
                    eventAction = '1';
                }
                window.digitalData = {
                    event: [{
                        eventInfo: {
                            eventName: 'Revista 15 Minutos Perú | Enviar' + window.sufijo,
                            eventAction: eventAction,
                            eventPoints: '0'
                        },
                        category: {
                            primaryCategory: 'Contactanos'
                        },
                        attributes: {
                            exploreAttributes: atrib.join('-_-'),
                            extraFields: ''
                        }
                    }]
                };
                guardarDatosContactenos();
            };
        }, 1000);
        //};
    });
});
