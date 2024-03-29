  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script>
      var graphJson = { 
          "highlight":"#0000ff",
          "nav":true,
          "resize":true,
          "toolbar": "zoom layers lightbox" 
          }
      window.onDrawioViewerLoad = function() {
          $("div[data-mxgraph-path]").each(function(index, element){
              fetch($(element).data("mxgraph-path"))
              .then(function(response){
                  return response.text()
              })
              .then(function(text){
                  var jsonText = JSON.stringify(
                      Object.assign({}, graphJson, {xml: text})
                      )
                  element.setAttribute("data-mxgraph", jsonText) 
                  GraphViewer.createViewerForElement(element)
              })
          })
      }
  </script>
  <script src="https://www.draw.io/js/viewer.min.js">
  </script>

