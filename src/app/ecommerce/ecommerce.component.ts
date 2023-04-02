import { Component } from '@angular/core';
import { Product } from './Product';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ecommerce',
  templateUrl: './ecommerce.component.html',
  styleUrls: ['./ecommerce.component.css']
})
export class EcommerceComponent { 
  public productsArray: Product[] = [new Product(1,655482943,"device","Iphone 14 128Gb memory","Hamburg str 33",12345678,250000),
  new Product(2,675843921,"device","slim playstation 5 with 2 games","dortmund str 45",12345678,300000),
  new Product(3,689677854," men shirts","xxl bershka shirts","Berlin str 33",12345678,2000000),
  new Product(4,623435690,"women shoes","high heels gucci","Bochum str 33",12345678,20000),
  new Product(5,690374854,"house","new appartment accomodated for rent","Frankfurt str 33",12345678,200000),
  new Product(6,623435690," men shoes","air jordans 1998s","Bochum str 33",12345678,20000),
  new Product(7,623435690,"women dress","skinny elastic jeans","Bochum str 33",12345678,20000),
  new Product(8,623435690,"device","iphone 13","Bochum str 33",12345678,20000),
  new Product(9,623435690,"house"," with 3 bedrooms plus garden","Bochum str 33",12345678,20000),
  new Product(10,623435690,"sport shoes","nike baskets unisex","Bochum str 33",12345678,20000),
  new Product(11,623435690,"women bag"," versache handbags","Bochum str 33",12345678,20000),
  new Product(12,623435690," men jeans","zara xl beige jeans","Bochum str 33",12345678,20000)];
 public deleteProd: any;
 public passwordCheck: any;
 public category : Product[] =[];
 public corb : Product[]=[];
 public number: number=13;
 
  title='workerapp';
  constructor(){
  }
  ngOnInit(){
     this.getProducts;
  }
 
 public getProducts():void{
  this.productsArray=this.productsArray;
 }

 //delete product using password check and id//
  public onDeleteProduct(prod:Product,check:number):void{
   if(check!=prod.password){
    Swal.fire({position:'center',icon:'error',
    title:'Wrong password...enter 12345678 to delete this product... it will be readded on refresh', showConfirmButton: true,
    timer:8000});
   }
   else{
    this.productsArray.forEach(element => {
      if(element.id==prod.id){
      var index:number = this.productsArray.indexOf(element);
      this.productsArray.splice(index,1);
      Swal.fire({position:'center',icon:'success',
      title:'product was deleted successfully...and will be readded on refresh', showConfirmButton: true,
      timer:7000});
      }
      
    });
   }
  }

  //create a new product with entered iputs from form//
  public newProd(val1:number,val2:string,val3:string,val4:string,val5:number,val6:number):void{
    var num =this.number;
    if(val1!=null &&val2.length>=8&&val3.length>=8&&val4.length>=8&&val5!=null&&val6!=null){
  var newProduct:Product = new Product(num,val1,val2,val3,val4,val5,val6);
  this.number++;
  this.productsArray.push(newProduct);
  this.productsArray.reverse();
  Swal.fire({position:'center',icon:'success',
      title:'your product has been posted successfully...enter your phone number to see it...it will be deleted on refresh', showConfirmButton: true,
      timer:9000});
      }
      else{
        Swal.fire({position:'center',icon:'error',
      title:'you must enter information in all fields to post this product', showConfirmButton: true,
      timer:4000});
      }
  
  }

  //set productlist to choosed category//
  public setCategory(cat:string):void{
    if(cat==="men"){
   this.productsArray.forEach(element => {
        if(element.productCategory.indexOf(" men")!=-1){
          this.category.push(element);
        }
      });
      Swal.fire({position:'center',icon:'success',
      title:'filtered for men products only...page reloads in a bit', showConfirmButton: true,
      timer:4000});
      this.productsArray=this.category;
    }
    else if(cat==="women"){
      this.productsArray.forEach(element => {
           if(element.productCategory.indexOf("women")!=-1){
             this.category.push(element);
           }
         });
         Swal.fire({position:'center',icon:'success',
         title:'filtered for women products only...page reloads in a bit', showConfirmButton: true,
        timer:4000});
         this.productsArray=this.category;
       }
       else if(cat==="sport"||cat==="men"){
        this.productsArray.forEach(element => {
             if(element.productCategory.indexOf("sport")!=-1){
               this.category.push(element);
             }
           });
           Swal.fire({position:'center',icon:'success',
           title:'filtered for sport products only...page reloads in a bit', showConfirmButton: true,
           timer:4000});
           this.productsArray=this.category;
         }
         else if(cat==="device"){
          this.productsArray.forEach(element => {
               if(element.productCategory.indexOf("electr")!=-1){
                 this.category.push(element);
               }
             });
             Swal.fire({position:'center',icon:'success',
             title:'filtered for electronic products only...page reloads in a bit', showConfirmButton: true,
             timer:4000});
             this.productsArray=this.category;
           }
           else if(cat==="house"){
            this.productsArray.forEach(element => {
                 if(element.productCategory.indexOf("hou")!=-1){
                   this.category.push(element);
                 }
               });
               Swal.fire({position:'center',icon:'success',
               title:'filtered for houses appartments...page reloads in a bit ', showConfirmButton: true,
               timer:4000});
               this.productsArray=this.category;
             }

             setTimeout(()=>{window.location.reload();},15000);
  }

//search for a given product in products list//
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

//pop up modals for different actions//
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

    if(mode==='corb'){
      button.setAttribute('data-target','#showcorb');
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


//place product in corb list//
  public select( selectedProduct:Product):void{
    if(this.corb.length==0){
      this.corb.push(selectedProduct);
      Swal.fire({position:'center',icon:'success',
      title:'product added successfully to corb', showConfirmButton: true,footer:'left to contact product owner',
      timer:4000})}
    else {
      var count : number = 0;
     this.corb.forEach(element => {
      if(element.id==selectedProduct.id)
      {
       count= count+1;
     }
    }); 
   if(count==0)
   {
    this.corb.push(selectedProduct);
    Swal.fire({position:'center',icon:'success',
    title:'product added successfully to corb', showConfirmButton: true,footer:'left to contact product owner',
    timer:4000})
  }
  }
}


}



