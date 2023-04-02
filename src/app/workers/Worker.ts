export class Worker{
    constructor(id:number,contact:number,jobtitle:string,
        specialty: string,workZone:string,password:number,email:string){
            this.id=id;
        this.contact=contact;
        this.jobtitle=jobtitle;
        this.specialty=specialty;
        this.password=password;
        this.workZone=workZone;
        this.email=email;
    }
    id:number;
    contact:number;
    jobtitle:string;
    specialty:string;
    workZone:string;
    password:number;
    email:string;
}