var baseUrl = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/';
var highlightJsUrl = baseUrl + 'highlight.min.js';

define(['enthraler', highlightJsUrl, 'css!highlight'], function(
  enthraler,
  hljs,
  _
) {
  window.hljs = hljs;
  var Hello = function(environment) {
    this.render = function(authorData) {
      var container = environment.container;
      var pre = document.createElement('pre');
      var code = document.createElement('code');
      code.innerText = authorData.code;
      pre.appendChild(code);

      // Note: I'm not using promises here as they're not supported in IE11,
      // and I don't think it is worth adding a dependency for.
      var jsLoaded = false;
      var cssLoaded = false;

      // Load the script for the language, and add highlighting when ready.
      var script = document.createElement('script');
      script.src = baseUrl + 'languages/' + authorData.language + '.min.js';
      script.type = 'text/javascript';
      document.head.appendChild(script);
      script.addEventListener('load', function() {
        jsLoaded = true;
        updateDisplay();
      });

      // Load the stylesheet for the style.
      var style = authorData.style || 'railscasts';
      var link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = baseUrl + 'styles/' + style + '.min.css';
      document.head.appendChild(link);
      link.addEventListener('load', function() {
        cssLoaded = true;
        updateDisplay();
      });

      function updateDisplay() {
        if (jsLoaded && cssLoaded) {
          container.innerHTML = '';
          container.appendChild(pre);
          hljs.highlightBlock(code);
          container.style.backgroundColor = window.getComputedStyle(
            code
          ).backgroundColor;
          environment.requestHeightChange();
        }
      }
    };
  };
  return Hello;
});
