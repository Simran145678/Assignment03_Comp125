"use strict";
//IIFE-immediately invoked expression

(function(){
  //named functions
  //function to highlight the selected links
  function HighlightActiveLink()
   {
    let title = document.title;
    title = title.toLowerCase();
  
    let navAnchors = document.querySelectorAll("li a");
  
    for (const anchor of navAnchors) 
    {
  
      let anchorString = anchor.getAttribute("href");
      anchorString = anchorString.substr(0, anchorString.length - 5);
  
      if ((title === "home") && (anchorString === "index") || (title === anchorString)) 
      {
        anchor.className = "nav-link active";
      }
  
    }
    return title;
    }
  
   
    //loads header navigation for every page
    function loadHeader()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Views/partials/header.html")

      //executes the request
      XHR.send();

      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
          let header=document.getElementsByTagName("header")[0];

          let headerData = XHR.responseText;
          
          header.innerHTML=headerData;

          HighlightActiveLink();

        }


      });

    }

    //loads footer navigation for every page
    function loadFooter()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Views/partials/footer.html")

      //executes the request
      XHR.send();

      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
          let footer=document.getElementsByTagName("footer")[0];

          let footerData = XHR.responseText;
          
          footer.innerHTML=footerData;

          HighlightActiveLink();

        }


      });

    }

    //loads paragraph for index.html
    function loadindexParagraph()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Scripts/Paragraphs.json")

      //executes the request
      XHR.send();
      
      //register ready state event
      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
            console.log("we are ready");

            let data=JSON.parse(XHR.responseText);
            let paragraphs=data.paragraphs;

            console.log(paragraphs);

            let indexPara = document.getElementById("indexPara");
            let para1 = document.createElement('p');
            para1.innerHTML= paragraphs[0].para;

            indexPara.appendChild(para1);
            
        }
      });
    }
  
    //loads paragraph for projects.html under first project
    function loadProjectParagraph1()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Scripts/Paragraphs.json")

      //executes the request
      XHR.send();
      
      //register ready state event
      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
            console.log("we are ready");

            let data1=JSON.parse(XHR.responseText);
            let paragraphs=data1.paragraphs;

            console.log(paragraphs);

            let projectPara1 = document.getElementById("projectPara1");
            let para01 = document.createElement('p');
            para01.innerHTML= paragraphs[1].para;

            projectPara1.appendChild(para01);
            
        }
      });
    }

    //loads paragraph for projects.html under second project
    function loadProjectParagraph2()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Scripts/Paragraphs.json")

      //executes the request
      XHR.send();
      
      //register ready state event
      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
            console.log("we are ready");

            let data2=JSON.parse(XHR.responseText);
            let paragraphs=data2.paragraphs;

            console.log(paragraphs);

            let projectPara2 = document.getElementById("projectPara2");
            let para02 = document.createElement('p');
            para02.innerHTML= paragraphs[2].para;

            projectPara2.appendChild(para02);
            
        }
      });
    }

    //loads paragraph for projects.html under third project
    function loadProjectParagraph3()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Scripts/Paragraphs.json")

      //executes the request
      XHR.send();
      
      //register ready state event
      XHR.addEventListener("readystatechange",function(){
        if((XHR.readyState===4) && (XHR.status===200))
        {
            console.log("we are ready");

            let data3=JSON.parse(XHR.responseText);
            let paragraphs=data3.paragraphs;

            console.log(paragraphs);

            let projectPara3 = document.getElementById("projectPara3");
            let para03 = document.createElement('p');
            para03.innerHTML= paragraphs[3].para;

            projectPara3.appendChild(para03);
            
        }
      });
    }


    function Start()
    {
        
        //calling functions 
  
     let title= HighlightActiveLink();
  

     if(title == "projects")
     {
       console.log("we're on projects page");
       loadHeader();
       loadProjectParagraph1();
       loadProjectParagraph2();
       loadProjectParagraph3();
       loadFooter();
     }

     if (title == "home")
     {
        loadHeader();
        loadindexParagraph();
        loadFooter();
     }
     if (title == "contact")
     {
        loadHeader();
        loadFooter();
        
     }
     
    }
  
  
   window.addEventListener("load",Start);
  
  
  
  
  })();
  
  

