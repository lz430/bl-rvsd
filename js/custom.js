$(document).ready(function(){
  $('.bxslider').bxSlider({
    mode: 'fade',
    adaptiveHeight: 'true',
    pager: 'false'
  });
  
  // Removing Volusion default styling
  $('link[href*="/a/a/65/c/styles.css"]').remove();
  $('link[href*="/a/c/default.css"]').remove();
});