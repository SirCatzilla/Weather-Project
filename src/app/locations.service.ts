import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { LocationsComponent } from './locations/locations.component';

export interface Location {
	type: 'coordinates' | 'zipcode' | 'city_id';
	cityName?: string;
	cityId?: string;
	lat?: string;
	lng?: string;
	zipCode?: string;
	countryCode?: string;
}


@Injectable()
export class LocationsService {


	Locations : Observable<Location[]>;

	constructor() {

	 }



	

	addCityId(cityId: string) : void {
		

	}

	addCoordinates(lat: number, lng: number) : void {

		
	}

	addZipCode(zipCode: string, countryCode: string) : void {

	}

	add(loc: Location) : void {


	}

	all() : Location[]{
		return;
	}
}


