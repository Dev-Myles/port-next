
$(function(){
    $(document).on('click', '.contact-btn-copy', function(){
        $('#copy-click').addClass('active');
        let text =  'mylessworkemail@gmail.com';
        return navigator.clipboard.writeText(text);
      });

      $('#copy-click').on('animationend', function(){
          $(this).removeClass('active');
      });
});