(function() {
  var $darkbg = $('.js-darkbg');
  var $createacctpopup = $('.js-createacctpopup');
  var $signinpopup = $('.js-signinpopup');
  var $signInBtn = $('.js-sign-in-btn');
  var $createAcctBtn = $('.js-create-acct-btn');
  var $vrforpresentations = $('.js-vrforpresentations');
  var $iphone = $('.js-iphone');


  $iphone.hide().fadeIn(2000);
  $vrforpresentations.hide().delay(500).fadeIn(2000)

  $createAcctBtn.click(function(){
    $darkbg.show();
    $createacctpopup.fadeIn(500);
  });
  $signInBtn.click(function(){
    $darkbg.show();
    $signinpopup.fadeIn(500);
  });
})();