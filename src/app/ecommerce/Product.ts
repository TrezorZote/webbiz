export class Product{
    constructor(contact:number,productCategory:string,
        productDescription: string,productLocation:string,password:number,productPrice:number){
        this.contact=contact;
        this.productCategory=productCategory;
        this.productDescription=productDescription;
        this.password=password;
        this.productPrice=productPrice;
        this.productLocation=productLocation;
    }
    contact:number;
    productCategory:string;
    productDescription:string;
    productLocation:string;
    password:number;
    productPrice:number;
}