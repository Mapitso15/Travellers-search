import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { ItineraryFormComponent } from './itinerary-form/itinerary-form.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SideNavigationComponent,
    TopBarComponent,
    WorldMapComponent,
    ItineraryFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ], 
  exports: [
    SideNavigationComponent,
    TopBarComponent,
    WorldMapComponent,
    ItineraryFormComponent,
    ReactiveFormsModule
  ]
})
export class WidgetsModule { }
