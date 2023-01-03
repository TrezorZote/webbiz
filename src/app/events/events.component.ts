
import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators,NgModel } from '@angular/forms';
import { Event } from './Event';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
  public eventsArray: Event[] = [new Event(2364563,"software engineer","website creation","buea",1234),
  new Event(2364563,"footballer","attack","dortmund",1234),
  new Event(2364563,"chef","african dishes","yaounde",1234)];
 public deleteEvent: any;
 public passwordCheck: any;
 

  title='workerapp';
  constructor(){
  }
  ngOnInit(){
     this.getEvents;
  }
 
 public getEvents():void{
  this.eventsArray=this.eventsArray;
 }


  public searchProduct(key:any): void{
    const result:Event[] =[];
    for(const event of this.eventsArray){
      if(event.eventCategory.toLowerCase().indexOf(key.toLowerCase())!==-1 ){
        result.push(event);
      }
    }
    this.eventsArray=result;
    if(result.length===0|| !key){
      this.getEvents();
    }
  }


  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='create'){
      button.setAttribute('data-target','#createProduct');
    }
    
    if(mode==='findLoc'){
      button.setAttribute('data-target','#locationForm');
    }
   
   
    container?.appendChild(button);
    button.click();
  }
  public onOpenModalEdit(event:Event, mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');


    if(mode==='deleteForm'){
      this.deleteEvent= event;
      button.setAttribute('data-target','#deleteProduct');
    }
    if(mode==='editForm'){
      this.deleteEvent=event;
      button.setAttribute('data-target','#editProduct');
    }
   

    container?.appendChild(button);
    button.click();
  }
}



