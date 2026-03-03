import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class Rxresource {
  products_Api_Urls: string = 'https://fakestoreapi.com';
  end_Point: string = '/products';


  constructor(private http: HttpClient) { }


  myRxResourceProductList = rxResource<any, any>({
    stream: () => this.http.get<any[]>(`${this.products_Api_Urls}${this.end_Point}`)
  });
  

}
