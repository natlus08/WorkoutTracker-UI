import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddworkoutComponent } from './addworkout/addworkout.component';
import { StartworkoutComponent } from './startworkout/startworkout.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { EditworkoutComponent } from './editworkout/editworkout.component';
import { ViewworkoutsComponent } from './viewworkouts/viewworkouts.component';
import { EndworkoutComponent } from './endworkout/endworkout.component';
import { TrackComponent } from './track/track.component';
import { mainrouting } from './router/main-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AddworkoutComponent,
    StartworkoutComponent,
    AddcategoryComponent,
    EditworkoutComponent,
    ViewworkoutsComponent,
    EndworkoutComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    mainrouting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
