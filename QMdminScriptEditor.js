// ==UserScript==
// @name         QM Admin Script Editor
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @include      *quantummetric.com*
// @author       Addison Moore
// @grant        none
// ==/UserScript==

// Instructions
// 1. Make sure React Dev Tools extension is installed and running
// 2. Go to QM admin settings page and inspect the text area
// 3. Toggle to React dev tools Components tab
// 4. Turn tampermonkey script on and refresh the page

(function() {
  window.addEventListener("load", () => {
    if (window.location.hash == "#/settings/admin") {
      ("use strict");
      //append codemirror stylesheet
      let style = document.createElement("link");
      style.setAttribute("rel", "stylesheet");
      style.setAttribute("type", "text/css");
      style.setAttribute(
        "href",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.css"
      );
      document.getElementsByTagName("head")[0].appendChild(style);
      //append linter stylesheet!
      let lintCSS = document.createElement("link");
      lintCSS.setAttribute("rel", "stylesheet");
      lintCSS.setAttribute("type", "text/css");
      lintCSS.setAttribute(
        "href",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/lint/lint.min.css"
      );
      document.getElementsByTagName("head")[0].appendChild(lintCSS);
      //append theme. feel free to use a theme if you want!
      let theme = document.createElement("link");
      theme.setAttribute("rel", "stylesheet");
      theme.setAttribute("type", "text/css");
      theme.setAttribute(
        "href",
        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/theme/monokai.min.css"
      );
      document.getElementsByTagName("head")[0].appendChild(theme);
      //append jshint script
      let jshint = document.createElement("script");
      jshint.setAttribute("type", "text/javascript");
      jshint.setAttribute(
        "src",
        "https://unpkg.com/jshint@2.9.6/dist/jshint.js"
      );
      document.getElementsByTagName("body")[0].appendChild(jshint);
      document
        .querySelector("[src='https://unpkg.com/jshint@2.9.6/dist/jshint.js']")
        .addEventListener("load", () => {
          //append codemirror script
          let codemirror = document.createElement("script");
          codemirror.setAttribute("type", "text/javascript");
          codemirror.setAttribute(
            "src",
            "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.js"
          );
          document.getElementsByTagName("body")[0].appendChild(codemirror);
          //wait for codemirror script to load then append js mode script
          document
            .querySelector(
              "[src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/codemirror.min.js']"
            )
            .addEventListener("load", () => {
              let javascript = document.createElement("script");
              javascript.defer = 1;
              javascript.setAttribute("type", "text/javascript");
              javascript.setAttribute(
                "src",
                "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/javascript/javascript.min.js"
              );
              document.getElementsByTagName("body")[0].appendChild(javascript);
              //wait for js mode script to load then append lint script
              document
                .querySelector(
                  "[src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/mode/javascript/javascript.min.js']"
                )
                .addEventListener("load", () => {
                  let lint = document.createElement("script");
                  lint.defer = 1;
                  lint.setAttribute("type", "text/javascript");
                  lint.setAttribute(
                    "src",
                    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/lint/lint.min.js"
                  );
                  document.getElementsByTagName("body")[0].appendChild(lint);
                  //wait for lint script script to load then append jsLint script
                  document
                    .querySelector(
                      "[src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/lint/lint.min.js']"
                    )
                    .addEventListener("load", () => {
                      let jsLint = document.createElement("script");
                      jsLint.defer = 1;
                      jsLint.setAttribute("type", "text/javascript");
                      jsLint.setAttribute(
                        "src",
                        "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/lint/javascript-lint.min.js"
                      );
                      document
                        .getElementsByTagName("body")[0]
                        .appendChild(jsLint);
                      //wait for jsLint script to load then append
                      document
                        .querySelector(
                          "[src='https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.48.4/addon/lint/javascript-lint.min.js']"
                        )
                        .addEventListener("load", () => {
                          //create a new textarea
                          document
                            .getElementsByClassName("settings-table")[2]
                            .getElementsByTagName("tr")[2].style.display =
                            "none";
                          document.getElementsByTagName("textarea")[0];
                          let ta = document.createElement("textarea");
                          ta.setAttribute("id", "ta");
                          //append text area
                          document
                            .querySelectorAll(".config-section")[2]
                            .appendChild(ta);
                          // create and append CodeMirror init script
                          let script = document.createElement("script");
                          script.defer = 1;
                          let code =
                            'var adminScript = CodeMirror.fromTextArea(document.getElementById("ta"),{mode: "javascript",theme: "monokai",lineNumbers: true, gutters: ["CodeMirror-lint-markers"],lint: true});';
                          script.setAttribute("type", "text/javascript");
                          script.appendChild(document.createTextNode(code));
                          document
                            .getElementsByTagName("body")[0]
                            .appendChild(script);
                          //set value of CodeMirror to qm admin script textarea value
                          adminScript.doc.setValue(
                            document.getElementsByTagName("textarea")[0]
                              .innerText
                          );
                          // styling
                          document.getElementsByClassName(
                            "CodeMirror"
                          )[0].style.height = "500px";
                          document.getElementsByClassName(
                            "CodeMirror"
                          )[0].style.fontSize = "16px";
                          //makeshift onBlur listener
                          document.body.addEventListener("click", e => {
                            if (
                              !e.target.className ||
                              (!!e.target.className &&
                                !!e.target.className.animVal) ||
                              !e.target.className.includes("CodeMirror")
                            ) {
                              if (!!window.$r && !!window.$r.state) {
                                let val = adminScript.doc.getValue();
                                window.$r.state.editVal = val;
                                document
                                  .getElementsByTagName("textarea")[0]
                                  .dispatchEvent(new Event("blur"));
                                document.getElementsByTagName(
                                  "textarea"
                                )[0].value = val;
                                document
                                  .getElementsByTagName("textarea")[0]
                                  .dispatchEvent(new Event("blur"));
                                console.log(
                                  "QM Admin Script Editor should be working"
                                );
                              } else
                                console.log(
                                  "error: try inspecting the first textarea element, then toggle to Components tab"
                                );
                            }
                          });
                        });
                    });
                });
            });
        });
    }
  });
})();
