import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { APIConstant } from '../../constant/APIConstants';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private master: MasterService) { }

  getAllCountries() {
    this.master.get(environment.api + APIConstant)
  }
}
