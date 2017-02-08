window.PageView_Click = function() {}
var mensaje = "";
var IdPage = "home | NFTF";
var CatPage = "NFTF: informativo";
$('.btn_video').click(function() {
    setTimeout(function() {
        IdPage = "home | NFTF"
        CatPage = "NFTF: informativo";
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
//--------------------BOTONES DE MENU--------------------
$('#menu li #home, #menu li #sistema, #menu li #pensiones, #menu li #habitat').click(function() {
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        if ($('.page-home').css('opacity') > 0) {
            CatPage = "NFTF: informativo";
            IdPage = "home | NFTF";
        }
        if ($('.p03_01').css('opacity') > 0) {
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_01').css('opacity') > 0) {
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_01').css('opacity') > 0) {
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
//--------------------BOTONES DE PAGINAS LATERALES--------------------
$(document).on("click", "p.btn_next", function() {
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        console.log("next nuevo");
        //SISTEMA DE PENSIONES
        if ($('.p05_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_03').css('opacity') > 0) {
            mensaje = "page 03"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        //ADMINISTRADOR DE PENSIONES
        if ($('.p02_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_03').css('opacity') > 0) {
            mensaje = "page 03"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_07').css('opacity') > 0) {
            mensaje = "page 07"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_08').css('opacity') > 0) {
            mensaje = "page 08"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        //AFP HABITAT
        if ($('.p03_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_03').css('opacity') > 0) {
            mensaje = "page 03"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_07').css('opacity') > 0) {
            mensaje = "page 07"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        console.log(mensaje);
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "p.btn_prev", function() {
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        console.log("prev nuevo");
        //SISTEMA DE PENSIONES
        if ($('.p05_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_03').css('opacity') > 0) {
            mensaje = "page 03"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p05_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        //ADMINISTRADOR DE PENSIONES
        if ($('.p02_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_03').css('opacity') > 0) {
            mensaje = "page 03";
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_07').css('opacity') > 0) {
            mensaje = "page 07"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p02_08').css('opacity') > 0) {
            mensaje = "page 08"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        //AFP HABITAT
        if ($('.p03_01').css('opacity') > 0) {
            mensaje = "page 01"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_02').css('opacity') > 0) {
            mensaje = "page 02"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_03').css('opacity') > 0) {
            mensaje = "page 03"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_04').css('opacity') > 0) {
            mensaje = "page 04"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_05').css('opacity') > 0) {
            mensaje = "page 05"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_06').css('opacity') > 0) {
            mensaje = "page 06"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        if ($('.p03_07').css('opacity') > 0) {
            mensaje = "page 07"
            CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
            IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        }
        console.log(mensaje);
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
//--------------------BOTONES DE PAGINAS INFERIOR--------------------
$(document).on("click", "#p_1", function() {
    console.log('boton: 1');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_2", function() {
    console.log('boton: 2');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_3", function() {
    console.log('boton: 3');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_4", function() {
    console.log('boton: 4');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_5", function() {
    console.log('boton: 5');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_6", function() {
    console.log('boton: 6');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_7", function() {
    console.log('boton: 7');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#p_8", function() {
    console.log('boton: 8');
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
        IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
        console.log(CatPage);
        console.log(IdPage);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
/*Click Imagenes Videos*/
$(document).on("click", "#video01", function() {
    var texto = $(this).find('.des_video').text().trim();
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        var IdPage2 = 'Video - ' + texto + ' | NFTF';
        var CatPage2 = 'NFTF: informativo';
        console.log(CatPage2);
        console.log(IdPage2);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage2,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage2
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#video02", function() {
    var texto = $(this).find('.des_video').text().trim();
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        var IdPage2 = 'Video - ' + texto + ' | NFTF';
        var CatPage2 = 'NFTF: informativo';
        console.log(CatPage2);
        console.log(IdPage2);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage2,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage2
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#video03", function() {
    var texto = $(this).find('.des_video').text().trim();
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        var IdPage2 = 'Video - ' + texto + ' | NFTF';
        var CatPage2 = 'NFTF: informativo';
        console.log(CatPage2);
        console.log(IdPage2);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage2,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage2
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
$(document).on("click", "#video04", function() {
    var texto = $(this).find('.des_video').text().trim();
    clearTimeout(window.setTime);
    window.setTime = setTimeout(function() {
        var IdPage2 = 'Video - ' + texto + ' | NFTF';
        var CatPage2 = 'NFTF: informativo';
        console.log(CatPage2);
        console.log(IdPage2);
        window.digitalData = {
            page: {
                pageInfo: {
                    pageID: IdPage2,
                    onsiteSearchTerm: '',
                    onsiteSearchResults: 0
                },
                category: {
                    primaryCategory: CatPage2
                },
                attributes: {
                    exploreAttributes: '',
                    extraFields: ''
                }
            }
        };
        console.log(window.digitalData);
        window.PageView_Click();
    }, 1500);
});
/*---------------------*/
var urlHash = window.location.hash;
/*if (urlHash == '#/') {
    IdPage = 'Portada';
}*/
if (urlHash.indexOf('#/administradora-pensiones/') > -1) {
    IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
    CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
} else if (urlHash.indexOf('#/afp-habitat/') > -1) {
    IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
    CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
} else if (urlHash.indexOf('#/sistema-pensionario/') > -1) {
    IdPage = $(location).attr('href').split("/")[5].split('?')[0] + ' | NFTF';
    CatPage = 'NFTF: ' + $(location).attr('href').split("/")[4];
} else if (urlHash.indexOf('#/video/') > -1) {
    IdPage = $(location).attr('href').split('/').pop().substr(0, 1) + ' | NFTF';
}
window.digitalData = {
    page: {
        pageInfo: {
            pageID: IdPage,
            onsiteSearchTerm: '',
            onsiteSearchResults: 0
        },
        category: {
            primaryCategory: CatPage
        },
        attributes: {
            exploreAttributes: '',
            extraFields: ''
        }
    }
};
/*Video Element*/
//window.obtenerPause= function() {
/*var min = parseInt(window.pauseTime.split(':')[0] * 60);
var segu = parseInt(window.pauseTime.split(':')[1])
var totalSeg = min + segu;
var atributo = '-_--_--_--_--_--_--_--_--_--_--_--_-0-_-' + totalSeg + '-_-190'*/
//  var atributo = "-_--_-12";
//return atributo;
//}
//var tituloVideo = 'video - ' + $(location).attr('href').split('/').pop();
//window.var_atributo = window.obtenerPause();
/*window.digitalData = {
    component: [{
        componentInfo: {
            componentID: 'Video - nombre'
        },
        category: {
            primaryCategory: 'Play'
        },
        attributes: {
            exploreAttributes: ,
        }
    }]
};*/
