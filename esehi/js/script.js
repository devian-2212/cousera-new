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
 
  var homeHtml = "home.html";
  var home = {};
  var insertHtml = function(selector,html){
    var targetElem = document.querySelector(selector);
    targetElem.innerHTML = html;
  };

  document.addEventListener("DOMContentLoaded",function (event){
    $ajaxUtils.sendGetRequest(homeHtml,function(responseText){
      document.querySelector("#main-content").innerHTML = responseText;
    })
  },false);
  global.$home = home;
})(window);