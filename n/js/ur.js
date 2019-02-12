$(document).ready(function(){



	var countFiles = 0;
	$(document).on('change', '#evaluation-form .input-file', function() {

	var str = $('.column-line-input.pl-holder.column-line-div').text();
	var countFiles = str.substr(-1);
	countFiles = Number(countFiles);
	if(isNaN(countFiles)){
		countFiles = 0;
	}
	if(this.files[0] != undefined){
		countFiles++
	}
	else{
		countFiles--;
	}

	 if(countFiles > 3) countFiles = 3;
	$('.column-line-input.pl-holder.column-line-div').html(addedFile + countFiles);
	//var nameFile = document.getElementById("file").files;
	//$('.file-txt').html('Р В¤Р С•РЎвЂљР С•: ' + nameFile[0].name);
	});

	$('body').on('change', '.input-file', function(){
		var fileAttr = $(this).attr('name'); 
		//$("[data-input="+ fileAttr +"]").show();
	});

	$('body').on('click', '#evaluation-form .column-line-div-text', function(){
		$('#evaluation-form .column-line-textarea-block').css('display', 'block').animate({'opacity': '1'}, 200, function(){
		  $('#evaluation-form').append('<div id="evaluation-click"></div>')
		})
	})

	$('body').on('click', '#evaluation-click, #evaluation-form .column-line-textarea-block .x', function(){

	$('#evaluation-form .column-line-textarea-block').animate({'opacity': '0'}, 200, function(){
	  $(this).css('display', 'none');
	  var textarea = $('#evaluation-form .column-line-textarea-block .column-line-textarea').val();

	  $('#evaluation-form .column-line-div-text').html(textarea);

	  $('#evaluation-click').remove();
	})

	});


	$('body').on('click', '#evaluation-form .column-line-div', function(){
	$('#evaluation-form .file-wrapp').css('display', 'block').animate({'opacity': '1'}, 200, function(){
	  $('#evaluation-form').append('<div id="evaluation-click"></div>')
		})
	})

	$('body').on('click', '#evaluation-click, #evaluation-form .file-wrapp .x', function(){

		$('#evaluation-form .file-wrapp').animate({'opacity': '0'}, 200, function(){
		  $(this).css('display', 'none');
		  $('#evaluation-click').remove();
		})

	});
	
	$('.home-text .preview-text .show-all-text').click(function(){
		$(this).slideUp('180');
		$('.all-text-block').slideDown('180');
	})



})