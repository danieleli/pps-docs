$(function() {
  if($('#sidebar').length > 0) {
    var $window = $(window);
    var $sidebar = $('#sidebar');
    var sidebar_top = $sidebar.offset().top - 16;
    function positionSidebar() {
      $sidebar.toggleClass('fixed', $window.scrollTop() > sidebar_top);
    }
    $(window).on('scroll', positionSidebar);
    positionSidebar();
  }
});