import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class Housing {
  url = 'http://localhost:3000/locations';
  housingLocationList: HousingLocationInfo[] = [];

  async getHousingLocationList(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (this.housingLocationList =
      (await data.json()) as HousingLocationInfo[]);
  }

  async getHousingLocationById(
    id: number
  ): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    const locationJson = await data.json();
    return locationJson[0] ?? {};
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
    );
  }
}
