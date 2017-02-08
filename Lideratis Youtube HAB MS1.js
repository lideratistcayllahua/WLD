console.log("Youtube v2.0");
$("#video01 .play").on("click",function(){
console.log("llamada yt");
var script = document.createElement("script");
      var javascript = "var player;"+
                        "function onYouTubeIframeAPIReady() { "+
                          "player = new YT.Player('video', {/* "+
                            "height: '390', "+
                            "width: '640', "+
                            "videoId: 'M7lc1UVf-VE',*/ "+
                            "events: { "+
                              "'onReady': onPlayerReady, "+
                              "'onStateChange': onPlayerStateChange "+
                            "} "+
                          "}); "+
                        "} "+
                        "function onPlayerReady(event) { "+
                          "event.target.playVideo(); "+
                        "} "+
                        "var done = false; "+
                        "function onPlayerStateChange(event) { "+
                          "if(event.data==YT.PlayerState.PAUSED){ "+
                            "console.log('pause'); "+
                          "}else if(event.data==YT.PlayerState.PLAYING){ "+
                            "console.log('play'); "+
                          "} "+
                        "} "+
                        "var done = false; "+
                        "function onPlayerStateChange(event) { "+
                            "if(event.data==YT.PlayerState.PAUSED){ "+
                              "console.log('pause'); "+
                            "}else if(event.data==YT.PlayerState.PLAYING){ "+
                              "console.log('play'); "+
                            "} "+
                          "} "+
                          "function stopVideo() { "+
                            "console.log('stop'); "+
                            "player.pauseVideo(); "+
                            ""+
                          "} ";
      var t = document.createTextNode(javascript);
      script.appendChild(t);
      document.body.appendChild(script);
});
