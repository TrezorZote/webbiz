export class Product{
    constructor(id:number,contact:number,productCategory:string,
        productDescription: string,productLocation:string,password:number,productPrice:number){
        this.id=id;
        this.contact=contact;
        this.productCategory=productCategory;
        this.productDescription=productDescription;
        this.password=password;
        this.productPrice=productPrice;
        this.productLocation=productLocation;
    }
    id:number
    contact:number;
    productCategory:string;
    productDescription:string;
    productLocation:string;
    password:number;
    productPrice:number;
}