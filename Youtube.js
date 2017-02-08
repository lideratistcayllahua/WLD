window.youtube = function(){};
window.youtube();
      setTimeout(function(){
      var tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementById('new');
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      var script = document.createElement("script");
      var javascript = "var player;"+
                        "function onYouTubeIframeAPIReady() { "+
                          "player = new YT.Player('player', {/* "+
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
      console.log("HOLA nuevo yt");
      },1400);
