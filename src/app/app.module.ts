import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EventsComponent } from './events/events.component';
import { HotelComponent } from './hotel/hotel.component';
import { WorkersComponent } from './workers/workers.component';
import { AccountComponent } from './account/account.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    EventsComponent,
    WorkersComponent,HotelComponent,AccountComponent,HomeComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([{path:'commerce',component:EcommerceComponent},
      {path:'',component:HomeComponent},
    {path:'hotel',component:HotelComponent}
    ,{path:'events',component:EventsComponent},{path:'workers',component:WorkersComponent},
    {path:'account',component:AccountComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent,EcommerceComponent,EventsComponent,WorkersComponent,HotelComponent,AccountComponent,HomeComponent]
})
export class AppModule { }
