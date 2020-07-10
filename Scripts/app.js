//IIFE-immediately invoked expression

(function(){
//named function
    function Start()
    {
      
      console.log('%App Started...',"color:white;font-size:24px;");

      let clickMeButton = document.getElementById("ClickMeButton");
      
      console.log(clickMeButton);
    }


 window.addEventListener("load",Start);




})();