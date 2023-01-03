export class Event{
    constructor(contact:number,eventCategory:string,
        eventDescription: string,eventLocation:string,password:number){
        this.contact=contact;
        this.eventCategory=eventCategory;
        this.eventDescription=eventDescription;
        this.password=password;
        this.eventLocation=eventLocation;
    }
    contact:number;
    eventCategory:string;
    eventDescription:string;
    eventLocation:string;
    password:number;
}