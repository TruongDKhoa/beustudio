import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable()
export class ProductServices {

  constructor(
    private http: HttpClient,
  ) { }


  public getProductList(): Observable<any> {
    const data = this.http.get<any>('/assets/mock-data/product.json');
    data.subscribe(x => {
      console.log(x);
    });

    return data;
  }

  public getProductByDistrict(district: string) {

  }
}
