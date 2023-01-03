import { NgModule } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, NgModel } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { EventsComponent } from './events/events.component';
import { WorkersComponent } from './workers/workers.component';

@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    EventsComponent,
    WorkersComponent
  ],
  imports: [
    BrowserModule,FormsModule,RouterModule.forRoot([{path:'commerce',component:EcommerceComponent}
    ,{path:'events',component:EventsComponent},{path:'workers',component:WorkersComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent,EcommerceComponent,EventsComponent,WorkersComponent]
})
export class AppModule { }
