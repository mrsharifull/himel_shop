/*track alert js*/
$(document).ready(function(){

    $('.hb-btn').on('click',function(){
        $('.alert').toggleClass('alert1');
    });


});
$(document).ready(function(){
    
    $('.alrt-btn').on('click',function(){
        $('.alert').removeClass('alert1');
    });
    
    
});

/*nice-number js*/
	$(function(){

		$('input[type="number1"]').niceNumber();

	});

