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

$(function(){
  $('code').each(function(){
    $(this).html(highlightJS($(this).text()));
  });
});

function highlightJS(js) {
  return (
    '<ol class="line-numbers"><li>' + 
    js
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(".*?")/gm, '<span class="string">$1</span>')
      .replace(/('.*?')/gm, '<span class="string">$1</span>')
      .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
      .replace(/(\b\d+\.\d+)/gm, '<span class="number">$1</span>')
      .replace(/(\b\d+)/gm, '<span class="number">$1</span>')
      .replace(/\bnew *(\w+)/gm, '<span class="keyword">new</span> <span class="init">$1</span>')
      .replace(/\b(function|new|throw|return|var|if|else)\b/gm, '<span class="keyword">$1</span>')
      .replace(/\b(POST|PUT|GET|DELETE)\b/gm, '<span class="method $1">$1</span>')
      .replace(/\n/gm, '</li><li>') + 
    (js.match(/\n/) ? "" : "</li><li>")
  ).slice(0, -4) + '</ol>';
}