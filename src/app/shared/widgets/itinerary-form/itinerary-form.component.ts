import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'widget-itinerary-form',
  templateUrl: './itinerary-form.component.html',
  styleUrls: ['./itinerary-form.component.scss'],
})
export class ItineraryFormComponent {
  countries: any = ['USA', 'UK', 'Canada'];
  travelReason: any = ['Marine & Offshore', 'Conference', 'Work'];
  travellers: any = ['Option 1(Uk)', 'Option 2(Canada)', 'Option 3(USA)'];

  itineraryForm = new FormGroup({
    travelOrigin: new FormControl('', Validators.required),
    travelDestination: new FormControl('', Validators.required),
    arrival: new FormControl('', Validators.required),
    depature: new FormControl('', Validators.required),
    purposeOfTravel: new FormControl('', Validators.required),
    addTravellers: new FormControl('', Validators.required)
  });
  
  get f(){
    return this.itineraryForm.controls;
  }
}