

$(function(){
    

    if($( window ).width() <= 1000 ){
      
            $('#github-name').css({
            right: '10.3vw',
            'box-shadow': 'none'
            })
    
      
            $('#contact-name').css({
            right: '11.1vw',
            'box-shadow': 'none'
            })
      
    }else{
            $('#github-logo').hover(function(){
        $('#github-name').css({
        right: '3.1vw',
        'box-shadow': 'none',
        'z-index': '-1'
        })}, function(){
            $('#github-name').css({
               right: '-600px',
        })
    });

    $('#mail-logo').hover(function(){
        $('#contact-name').css({
        right: '3.1vw',
        'box-shadow': 'none',
        'z-index': '-1'
        })}, function(){
            $('#contact-name').css({
               right: '-600px',
        })
    });
    }


});


