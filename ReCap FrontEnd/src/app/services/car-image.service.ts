import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  apiUrl = 'https://localhost:4200/api/';

  constructor(private httpClient: HttpClient) { }
  getCarImages():Observable<ListResponseModel<CarImage>> {
    return this.httpClient
      .get<ListResponseModel<CarImage>>(this.apiUrl + 'carimages/getall');
  }
  getCarImageByCarId(carId:number):Observable<ListResponseModel<CarImage>>{
    return this.httpClient
    .get<ListResponseModel<CarImage>>(this.apiUrl + 'carimages/getallbycarid?carId=' + carId)
  }
}
