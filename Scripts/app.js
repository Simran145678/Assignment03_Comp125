//IIFE-immediately invoked expression

(function(){
//named function
    function Start()
    {
      
      console.log('%cApp Started...',"color:black;font-size:24px;");

/*       let submitButton= document.getElementById("SubmitButton");

      //Submit button for page 3
      if(submitButton)
      {
      console.log(SubmitButton);
      }
 */
    /* let title=document.title;
    console.log(`The title of the page is ${title}`) */
    let title=document.title;
    title=title.toLowerCase();

    let navAnchors = document.querySelectorAll("li a");
  
    for (const anchor of navAnchors) {

      let anchorString=anchor.getAttribute("href");
     anchorString=anchorString.substr(0,anchorString.length-5);
     if((title==="home")&&(anchorString==="index")||(title === anchorString))
      {
        anchor.className="nav-link active";
      }
      console.log(anchorString);
    }

    let indexParagraph=document.getElementsByClassName("Paragraph");

    let paraIndex=document.createElement("p");

    paraIndex.textContent="This is the index paragraph";

    Paragraph.appendchild(paraIndex);

    }


 window.addEventListener("load",Start);




})();