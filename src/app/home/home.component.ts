import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl:'./home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  title='homeapp';
  constructor(){
  }

 
  //modals for different pop ups
   public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='create'){
      button.setAttribute('data-target','#createhotel');
    }
    
    if(mode==='findLoc'){
      button.setAttribute('data-target','#locationForm');
    }

   
    container?.appendChild(button);
    button.click();
  }
  public onOpenModalEdit( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');


    if(mode==='deleteForm'){
      
      button.setAttribute('data-target','#deletehotel');
    }
    if(mode==='editForm'){
     
      button.setAttribute('data-target','#edithotel');
    }
    if(mode==='moreInfo'){
      
      button.setAttribute('data-target','#moreInfo');
    }
    
 

    container?.appendChild(button);
    button.click();
  }






}



