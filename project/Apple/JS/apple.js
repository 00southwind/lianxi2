//tab切换
$(function(){
		 $('.menu1 li').click(function(){
		 var i=$(this).index();
		  
		  $(this).addClass('active').siblings().removeClass('active');
		  $('.tab-inner1 div').eq(i).show().siblings().hide();
	        });
	        
	      $('.menu2 li').click(function(){
		    var i=$(this).index();
		  
		    $(this).addClass('active').siblings().removeClass('active');
		    $('.tab-inner2 div').eq(i).show().siblings().hide();
	        });
		 });