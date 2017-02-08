//console.log("Ejecucion del Tag Silverpop Version 2");
window.onload = function() {
    window.viewTagFutbol = function() {
        //console.log("funtion Futbol");
    }
    window.viewTagPeru = function() {
        //console.log("funtion peru");
    }
    window.viewTagCelebridades = function() {
        //console.log("funtion celebridades");
    }
    window.viewTagSalud = function() {
        //console.log("funtion salud");
    }
    window.viewTagConsejos = function() {
        //console.log("funtion consejos");
    }
    window.viewTagModa = function() {
        //console.log("funtion moda");
    }
    window.viewTagCine = function() {
        //console.log("funtion cine");
    }
    window.viewTagHoroscopo = function() {
        //console.log("funtion horoscopo");
    }
    //console.log("dentro del window.load");
    if (typeof galleries !== "undefined") {
        var tagsComp = ['futbol', 'peru', 'celebridades', 'salud', 'consejos', 'moda', 'cine', 'horoscopo'];
        setTimeout(function() {
            $.each(galleries, function(n, i) {
                //console.log("EACH");
                if (n.indexOf("gallery_") !== -1) {
                    for (f = 0; f < i.container_ids.length; f++) {
                        //console.log("INICIO DE :" + i.container_ids[f]);
                        if ($.inArray(i.container_ids[f], tagsComp) !== -1) {
                            var tag = i.container_ids[f]
                            //console.log("INICIO: " + tag);
                            if (tag == "futbol") {
                                window.viewTagFutbol();
                            } else if (tag == "peru") {
                                window.viewTagPeru();
                            } else if (tag == "celebridades") {
                                window.viewTagCelebridades();
                            } else if (tag == "salud") {
                                window.viewTagSalud();
                            } else if (tag == "consejos") {
                                window.viewTagConsejos();
                            } else if (tag == "moda") {
                                window.viewTagModa();
                            } else if (tag == "cine") {
                                window.viewTagCine();
                            } else if (tag == "horoscopo") {
                                //console.log("entroo");
                                window.viewTagHoroscopo();
                                //console.log("se ejecuto");
                            }
                        }
                    }
                }
            });
        }, 1200)
    }
}
