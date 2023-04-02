
window.onload=function(){
    const  mobileBtn = document.getElementById('menuCta');
     const navBtn = document.querySelector('nav');
     const  mobileBtnExit = document.getElementById('exitCta');
   
      mobileBtn.addEventListener('click', menuBar);
      mobileBtnExit.addEventListener('click', menuExit );

      
   function menuBar(){
       navBtn.classList.add('open-nav')
   }
   function menuExit(){
       navBtn.classList.remove('open-nav')
   }

    
const imageShow= document.getElementById('file');
const imageShow2= document.getElementById('file2');
const imageShow3= document.getElementById('file3');
const actualImage= document.getElementById('displayImage');
const actualImage2= document.getElementById('displayImage2');
const actualImage3= document.getElementById('displayImage3');
imageShow.addEventListener("change" , select);
imageShow2.addEventListener("change" , selectExtra);
imageShow3.addEventListener("change" , selectExtra2);

function select(){
    const file = this.files[0];
     if(file){
         const reader= new FileReader(); reader.addEventListener("load", function(){
            actualImage.setAttribute("src", this.result);
                    });
                    reader.readAsDataURL(file);

                }
               
           }
           
           function selectExtra(){ 
            const file2= this.files[0];
        if(file2){
            const reader2= new FileReader(); reader2.addEventListener("load", function(){
               actualImage2.setAttribute("src", this.result);
                       });
                       reader2.readAsDataURL(file2);
   
                   }
                  
                }
                function selectExtra2(){ 
                    const file3= this.files[0];
                if(file3){
                    const reader3= new FileReader(); reader3.addEventListener("load", function(){
                       actualImage3.setAttribute("src", this.result);
                               });
                               reader3.readAsDataURL(file3);
           
                           }
                          
                        }
                             
                    
                    
                                    
  }

  
 