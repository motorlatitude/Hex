(function ( $ ) {		  
    $.fn.hex = function( options ) {
        var settings = $.extend({
          show: true,
          direction: "right",
          background: "#eee",
          duration: 10,
          delay: 0,
          callback: function() {}
        }, options );
      
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var uid = randLetter + Date.now();
        
        if($(".hexagon",this).length > 0){
            uid = $(".hexagon",this).attr('class').split(/\s+/)[0].replace("hex","");
        }
        else{
          if(!settings.show){
            $("html head").append("<style type='text/css'>.hex"+uid+":before {content: ''; width: 0; height: 0; border-bottom: 12px solid "+settings.background+"; border-left: 22px solid transparent; border-right: 22px solid transparent; position: absolute; top: -12px;} .hex"+uid+" {z-index: inherit; display: none; opacity: 0; margin-top: 12px; width: 44px; height: 25px; background-color: "+settings.background+"; position: absolute; top: 300px; margin-left: 1px;} .hex"+uid+":after { content: ''; width: 0; position: absolute; bottom: -12px; border-top: 12px solid "+settings.background+"; border-left: 22px solid transparent; border-right: 22px solid transparent;}</style>");
          }
          else{
            $("html head").append("<style type='text/css'>.hex"+uid+":before {content: ''; width: 0; height: 0; border-bottom: 12px solid "+settings.background+"; border-left: 22px solid transparent; border-right: 22px solid transparent; position: absolute; top: -12px;} .hex"+uid+" {z-index: inherit; margin-top: 12px; width: 44px; height: 25px; background-color: "+settings.background+"; position: absolute; top: 300px; margin-left: 1px;} .hex"+uid+":after { content: ''; width: 0; position: absolute; bottom: -12px; border-top: 12px solid "+settings.background+"; border-left: 22px solid transparent; border-right: 22px solid transparent;}</style>");
          }
        
          $(this).each(function(index){
            var w = $(this).width();
            var h = $(this).height();
            var a = Math.ceil((w/40))*Math.ceil((h/25));
            var x = -30;
            var y = -30;
            var r = 0;
            var r_y= 0;
            for(var i=0;i<a;i++){
              if(r_y>Math.ceil(w/40)){
                r++;
                r_y = 0;
              }
              if(r%2 == 0){
                $(this).append("<div class='hex"+uid+" hexagon' style='margin-left: 23px; top:"+(y+(36*r))+"px; left:"+(x+(44*r_y))+"px;'></div>");
              }
              else{
                $(this).append("<div class='hex"+uid+" hexagon' style='top:"+(y+(36*r))+"px; left:"+(x+(44*r_y))+"px;'></div>");
              }

              r_y++;
            }
          });
        }

        $(this).each(function(index){
           $(".hex"+uid,this).each(function(){
             if(settings.direction == "right"){
               var d = parseInt($(this).css("left"));
             }
             else if(settings.direction == "left"){
               var d = parseInt($(this).parent().width()) - parseInt($(this).css("left"));
             }
             else if(settings.direction == "up"){
               var d = $(this).parent().height() - $(this).offset().top;
             }
             else if(settings.direction == "down"){
               var d = $(this).offset().top;
             }
             else if(settings.direction == "random"){
               var d = Math.random()*200;
             }
             else if(settings.direction == "center"){
               var w = parseInt($(this).parent().width())/2;
               var l = parseInt($(this).css("left"));
               var h = parseInt($(this).parent().height())/2;
               var top = parseInt($(this).css("top"));
               if(l>w){
                 if(top>h){
                   var d = parseInt(l) - parseInt(w) + top;
                 }
                 else{
                   var d = parseInt(l) - parseInt(w) - top;
                 }
               }else{
                 if(top>h){
                   var d = parseInt(w) - parseInt(l) - top;
                 }
                 else{
                   var d = parseInt(w) - parseInt(l) - top;
                 }
               }
             }
             if(settings.duration <= 0){
               settings.duration = 1;
             }     
             if(settings.delay < 0){
               settings.delay = 1;
             }
             var t = settings.delay + (d*settings.duration*Math.random());
             if(!settings.show){
               $(this).css("display","block");
               $(this).delay(t).animate({
                 opacity: 1
               }, 600, function(){
                var c = 0;
                $(".hex"+uid).each(function(){
                  if($(this).css("opacity") == 1){
                    c++;
                  }
                });
                if(c >= $(".hex"+uid).length){
                  settings.callback.call(this);
                }
               });
             }
             else{
               $(this).delay(t).animate({
                 opacity: 0
               }, 600, function(){
                $(this).css("display","none"); 
                $(this).remove();
                if($(".hex"+uid).length>0){

                }
                else{
                  settings.callback.call(this);
                }
              });
             }
           });
        });
    };
 
}( jQuery ));
