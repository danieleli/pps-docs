
var sliderSpeed = 1000;
var slideshowSpeed = 1000;
var delay = 4500;
var play = true;

var c = 1;
var timeout = null;
$(function(){

    if($('#share').length>0)
        $('#share').sharrre({
          share: {
            facebook: true,
            twitter: true,
            linkedin: false,
            googlePlus: false,
            digg: false,
            delicious: false,
            stumbleupon: false
          },
          buttons: {
          
            facebook: { //http://developers.facebook.com/docs/reference/plugins/like/
              url: "http://www.facebook.com/pages/Alpharetta-GA/Priority-Payment-Systems/245476483303",  //if you need to personalize url button
              action: 'like',
              layout: 'button_count',
              width: '90',
              send: 'false',
              faces: '0',
              colorscheme: '',
              font: '',
              lang: 'en_US'
            },
            twitter: {  //http://twitter.com/about/resources/tweetbutton
              url: window.location.href,  //if you need to personalize url button
              count: '',
              via: '',
              hashtags: '',
              typ: 'follow',
              related: '',
              lang: 'en'
            },
            linkedin: {  //http://developer.linkedin.com/plugins/share-button
              url: window.location.href,  //if you need to personalize url button
              counter: 'right'
            }       
          
          
          },
          url: window.location.href,
          title: $("h2").text(),
          enableHover: false,
          enableCounter: false,
          enableTracking: true
        });
    	
    $(".IE6 #gnav li,.IE6 #tabs li").hover(function(){$(this).addClass('hover');}, function(){$(this).removeClass('hover');});
    $('#gnav li,#tabs li').css('cursor','pointer').click(function(e){e.stopPropagation(); if(this.firstChild.href)window.location=this.firstChild.href;});
    $("img.rollover").hover(function(){if(!this.src.match("_on")) this.src=this.src.replace(".gif","_on.gif").replace(".jpg","_on.jpg"); },function(){ this.src=this.src.replace("_on",""); });


    var d = $(".slide").length;
    for( i=0; i<d; i++){
        $("#slideshow div#buttons").append("<div></div>");
    }
    $("#slideshow div#buttons div:eq("+$(".slide.showing").prevAll().length+")").addClass("showing");
    $(".slide:not(.showing)").css("display","none");
    $("#slideshow div#buttons div").click(function(){
        play=false;
        c = $(this).prevAll().length;
        nextSlide();
    });
    timeout = window.setTimeout(nextSlide, delay);
    
    $(".frame:not(.showing)").css("left","400px");
    $("#r").click(function(){
        if($("#b .showing:last-child").length==1)   $("#b .frame:first-child").addClass("next");
        else                                        $("#b .showing").next(   ).addClass("next");
        $("#b .showing").animate({left:-400},sliderSpeed, function(){$(this).css({left:"400px"})}).removeClass("showing");
        $("#b .next"   ).animate({left:   0},sliderSpeed, function(){$(this).css({left:""     })}).removeClass("next").addClass("showing");
    });
    
    $("#l").click(function(){
        if($("#b .showing:first-child").length==1)   $("#b .frame:last-child").addClass("next");
        else                                        $("#b .showing").prev(   ).addClass("next");
        $("#b .showing").css({left:""      }).animate({left: 400},sliderSpeed ).removeClass("showing");
        $("#b .next"   ).css({left:"-400px"}).animate({left:   0},sliderSpeed ).removeClass("next").addClass("showing");
    });
    
    
    	$("a[rel=external]").live("click", function(){this.target="_blank"});
    	$("li a").each(function(){if(this.href==window.location)$(this).parents("li").addClass("active")});
    
    
    
    
});

function nextSlide(){
    var next = $("#slideshow .slide:eq("+c+")");
    if(next.hasClass("showing"))
        return false;
    window.clearTimeout(timeout);

    $("#slideshow div#buttons div.showing").removeClass("showing");
    $("#slideshow div#buttons div:eq("+c+")").addClass("showing");
    $("#slideshow .slide.showing").fadeOut(slideshowSpeed).removeClass("showing");
    $(next                 ).fadeIn( slideshowSpeed,function(){if(play) timeout = window.setTimeout(nextSlide, delay)}).addClass("showing");
    
    if(next.nextAll().length==0) c = 0; else c++;
}
