
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
  public eventsArray: Event[] = [ new Event(12,692923746,"Concert","Joeboy 2k23 UK tour must be there","London O2 arena",12345),
  new Event(1,681435264,"Concert","Burna Boy europe tour"," Cologne lanxess arena ",12345),
  new Event(2,676453624,"Poolparty","cool poolparty for students","Stuttgart str 30",12345),
  new Event(3,692923746,"Houseparty","crazy houseparty open to everyone","Bochum Bahnhof str 52",12345),
  new Event(4,672204043,"Birthday","want to celebrate my birthday with y'all","Essen borbeck str 14",12345),
  new Event(5,622765893,"Club","come spend the night with us and enjoy good music","Hamburg Bahnhof Str 18",12345),
  new Event(6,622765893,"Concert","Rema US tour","koln Bahnhof Str 18",12345),
  new Event(7,622765893,"Club","come spend the night with us and enjoy good music","koln Bahnhof Str 18",12345),
  new Event(8,622765893,"football","Dortmund gegen Bayern der Klassiker","Bayern Bahnhof Str 18",12345),
  new Event(9,622765893,"Concert","Chris Breezy under the influence tour ","Frankfurt Str 18",12345),
  new Event(10,692923746,"Houseparty","crazy houseparty open to everyone","Bochum nrw alle 52",12345),
  new Event(11,692923746,"Houseparty","crazy houseparty open to everyone","Dortmund nrw alle 52",12345),
  new Event(13,692923746,"Concert","Joeboy 2k23 UK tour must be there","London O2 arena ",12345)];
 public deleteEvent: any;
 public passwordCheck: any;
 public number:number=14;

  title='workerapp';
  constructor(){
  }
  ngOnInit(){
     this.getEvents;
  }
 
 public getEvents():void{
  this.eventsArray=this.eventsArray;
 }

//search event by category//
  public searchEvent(key:any): void{
    const result:Event[] =[];
    for(const event of this.eventsArray){
      if(event.eventCategory.toLowerCase().indexOf(key.toLowerCase())!==-1 || event.contact.toPrecision().indexOf(key)!==-1){
        result.push(event);
      }
    }
    this.eventsArray=result;
    if(result.length===0|| !key){
      this.getEvents();
    }
  }

  //search events by region entered//
  public byRegion(region:string):void{
    var regionArray: Event[]=[];
    this.eventsArray.forEach(element => {
      if(element.eventLocation.toLowerCase().indexOf(region.toLowerCase())!=-1){
       regionArray.push(element);
      }
    });
    this.eventsArray=regionArray;
if(region.length>=3){
      Swal.fire({position:'center',icon:'success',
      title:'filtered for events in the given region', showConfirmButton: true,
     timer:4000});

    setTimeout(()=>{window.location.reload();},18000);
}
   }
 
//delete an event using password//
   public onDeleteEvent(event:Event,check:number):void{
    if(check!=event.password){
     Swal.fire({position:'center',icon:'error',
     title:'Wrong password...enter 12345 to delete this event... it will be readded on refresh', showConfirmButton: true,
     timer:8000});
    }
    else{
     this.eventsArray.forEach(element => {
       if(element.id==event.id){
       var index:number = this.eventsArray.indexOf(element);
       this.eventsArray.splice(index,1);
       Swal.fire({position:'center',icon:'success',
       title:'event was deleted successfully...and will be readded on refresh', showConfirmButton: true,
       timer:7000});
       }
       
     });
    }
   }

//post new Event//
   public newEvent(val1:string,val2:string,val3:string,val4:number,val5:number):void{
    var num =this.number;
    if(val1.length>=8 &&val2.length>=8&&val3.length>=8&&val4!=null&&val5!=null){
  var newEvent:Event = new Event(num,val4,val1,val3,val2,val5);
  this.number++;
  this.eventsArray.push(newEvent);
  this.eventsArray.reverse();
  Swal.fire({position:'center',icon:'success',
      title:'your Event has been posted successfully...enter your phone number to see it...it will be deleted on refresh', showConfirmButton: true,
      timer:9000});
      }
      else{
        Swal.fire({position:'center',icon:'error',
      title:'you must enter information in all fields to post this Event', showConfirmButton: true,
      timer:4000});
      }
  
  }

  //modal for pop up bootstrap//
  public onOpenModal( mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');

    if(mode==='create'){
      button.setAttribute('data-target','#createEvent');
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
      button.setAttribute('data-target','#deleteEvent');
    }
    if(mode==='editForm'){
      this.deleteEvent=event;
      button.setAttribute('data-target','#editEvent');
    }
    if(mode==='moreInfo'){
      this.deleteEvent=event;
      button.setAttribute('data-target','#moreInfo');
    }

    container?.appendChild(button);
    button.click();
  }
}



