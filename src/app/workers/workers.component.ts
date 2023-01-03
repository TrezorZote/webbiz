import { Component } from '@angular/core';
import { Worker } from './Worker';
@Component({
  selector: 'app-workers',
  templateUrl: './workers.component.html',
  styleUrls: ['./workers.component.css']
})
export class WorkersComponent {

  public workersArray: Worker[] = [new Worker(2364563,"software engineer","website creation","buea",1234,"banga@gmail.com"),
                                  new Worker(2364563,"footballer","attack","dortmund",1234,"fenty@gmail.com"),
                                  new Worker(2364563,"chef","african dishes","yaounde",1234,"hoha@gmail.com")];
  public deleteWorker: any;
  public passwordCheck: any;
  
 
   title='workerapp';
   constructor(){
   }
   ngOnInit(){
      this.getWorkers;
   }
  
  public getWorkers():void{
   this.workersArray=this.workersArray;
  }
 
 
   public searchWorker(key:any): void{
     const result:Worker[] =[];
     for(const worker of this.workersArray){
       if(worker.jobtitle.toLowerCase().indexOf(key.toLowerCase())!==-1 ){
         result.push(worker);
       }
     }
     this.workersArray=result;
     if(result.length===0|| !key){
       this.getWorkers();
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
       button.setAttribute('data-target','#deleteProduct');
     }
     if(mode==='editForm'){
       this.deleteWorker=worker;
       button.setAttribute('data-target','#editProduct');
     }
    
 
     container?.appendChild(button);
     button.click();
   }
 }
 
