import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, NgForm,NgModel } from '@angular/forms';
import {Account } from './account';
import Swal from 'sweetalert2';
import { Observable, observable } from 'rxjs';
import { Transaction } from './Transaction';
@Component({
  selector: 'app-account',
  templateUrl:'./account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
    constructor(){}
    public example:Transaction[]=[new Transaction(1,10000,"payment for online","12-08-2023",0,true),new Transaction(2,10000,"payment for food online","13-08-2023",0,true)];
    public account:Account=new Account(1,303030,"Christa Roonaldo0","Portugal Lisboa","temliz",12345,70000,this.example,false);
    public otheraccount:Account=new Account(2,232323,"Liopel Messim","Argentina nowhere","temliz",54321,70000,[],false);
    count:number=3;

    public signin(name:string,address:string,emaill:string,contact:number,passwor:number):void{
     const newUser:Account=new Account(this.count,contact,name,address,emaill,passwor,50000,[],true);
      this.count++;
      this.account=newUser;
      const dismiss= document.getElementById('diss');
      dismiss?.click();
      Swal.fire({position:'center',icon:'success',
      title:'signed in successfully welcome to Temliz accounts', showConfirmButton: true,
      timer:4000});
    }

   

    public accountlogin(passwo:number,emailIn:string):void{
      if(this.account.email==emailIn){
        if(this.account.password!=passwo){
          Swal.fire({position:'center',icon:'error',
          title:'Wrong password enter given password ', showConfirmButton: true,
          timer:4000});
        }
        else{
          this.account.loggedIn=true;
          const dismiss= document.getElementById('dismiss');
          dismiss?.click();
          Swal.fire({position:'center',icon:'success',
          title:'logged in successfully to account', showConfirmButton: true,
          timer:4000}) ; 
      }  
    }else{
      Swal.fire({position:'center',icon:'error',
          title:'Wrong email enter given email temliz', showConfirmButton: true,
          timer:4000});
    }
    }

   
    
    public accountlogout():void{
      this.account.loggedIn=false;
      const dismiss= document.getElementById('out');
      dismiss?.click();
      Swal.fire({position:'center',icon:'success',
      title:'successfully logged out of account', showConfirmButton: true,
      timer:4000});
    }

    public getCurrent():string{
        let date:Date=new Date();
        var string:string= date.getFullYear()+'-10'+'-'+date.getUTCDate();
          
        return string;
      }


public transfer(numreceive:number,amountent:number,description:string,passt:number):void{
  if(passt==this.account.password){
    if(amountent<=this.account.balance){
      this.account.balance=this.account.balance-amountent;
         const sender:Transaction=new Transaction(1,amountent,description,this.getCurrent(),0,true);
           this.account.transactions.push(sender);
           this.account.transactions.reverse();
         const receiver:Transaction=new Transaction(1,0,description,this.getCurrent(),amountent,true);
          
    if(this.otheraccount.contact!=numreceive){
      Swal.fire({position:'center',icon:'error',
      title:'an errror occured try verifying receiver details', showConfirmButton: true,
      timer:4000});
    }
    else{
      this.otheraccount.transactions.push(receiver);
      this.otheraccount.balance=this.otheraccount.balance+amountent;
      Swal.fire({position:'center',icon:'success',
        title:'amount was successfully transfered', showConfirmButton: true,
        timer:4000});
    }
   
  }
  else{
    Swal.fire({position:'center',icon:'error',
    title:'insufficient funds to make this transaction make a deposit to your account', showConfirmButton: true,
    timer:4000});
  }
}
else{
  Swal.fire({position:'center',icon:'error',
  title:'enter your password for this transaction', showConfirmButton: true,
  timer:4000});
}
}

    public onOpenModal( mode:string):void{
        const container= document.getElementById('main-container');
        const button =document.createElement('button');
        button.type='button';
        button.style.display='none';
        button.setAttribute('data-toggle','modal');
    
        if(mode==='sign'){
          button.setAttribute('data-target','#signin');
        }
        
        if(mode==='log'){
          button.setAttribute('data-target','#login');
        }
        if(mode==='info'){
            button.setAttribute('data-target','#info');
          }
          if(mode==='transac'){
            button.setAttribute('data-target','#transac');
          }
          if(mode==='transfer'){
            button.setAttribute('data-target','#transfer');
          }
    
       
        container?.appendChild(button);
        button.click();
      }
}