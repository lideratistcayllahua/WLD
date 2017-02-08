window.ConvEvent_RedSocial = function() {}
var RedSocial="";
$('#menu a.ico_twitter, #menu a.ico_facebook, #menu a.ico_youtube').click(function(){
    switch(this.href){
        case 'https://twitter.com/AFPHabitatPeru' : {
        RedSocial="twitter | NFTF";
        }break;
        case 'https://www.facebook.com/afphabitatperu?fref=ts' : {
        RedSocial="facebook | NFTF";
        } break;
        case 'https://www.youtube.com/channel/UCEDfWWHWfiHsY_SM7NzM2lQ' : {
         RedSocial="youtube | NFTF";
        } break;
    }
    console.log(RedSocial);
window.digitalData = {
        event:[{
            eventInfo:{
                eventName:RedSocial,
                eventAction:'2',
                eventPoints:''
                   },
            category:{
                primaryCategory:'NFTF: redes-sociales'
                          },
            attributes:{
                        exploreAttributes:'',
                extraFields:''
                     }
            }]
             };
console.log(window.digitalData);
window.ConvEvent_RedSocial();
});
