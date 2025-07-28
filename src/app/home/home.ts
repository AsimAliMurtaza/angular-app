import { Component, inject } from '@angular/core';
import { HousingLocation } from '../housing-location/housing-location';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService: Housing = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getHousingLocationList();
  }
}
