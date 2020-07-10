//IIFE-immediately invoked expression

(function(){
//named function
    /* function Start()
    {
        console.log("App Started");
    }
 */
/* let Start=
function()
{
    console.log("App Started");
}
 */

 let Start = ()=>
 {
    console.log("App Started..");
 }
 window.addEventListener("load",Start);




})();