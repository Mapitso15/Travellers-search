import { Injectable } from '@angular/core';
import { MasterService } from '../master/master.service';
import { environment } from 'src/environments/environment';
import { APIConstant } from '../../constant/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private master: MasterService) { }

  getAllCountries() {
    this.master.get(environment.api + APIConstant)
  }
}
