/*---------  Backstretch -------*/

$(function() {
 $.backstretch([
"img/background.png"
, "img/background2.png"
, "img/background3.png"
, "img/background4.png"

], {duration: 3000, fade: 2000});
});

/*---------  Video Hover and Popup -------*/

$(function() {
	$(".video ")
	.find("span")
	.hide()
	.end()
	.hover(function() {
		$(this).find("span").stop(true, true).fadeIn();
		
	}, function() {
		$(this).find("span").stop(true, true).fadeOut();
	});
});
 

/*--------- Subscriber Fixed nav -------*/
 
$(document).ready(function() {
    var s = $(".sub-wrap");
    var pos = s.position();                   
    $(window).scroll(function() {
        var windowpos = $(window).scrollTop();
        
        if (windowpos >= pos.top) {
            s.addClass("stick");
$("#subscriber").addClass("suby", "0");			 
$(".main-content").addClass("suby2");			 
$(".scroll-top").fadeIn("300");			 
 		 
        } else {
            s.removeClass("stick");
			$("#subscriber").removeClass("suby", "0");
			 $(".main-content").removeClass("suby2");			 
$(".scroll-top").fadeOut("300");			 

        }
    });
});


/*--------- Features Hover  -------*/

$(document).ready(function(){
$(".featu").hover(
function() {
$(".icon", this).toggleClass("icon-hover", 300);
$(this).toggleClass("featu-hover", 300);

},
function() {
$(".icon", this).toggleClass("icon-hover", 300);
$(this).toggleClass("featu-hover", 300);
});

});


/*--------- Tabbed Section  -------*/

$(function() {$( "#tabs" ).tabs({ fx: {
            opacity:'toggle'   
        } , active: 0 });});
		
$(function() {$( "#tabs2" ).tabs({ fx: {
            opacity:'toggle'   
        } , active: 0 });});
		
/*--------- Screenshots  -------*/
		
$(document).ready(function(){
$("img.b").hover(
function() {
$(this).stop().animate({"opacity": "1","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=100)"}, "800");
},
function() {
$(this).stop().animate({"opacity": "0","-ms-filter":"progid:DXImageTransform.Microsoft.Alpha(opacity=0)"}, "fast");
});

});


/*--------- Partners Hover  -------*/

$(document).ready(function(){
$(".prt").hover(
function() {
$(this).toggleClass("prt-active", 300);
 

},
function() {
$(this).toggleClass("prt-active", 300); 
});

});



/*--------- Video Popup  -------*/
$(document).ready(function(){
$(".video").click(function(){
$("#overlay_form").fadeIn(1000);
$("#popi-bg").css({
"opacity": "0.7"
}); 
$("#popi-bg").fadeIn("slow");
positionPopup();
});
$("#close2, #popi-bg").click(function(){
$("#overlay_form").fadeOut(500);
$("#popi-bg").fadeOut("slow");

});
 
});

function positionPopup(){
if(!$("#overlay_form").is(':visible')){
return;
}
$("#overlay_form").css({
left: ($(window).width() - $('#overlay_form').width()) / 2.2,
top: ($(window).width() - $('#overlay_form').width()) / 7,
position:'absolute'
});
}
$(window).bind('resize',positionPopup);

/*--------- Scroll Top  -------*/
$(document).ready(function(){
$(".scroll-top a").click(function() {
  $('html,body').animate({scrollTop: $("#htop").offset().top},
        "9000");
  return false;
});
});

/*---------	Contact Form  -------*/
 
 $(document).ready(function(){
 
$('#send').click(function(){
 
$.post("mailer.php", $("#contactform").serialize(),  function(response) {
$('#success').html(response);
//$('#success').hide('slow');
});
return false;
 
});
 
});