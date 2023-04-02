 export class Hotel{
    constructor(id:number,contact:number,hotelCategory:string,
        hotelDescription: string,hotelLocation:string,password:number,hotelPrice:number, resrvedDates:Date[]){
        this.id=id;
        this.contact=contact;
        this.hotelCategory=hotelCategory;
        this.hotelDescription=hotelDescription;
        this.password=password;
        this.hotelPrice=hotelPrice;
        this.hotelLocation=hotelLocation;
        this.reservedDates=resrvedDates;
       
    }
    id:number
    contact:number;
    hotelCategory:string;
    hotelDescription:string;
    hotelLocation:string;
    password:number;
    hotelPrice:number;
    reservedDates:Date[];
   
 }