// JavaScript Document
$(document).ready(function(){
  $('.bxslider').bxSlider({
	auto: true
  });
});
      $(function(){
        // #で始まるリンクをクリックしたら実行されます
        $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 400; // ミリ秒で記述
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          var position = target.offset().top;
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
        });
      });
$(function(){
	$("img.ChangePhoto").click(function(){
		var ImgSrc = $(this).attr("src");
		var ImgAlt = $(this).attr("alt");
		$("img#MainPhoto").attr({src:ImgSrc,alt:ImgAlt});
		$("img#MainPhoto").hide();
		$("img#MainPhoto").fadeIn("slow");
		return false;
	});
});