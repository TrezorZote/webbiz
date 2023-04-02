import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm,NgModel } from '@angular/forms';
import {Hotel } from './hotel';
import Swal from 'sweetalert2';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-hotel',
  templateUrl:'./hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {
  public hotelDates:Date[]=[new Date("2024-10-10"),new Date("2024-10-11"),new Date("2024-10-12"),new Date("2024-10-13"),new Date("2024-10-14")];
  public hotelsArray:Hotel[] = [new Hotel(1,655482943,"hotel","multiple beds available and near toutistic sites","Hamburg str 33",12345678,250,this.hotelDates),
  new Hotel(2,675843921,"hotel","multiple beds available and near toutistic sites","dortmund str 45",12345678,300,this.hotelDates),
  new Hotel(3,689677854,"guestroom","multiple beds available and near toutistic sites","Berlin str 33",12345678,200,this.hotelDates),
  new Hotel(4,623435690,"appartment","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(5,690374854,"hotel","multiple beds available and near toutistic sites","Frankfurt str 33",12345678,200,this.hotelDates),
  new Hotel(6,623435690," guestroom","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(7,623435690,"hotel","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(8,623435690,"hotel","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(9,623435690,"hotel","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(10,623435690,"appaartment","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(11,623435690,"guestroom","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates),
  new Hotel(12,623435690,"hotel","multiple beds available and near toutistic sites","Bochum str 33",12345678,200,this.hotelDates)];
 public deletehotel: any;
 public passwordCheck: any;
 public reservedDates:Date[]=[];
 public staydates:Date[]=[];
 public hotel :Hotel[] =[];
 public corb :Hotel[]=[];
 public minDate:string=this.getCurrent();
 public number:number=13;
 
  title='hotelapp';
  constructor(){
  }
  ngOnInit(){
     this.gethotels;
    console.log(this.getCurrent());
  }
 
 public gethotels():void{
  this.hotelsArray=this.hotelsArray;
 }

 
//get the current date
  public getCurrent():string{
    let date:Date=new Date();
    var string:string= date.getFullYear()+'-03'+'-'+date.getUTCDate();
      
    return string;
  }
  
//post an accomodation
  public newHotel(val1:number,val2:string,val3:string,val4:string,val5:number,val6:number,val7:Date[]):void{
    var num =this.number;
    if(val1!=null &&val2.length>=8&&val3.length>=8&&val4.length>=8&&val5!=null&&val6!=null){
  var newHotel:Hotel = new Hotel(num,val1,val2,val3,val4,val5,val6,val7);
  this.number++;
  this.hotelsArray.push(newHotel);
  this.hotelsArray.reverse();
  Swal.fire({position:'center',icon:'success',
      title:'your accomodation has been posted...enter your contact to see it...it will be deleted on refresh', showConfirmButton: true,
      timer:9000});
      }
      else{
        Swal.fire({position:'center',icon:'error',
      title:'you must enter information in all fields to post this accomodation', showConfirmButton: true,
      timer:4000});
      }
  
  }

  //delete an accomodation
  public onDelete(hotel:Hotel,check:number):void{
    if(check!=hotel.password){
     Swal.fire({position:'center',icon:'error',
     title:'Wrong password...enter 12345678 to delete this accomodation... it will be readded on refresh', showConfirmButton: true,
     timer:8000});
    }
    else{
     this.hotelsArray.forEach(element => {
       if(element.id==hotel.id){
       var index:number = this.hotelsArray.indexOf(element);
       this.hotelsArray.splice(index,1);
       Swal.fire({position:'center',icon:'success',
       title:'accomodation deleted successfully...and will be readded on refresh', showConfirmButton: true,
       timer:7000});
       }
       
     });
    }
   }


//search for accomodation
  public searchhotel(key:any): void{
    const result:Hotel[] =[];
    for(const hotel of this.hotelsArray){
      if(hotel.hotelCategory.toLowerCase().indexOf(key.toLowerCase())!==-1 ||hotel.contact.toPrecision().indexOf(key)!==-1 ){
        result.push(hotel);
      }
    }
    this.hotelsArray=result;
    if(result.length===0|| !key){
      this.gethotels();
    }
  }

  //search by region
  public byRegion(region:string):void{
    this.hotelsArray.forEach(element => {
      if(element.hotelLocation.toLowerCase().indexOf(region.toLowerCase())!=-1){
       this.hotel.push(element);
      }
    });
    this.hotelsArray=this.hotel;
if(region.length>=3){
      Swal.fire({position:'center',icon:'success',
      title:'filtered for hotels in the given region', showConfirmButton: true,
     timer:4000});

    setTimeout(()=>{window.location.reload();},18000);
}
   }

   public addDate(dates:Date,state:string):void{
    if(state=='booked'){
   this.reservedDates.push(dates);
   } 
   if(state=='stay'){
    this.staydates.push(dates);
   }
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
  public onOpenModalEdit(Hotel:Hotel, mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');


    if(mode==='deleteForm'){
      this.deletehotel=Hotel;
      button.setAttribute('data-target','#deletehotel');
    }
    if(mode==='editForm'){
      this.deletehotel=Hotel;
      button.setAttribute('data-target','#edithotel');
    }
    if(mode==='moreInfo'){
      this.deletehotel=Hotel;
      button.setAttribute('data-target','#moreInfo');
    }
    
 

    container?.appendChild(button);
    button.click();
  }






}



