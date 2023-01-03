import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm,NgModel } from '@angular/forms';
import { Product } from './Product';
import Swal from 'sweetalert2';
import { Observable, observable } from 'rxjs';
@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent {
  public productsArray: Product[] = [new Product(2364563,"software engineer","website creation","buea",1234,200000),
  new Product(2364563,"footballer","attack","dortmund",1234,234854),
  new Product(2364563,"chef","african dishes","yaounde",1234,70000)];
 public deleteProd: any;
 public passwordCheck: any;
 

  title='workerapp';
  constructor(){
  }
  ngOnInit(){
     this.getProducts;
  }
 
 public getProducts():void{
  this.productsArray=this.productsArray;
 }

  public onDeleteProduct(id: number):void{
   
  }

  public searchProduct(key:any): void{
    const result:Product[] =[];
    for(const product of this.productsArray){
      if(product.productCategory.toLowerCase().indexOf(key.toLowerCase())!==-1 || product.contact.toPrecision().indexOf(key)!==-1 ){
        result.push(product);
      }
    }
    this.productsArray=result;
    if(result.length===0|| !key){
      this.getProducts();
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
  public onOpenModalEdit( product:Product, mode:string):void{
    const container= document.getElementById('main-container');
    const button =document.createElement('button');
    button.type='button';
    button.style.display='none';
    button.setAttribute('data-toggle','modal');


    if(mode==='deleteForm'){
      this.deleteProd= product;
      button.setAttribute('data-target','#deleteProduct');
    }
    if(mode==='editForm'){
      this.deleteProd= product;
      button.setAttribute('data-target','#editProduct');
    }
   

    container?.appendChild(button);
    button.click();
  }
}









