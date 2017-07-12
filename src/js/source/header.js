// $(function() {

$('header select').selectric();
// });

$(".lang label ").click(function(event) {
    
    if (!$(".lang input").is( ":checked" )) {
        console.log('ru')
        $('.lang .ua').removeClass('act')
        $('.lang .ru').addClass('act')
    } else {
        console.log('ua')
		$('.lang .ru').removeClass('act')
		$('.lang .ua').addClass('act')
    }

});
