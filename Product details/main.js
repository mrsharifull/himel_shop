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

/*etalage js*/
	$(document).ready(function(){

		$('#etalage').etalage({
			thumb_image_width: 400,
			thumb_image_height: 400,
			source_image_width: 500,
			source_image_height: 500,			
			show_hint: true,
			change_callback: function(image_number, instance_id){
				var time = new Date();
				$('#alert').html(time.getHours()+':'+time.getMinutes()+':'+time.getSeconds()+' - Change callback: The ID of the Etalage instance is "<b>'+instance_id+'</b>" and the newly active image number is "<b>'+image_number+'</b>".');
			}
		});

	});

/*niceNumber js*/

	$(function(){

		$('input[type="number1"]').niceNumber();

	});


