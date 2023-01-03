export class Worker{
    constructor(contact:number,jobtitle:string,
        specialty: string,workZone:string,password:number,email:string){
        this.contact=contact;
        this.jobtitle=jobtitle;
        this.specialty=specialty;
        this.password=password;
        this.workZone=workZone;
        this.email=email;
    }
    contact:number;
    jobtitle:string;
    specialty:string;
    workZone:string;
    password:number;
    email:string;
}