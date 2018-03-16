import { NgModule } from '@angular/core';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewworkoutsComponent } from '../viewworkouts/viewworkouts.component';
import { AddworkoutComponent } from '../addworkout/addworkout.component';
import { AddcategoryComponent } from '../addcategory/addcategory.component';
import { EditworkoutComponent } from '../editworkout/editworkout.component';
import { StartworkoutComponent } from '../startworkout/startworkout.component';
import { EndworkoutComponent } from '../endworkout/endworkout.component';
import { TrackComponent } from '../track/track.component';

const mainRoutes: Routes = [
  { path: 'View', component: ViewworkoutsComponent },
  { path: 'Edit', component: EditworkoutComponent },
  { path: 'Start', component: StartworkoutComponent },
  { path: 'End', component: EndworkoutComponent },
  { path: 'Create', component: AddworkoutComponent },
  { path: 'Category', component: AddcategoryComponent },
  { path: 'Track', component: TrackComponent },
  { path: '**', redirectTo: 'View'}
];

export const mainrouting: ModuleWithProviders = RouterModule.forRoot(mainRoutes);
