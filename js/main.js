(function($){
  "use strict";

  /* ─── PRELOADER: hide after page loads OR after 2.5s max ─── */
  function hidePreloader() {
    var $pre = $('#preloader');
    $pre.addClass('fade-out');
    setTimeout(function(){ $pre.hide(); }, 650);
  }
  // Try window load event
  $(window).on('load', hidePreloader);
  // Hard fallback — never stuck longer than 2.5s
  setTimeout(hidePreloader, 2500);

  /* ─── NAVBAR: close mobile menu on link click ─── */
  $('.navbar-collapse a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
  });

  /* ─── SMOOTH SCROLL for all nav & in-page links ─── */
  $('a[href^="#"]').on('click', function(e){
    var href = this.getAttribute('href');
    if(!href || href === '#') return; // skip filter buttons / placeholder links
    var target = $(href);
    if(target.length){
      e.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top - 50
      }, 900, 'swing');
    }
  });

  /* ─── WOW.js animations ─── */
  new WOW({ mobile: false, offset: 80 }).init();

  /* ─── PROJECT POPUPS (Magnific) ─── */
  $('.view-project').magnificPopup({
    type: 'inline',
    fixedContentPos: false,
    fixedBgPos: true,
    overflowY: 'auto',
    closeBtnInside: true,
    preloader: false,
    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

  /* ─── PORTFOLIO FILTER ─── */
  $(document).on('click', '.pf-filters a', function(e){
    e.preventDefault();
    var filter = $(this).data('filter');
    $('.pf-filters a').removeClass('active');
    $(this).addClass('active');
    $('.pf-item').each(function(){
      var cats = $(this).data('cat') || '';
      if(filter === 'all' || cats.indexOf(filter) !== -1){
        $(this).removeClass('hidden').css('display','');
      } else {
        $(this).addClass('hidden');
      }
    });
  });

  /* ─── CONTACT FORM (FormSubmit — no backend needed) ─── */
  $('#contact-form').on('submit', function(e){
    e.preventDefault();
    var $form = $(this);
    var formObj = {};
    $form.serializeArray().forEach(function(item){ formObj[item.name] = item.value; });

    $('#contact-form-result').html(
      "<div class='alert alert-info' role='alert'>Sending...</div>"
    );

    $.ajax({
      url: 'https://formsubmit.co/ajax/am2594137@gmail.com',
      type: 'POST',
      data: JSON.stringify(formObj),
      contentType: 'application/json',
      headers: { 'Accept': 'application/json' },
      dataType: 'text', // don't let jQuery auto-parse the response as JSON — avoids false "error" on a successful send
      success: function(data){
        $('#contact-form-result').html(
          "<div class='alert alert-success' role='alert'><strong>Message sent!</strong> I'll get back to you soon.</div>"
        );
        $form.trigger('reset');
      },
      error: function(){
        $('#contact-form-result').html(
          "<div class='alert alert-danger' role='alert'><strong>Oops!</strong> Could not send message. Try again.</div>"
        );
      }
    });
  });

  /* ─── NAVBAR active state on scroll ─── */
  $(window).on('scroll', function(){
    var scrolled = $(this).scrollTop();
    $('section').each(function(){
      var top = $(this).offset().top - 70;
      var bot = top + $(this).outerHeight();
      var id  = $(this).attr('id');
      if(scrolled >= top && scrolled < bot){
        $('.navbar-custom .nav a').parent().removeClass('active');
        $('.navbar-custom .nav a[href="#'+id+'"]').parent().addClass('active');
      }
    });
  });

})(jQuery);
