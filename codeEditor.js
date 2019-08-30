(function() {
  let style = document.createElement("link");
  style.setAttribute("rel", "stylesheet");
  style.setAttribute("type", "text/css");
  style.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css"
  );
  document.getElementsByTagName("head")[0].appendChild(style);

  let theme = document.createElement("link");
  theme.setAttribute("rel", "stylesheet");
  theme.setAttribute("type", "text/css");
  theme.setAttribute(
    "href",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/theme/solarized.min.css"
  );
  document.getElementsByTagName("head")[0].appendChild(theme);

  let codemirror = document.createElement("script");
  codemirror.setAttribute("type", "text/javascript");
  //   codeMirror.async = 1;
  codemirror.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.js"
  );
  document.getElementsByTagName("body")[0].appendChild(codemirror);

  let javascript = document.createElement("script");
  javascript.setAttribute("type", "text/javascript");
  //   codeMirror.async = 1;
  javascript.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/javascript/javascript.min.js"
  );
  document.getElementsByTagName("body")[0].appendChild(javascript);

  var myCodeMirror = CodeMirror.fromTextArea(
    document.getElementsByTagName("textarea")[0],
    {
      lineNumbers: true,
      mode: "javascript",
      theme: "solarized dark"
    }
  );
})();
