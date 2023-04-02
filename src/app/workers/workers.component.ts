import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Worker } from './Worker';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {

  public workersArray: Worker[] = [ new Worker(1,656395768,"photograph","whatever pictures you want","Berlin nrw",123456789,"fantama@gmail.com")
  ,new Worker(2,675643902,"Web developer","website and Apps creation","Buea Cameroon",1234,"bebanga@gmail.com"),
  new Worker(3,675643902,"Web developer","website and Apps creation","Frankfurt Cameroon",1234,"bebanga@gmail.com"),
    new Worker(4,664530587,"driver","taxi driver call any time","Dortmund nrw",123456789,"merdecombi@gmail.com"),
    new Worker(5,664530587,"plumber","all sort of leakages","Bochum nrw",123456789,"merdecombi@gmail.com"),
    new Worker(6,656395768,"chef","african and exotish dishes","Yaounde cameroon",123456789,"heinpere@gmail.com"),
    new Worker(7,656395768,"Electrician","repair of elctronic devices","Douala cameroon",123456789,"tuyanor@gmail.com"),
    new Worker(8,656395768,"chef","repair of elctronic devices","Duisburg cameroon",123456789,"tuyanor@gmail.com"),
    new Worker(9,656395768,"driver","taxi driver call any time","Berlin cameroon",123456789,"tuyanor@gmail.com"),
    new Worker(10,656395768," event manager","repair of elctronic devices","Duisburg cameroon",123456789,"tuyanor@gmail.com"),
    new Worker(11,656395768,"Electrician","repair of elctronic devices","Hamburg cameroon",123456789,"tuyanor@gmail.com"),
    new Worker(12,656395768,"taxi driver","repair of elctronic devices","Duisburg cameroon",123456789,"tuyanor@gmail.com")];
  public deleteWorker: any;
  public passwordCheck: any;
  public regionArray:Worker[]=[];
 public number:number=14;
   title='workerapp';
   constructor(){
   }
   ngOnInit(){
      this.getWorkers;
   }
  
  public getWorkers():void{
   this.workersArray=this.workersArray;
  }
 

  public newWorker(val1:number,val2:string,val3:string,val4:string,val5:number,val6:string):void{
    var num =this.number;
    if(val1!=null &&val2.length>=8&&val3.length>=8&&val4.length>=8&&val5!=null&&val6.length>=15){
  var newWorker:Worker = new Worker(num,val1,val2,val3,val4,val5,val6);
  this.number++;
  this.workersArray.push(newWorker);
  this.workersArray.reverse();
  Swal.fire({position:'center',icon:'success',
      title:'your Worker profile has been posted...enter your phone number to see it...it will be deleted on refresh', showConfirmButton: true,
      timer:9000});
      }
      else{
        Swal.fire({position:'center',icon:'error',
      title:'you must enter information in all fields to post your profile', showConfirmButton: true,
      timer:4000});
      }
  
  }

  public onDelete(worker:Worker,check:number):void{
    if(check!=worker.password){
     Swal.fire({position:'center',icon:'error',
     title:'Wrong password...enter 12345 to delete this profile... it will be readded on refresh', showConfirmButton: true,
     timer:8000});
    }
    else{
     this.workersArray.forEach(element => {
       if(element.id==worker.id){
       var index:number = this.workersArray.indexOf(element);
       this.workersArray.splice(index,1);
       Swal.fire({position:'center',icon:'success',
       title:'profile deleted successfully...and will be readded on refresh', showConfirmButton: true,
       timer:7000});
       }
       
     });
    }
   }

 
   public searchWorker(key:any): void{
     const result:Worker[] =[];
     for(const worker of this.workersArray){
       if(worker.jobtitle.toLowerCase().indexOf(key.toLowerCase())!==-1 || key.indexOf(worker.workZone)!=-1){
         result.push(worker);
       }
     }
     this.workersArray=result;
     if(result.length===0|| !key){
       this.getWorkers();
     }
   }
 
   public byRegion(region:string):void{
    this.workersArray.forEach(element => {
      if(element.workZone.toLowerCase().indexOf(region.toLowerCase())!=-1){
       this.regionArray.push(element);
      }
    });
    this.workersArray=this.regionArray;
if(region.length>=3){
      Swal.fire({position:'center',icon:'success',
      title:'filtered for workers in the given region', showConfirmButton: true,
     timer:4000});

    setTimeout(()=>{window.location.reload();},18000);
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
   public onOpenModalEdit(worker:Worker, mode:string):void{
     const container= document.getElementById('main-container');
     const button =document.createElement('button');
     button.type='button';
     button.style.display='none';
     button.setAttribute('data-toggle','modal');
 
 
     if(mode==='deleteForm'){
       this.deleteWorker= worker;
       button.setAttribute('data-target','#deleteWorker');
     }
     if(mode==='editForm'){
       this.deleteWorker=worker;
       button.setAttribute('data-target','#editProduct');
     }
     if(mode==='moreInfo'){
      this.deleteWorker=worker;
      button.setAttribute('data-target','#moreInfo');
    }
    
 
     container?.appendChild(button);
     button.click();
   }
 }
 
