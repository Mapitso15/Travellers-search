import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { WorldMapComponent } from './world-map/world-map.component';
import { ItineraryFormComponent } from './itinerary-form/itinerary-form.component';


@NgModule({
  declarations: [
    SideNavigationComponent,
    TopBarComponent,
    WorldMapComponent,
    ItineraryFormComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SideNavigationComponent,
    TopBarComponent,
    WorldMapComponent,
    ItineraryFormComponent
  ]
})
export class WidgetsModule { }
