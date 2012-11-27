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
    $('code.js').each(function(){
        $(this).html(highlightJS($(this).text()));
    });
    $('code.method').each(function(){
        $(this).html(highlightMethod($(this).text()));
    });
});

function lineNumbers(markup) {
    var lines = markup.split('\n');
    if(lines[lines.length-1].trim() == '') lines.splice(-1, 1);
    return '<ol class="line-numbers"><li>' + lines.join('</li><li>') + '</li></ol>';
}

function highlightJS(js) {
    return lineNumbers(
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
    )
}

function highlightMethod(code) {
    return code
        .replace(/\b(POST|PUT|GET|DELETE)\b/gm, '<span class="method $1">$1</span>')
        .replace(/\/\/(.*)/gm, '<span class="comment">//$1</span>')
        .replace(/(\:\w+)/gm, '<span class="placeholder">$1</span>')
}