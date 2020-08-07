//"use strict"
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
  
    //function for injecting paragraphs
   /* s
  
  
    {  */
      //Injecting into index page.(about me paragraph)
      //hooking into the element on index page by using id
     /*  let indexPara=document.getElementById("indexPara");
      if(indexPara)
      {
        //creating a new Element
      let theParagraph=document.createElement("p");
  
        //configuring the new element
      theParagraph.textContent=
  
      `Hello Everyone! My name is Harsimran Kaur. I am from Chandigarh and I am fond of creative art work.I love to draw, I love to paint, I love to dance and to fill
       everything around me with creativity.Currently I am pursuing Software Engineering Technician Program from Centennial College and I have also done graduation in
       Computer Applications. Computers is something that I am interested in and creativity is what I am passionate about. This world will look dull if there will be no
       creativity. And creativity is what leads to innovation. This era har n number of platforms to show creativity. And digital platform is one of these.
       In this portfolio, I will be describing about my Projects that I am working on and also you have a contact page where you can send me your information about ideas 
       or share information or enquire about my projects.
      
      `;
      //attaching the new element
      indexPara.appendChild(theParagraph);
      }//injecting into index ends */
  
      //injecting into projects page.starting with project 1
       //hooking into the element on index page by using id


      /* let projectPara1=document.getElementById("projectPara1");
      if(projectPara1)
      {
        //creating a new Element
      let theParagraph1=document.createElement("p");
  
        //configuring the new element
      theParagraph1.textContent=
  
      `One of the project that i am working upon is Exibiting my paintings and drawing. You can contact me if you wish to see some of my exclusive stuff.
      I have prepared 50 oil paintings and 25 Pencil Sketches including 10 still life. I need to make a total of 100 master pieces in order to get them
      approved for exhibition and Art gallary, sector-10. This exibition is huge, and it is organised only once a year. People from other countries also
      come to visit. And also it is a great source of earning. Some of pictures of my work are attached below. 
      
      `;
      //attaching the new element
      projectPara1.appendChild(theParagraph1);
      }//Injecting text for Project 1 ends here
  
  
      //injecting into project 2 for projects page
      let projectPara2=document.getElementById("projectPara2");
      if(projectPara2)
      {
        //creating a new Element
      let theParagraph2=document.createElement("p");
  
        //configuring the new element
      theParagraph2.textContent=
  
      `Another project that I am currently working upon is preparing a fusion of 2 folk dances to present at inter university youth fest competition.
      The 2 dance forms that I have choosen are Lavni(Maharashtra) and Bhangra(Punjab). It will be a combination of south and north. I and my group has 
      already won 2nd price in Lavni and 1st price in bhangra. Therefore, this time we decided to come with a different thing. We will be making sure that
      it proves to be one of its kind which will again get us 1st price at National level.
      
      `;
      //attaching the new element
      projectPara2.appendChild(theParagraph2);
      }//Injecting text for Project 2 ends here
  
  
      //injecting into project 3 for projects page
      let projectPara3=document.getElementById("projectPara3");
      if(projectPara3)
      {
        //creating a new Element
      let theParagraph3=document.createElement("p");
  
        //configuring the new element
      theParagraph3.textContent=
  
      `Apart from Dance and painting. I am also working on organising a 10 days course for elementary students in witch they will learn about how to
      make use of useless things.They will be taught lesson by lesson and also,there will be live session where children will use thier own brains to 
      transform garbage into usable products.Some pictures of my previous project are given below.
      
      `;
      //attaching the new element
      projectPara3.appendChild(theParagraph3);
      }//Injecting text for Project 3 ends here
    } */
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

    function loadindexParagraph()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Data/Paragraphs.json")

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
    
    function loadProjectParagraph1()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Data/Paragraphs.json")

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

    function loadProjectParagraph2()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Data/Paragraphs.json")

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

    function loadProjectParagraph3()
    {
      //creating new object
      let XHR = new XMLHttpRequest();
    
      //configuring the message
      XHR.open("GET","./Data/Paragraphs.json")

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
  
     //let success=AddParagraphs();

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
  
  

