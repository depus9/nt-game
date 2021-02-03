jQuery(function($){
//all the script for app
$('.control').click( function(){
    $('body').addClass('search-active');
    $('.input-search').focus();
  });
  
  $('.fa-times').click( function(){
    $('body').removeClass('search-active');
  });
  $(document).on('mouseenter','.sidebar-arrow', function(){
    $('.cat-menu').addClass('in-view');
  })
  $(document).on('mouseleave','.sidebar-wrapper', function(){
    $('.cat-menu').removeClass('in-view');
  })
  $(document).on('click','.menu-opener', function(){
    $('.sidebar-wrapper').toggleClass('show-inview');
    $(this).toggleClass('rotate');
  })
  $(document).on('click','.search-head', function(){
    $('.full-search').toggleClass('enable-search');
  })
  $(document).on('click', '#closeSearch', function(){
    $('.full-search').toggleClass('enable-search');
  })
})