import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.scss',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocation: HousingLocationInfo | undefined;
  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);
  }
}
