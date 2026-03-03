import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Resource {
  products_Api_Urls: string = 'https://fakestoreapi.com';
  end_Point: string = '/products';


  constructor(private http: HttpClient) { }


  myResourceProductList = resource({
    loader: () => fetch(`${this.products_Api_Urls}${this.end_Point}`).then((_res: any) => _res.json()) as Promise<any>
    // loader:()=> this.http.get(`${this.products_Api_Urls}${this.end_Point}`).toPromise(),
  })
}
