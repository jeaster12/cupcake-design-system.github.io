// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++
/* Global Scroll, Sidebar, Flavor, Clipboard, Anchors */
$(document).ready(function($) {
  $('.docs-tabs-content').hide();
  $('.docs-tabs-content:first').show();
  $('.docs-tabs li:first').addClass('active');
  $('.docs-tabs li').click(function() {
    $('.docs-tabs li').removeClass('active');
    $(this).addClass('active');
    $('.docs-tabs-content').hide();

    var selectTab = $(this).find('a').attr("data-tab");

    $(selectTab).fadeIn();
  });
});


$(function () {

/************************************************
* SmoothScroll
*************************************************/

var scroll = new SmoothScroll('a[href*="#"]', {
  // Selectors
  ignore: '[data-scroll-ignore]', // Selector for links to ignore (must be a valid CSS selector)
  header: null, // Selector for fixed headers (must be a valid CSS selector)
  // Speed & Easing
  speed: 500, // Integer. How fast to complete the scroll in milliseconds
  offset: 0, // Integer or Function returning an integer. How far to offset the scrolling anchor location in pixels
  easing: 'easeInOutCubic' // Easing pattern to use
});



/************************************************
* Disable empty links in docs examples
*************************************************/    

$('.docs-content [href="#"]').click(function (e) {
  e.preventDefault()
})
 

$('[href=""]').click(function (e) {
  e.preventDefault()
})
 


/************************************************
* Docs Highlight
*************************************************/  

$('html').on('click.ui.btn', '#highlight-toggle', function(e) {
  e.preventDefault();
  $(this).find(".fa-caret-down, .fa-caret-up").toggleClass("fa-caret-down fa-caret-up");
  // $(this).parents(".window-bar").nextAll(".highlight:first").toggleClass("show-me");
  // $(this).prev().slideToggle(200);
  $(this).prev().toggleClass("show-me");
});


// $('div.docs-example').each(function () {
//   var bar = '<div class="window-bar"><div class="circles"><span class="circle circle-red"></span><span class="circle circle-yellow"></span><span class="circle circle-green"></span></div><div class="languages"><span class="c-btn c-btn-secondary c-btn-xs" id="highlight-toggle">Show Html</span></div</div>'
//   $(this).before(bar)
// })

// $('div.docs-example').each(function () {
//   var bar = '<div class="window-bar"><div class="languages"><span class="c-btn c-btn-secondary c-btn-xs" id="highlight-toggle">Show Html</span></div></div>'
//   $(this).after(bar)
// })



/************************************************
* Clipboard
*************************************************/  

$('div.highlight pre').each(function () {
  var btnHtml = '<div class="docs-clipboard"><button class="docs-btn c-btn c-btn-xs c-btn-primary" data-tooltip="Copy To Clipboard" data-tooltip-conf="right square">Copy</button></div>'
  $(this).after(btnHtml)
})



var clipboard = new Clipboard('.docs-btn', {
  target: function (trigger) {
    return trigger.parentNode.previousElementSibling
  }
})

clipboard.on('success', function (e) {
  $(e.trigger)
    .attr('data-tooltip', 'Copied!')
    .attr('data-tooltip-conf', 'success right square')

  e.clearSelection()
})

clipboard.on('error', function (e) {
  var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
  var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

  $(e.trigger)
    .attr('title', fallbackMsg)
})



/************************************************
* Add deep anchors
*************************************************/  
anchors.options = {
  icon: '#'
}
anchors.add('.docs-content > h2, .docs-content > h3, .docs-content > h4, .docs-content > h5')
$('.docs-content > h2, .docs-content > h3, .docs-content > h4, .docs-content > h5').wrapInner('<div></div>')





/************************************************
* Clipboard for colors
*************************************************/  
var clipboard = new Clipboard('#clipboardItem');

clipboard.on('success', function (e) {
    $(e.trigger)
      .attr('tooltip', 'Copied!')
    e.clearSelection()
  })


  $('#docs-menu-toggle').on('click', function(e) {
    e.preventDefault();
    $('.c-sidenav-body').slideToggle(200);
  });

}(jQuery));

