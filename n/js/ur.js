$(document).ready(function(){

	$('.elected-buttons-wrapper a').click(function(){
		$('.elected-buttons-wrapper a').removeClass('active');
		$(this).addClass('active');
	});
	$('#our-spec .buttons a').click(function(){
		$('#our-spec .buttons a').removeClass('active');
		$(this).addClass('active');
	});
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:30,
		responsiveClass:true,
		navText : ["",""],
		responsive:{
			0:{
				items:1,
				nav:true
			},
			600:{
				items:3,
				nav:false
			},
			1000:{
				items:5,
				nav:true,
				loop:false
			}
		}
	});
	
	

	
	/*Переключатель вкладо в блоке ПРОЦЕСС*/
	 $('.btnNext').click(function(){
	  $('#process .buttons > .active').next('li').find('a').trigger('click');
	});

	  $('.btnPrevious').click(function(){
	  $('#process .buttons > .active').prev('li').find('a').trigger('click');
	});

	
	
	 $('body').on('change', '#file-consultation', function(){
		 if(this.files[0]){
			 if(this.files[0] != undefined){
				 $('#file-label .file-txt').html(this.files[0].name);
			 }
		 }
		 if(this.files[0] == undefined){
			$('#file-label .file-txt').html('<span>Выберите файл</span>  или перетащите сюда');
		}
	 });
	 
	 $('body').on('change', '#file-pop', function(){
		 
		 if(this.files[0]){
			 if(this.files[0] != undefined){
				 console.log(this.files[0].name);
				 $('#file-label-pop .file-txt').html(this.files[0].name);
			 }
		 }
		 if(this.files[0] == undefined){
			$('#file-label-pop .file-txt').html('<span>Выберите файл</span><br/>  или перетащите сюда');
		}
	 });
	 
	 
	 
	 /*Кнопка Вверх при скроле*/
	$(window).scroll(function() {
		if($(this).scrollTop() > 400) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	 
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
	
	
	
	/*Все блоки одной высоты*/
	if($(document).width() < 1300){
		var mh = 0;
	   $("#about-us .about-items .item").each(function () {
		   var h_block = parseInt($(this).innerHeight());
		   if(h_block > mh) {
			  mh = h_block;
		   };
	   });
	    $("#about-us .about-items .item").height(mh + 15);
	
	}
	
	/*Сделать картинки квадратными */
	if($(document).width() < 1600){
	var img_w = $('#articles .article .img-wrapp').width();
		$('#articles .article .img-wrapp').height(img_w);
	}
	

	/*Всплывашки*/
	$('.call-me').click(function(){
		var my_class = $(this).attr('data-class');
        $('#pop-up-wrapp').show();
        $('.pop-up.'+my_class).fadeIn(400);
	});
	$('.x, #pop-up-wrapp').click(function(){
        $('#pop-up-wrapp, .pop-up').hide();
    });

	
	$('.show-cat').hover(function(){
		$('#sub-cat-menu').show();
	}, function(){
		$('#sub-cat-menu').hide();
	});

})