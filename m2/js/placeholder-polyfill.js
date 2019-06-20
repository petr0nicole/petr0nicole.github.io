;(function($){

  function inputFocus(){
    var input = $(this);
    if (input.val() === input.attr('placeholder')) {
      input.val('');
      input.removeClass('placeholder');
    }
  }

  function inputBlur(){
    var input = $(this);
    if (input.val() === '' || input.val() === input.attr('placeholder')) {
      input.addClass('placeholder');
      input.val(input.attr('placeholder'));
    }
  }

  function removePlaceholderValue(){
    var input = $(this);
    if (input.val() === input.attr('placeholder')) {
      input.val('');
    }
  }

  function formSubmit(){
    $(this).find('[placeholder]').each( removePlaceholderValue );
  }

  // Polyfill for placeholder attribute for older browsers
  function placeholderPolyfill(element){

    var placeholderSupported = !!( 'placeholder' in document.createElement('input') );

    if (!placeholderSupported){

      // If the input has the attribute 'nopolyfill' we skip it. Useful for login page
      var selector     = '[placeholder]:not([nopolyfill])',
          placeholders = element instanceof $ ? element.find(selector) : $(selector),
          forms        = placeholders.parents('form');

      placeholders
        .on('focus', inputFocus)
        .on('blur',  inputBlur)
        .trigger('blur');

      forms.submit( formSubmit );
    }
  }

  placeholderPolyfill();

}(jQuery));