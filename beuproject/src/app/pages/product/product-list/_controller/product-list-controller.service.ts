import { Injectable } from '@angular/core';
import { ProductServices } from 'src/app/shared/services/product.service';

@Injectable({
  providedIn: 'root'
})
export class ProductListControllerService {

  constructor(
    private productServices: ProductServices
  ) { }

  public getProductList() {
    return this.productServices.getProductList();
  }

  public getProductByDistrict(district: string) {

  }
}
