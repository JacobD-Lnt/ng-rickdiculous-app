import { LocationData } from "./location-data";

export class LocationPage{
  info:{
    count:number;
    pages:number;
    next:string;
    prev:string;
  };

  results: LocationData[];
}
