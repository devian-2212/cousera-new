// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("../data/name.txt", 
            function (request) {
              var name = request.responseText;
              console.log(name);

              document.querySelector("#content")
                .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);
(function (global){
 
  var homeHtml = 'home.html';
  var dc = {};
  var insertHtml = function(selector,html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };
  var showloading = function(selector){
    var html ="<div class='text-center'>";
    html +="<img src='ajax-loader.gif'></div>";
    insertHtml(selector,html);
  };

  document.addEventListener('DOMContentLoaded',function (event){
        showloading('#main-content');
        $ajaxUtils.sendGetRequest(homeHtml,function(responseText){
        console.log(responseText);
        document.querySelector('#main-content').innerHTML = responseText.responseText;

    });
  },false);
  global.$dc = dc;
  console.log(homeHtml);
})(window);