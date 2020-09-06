import { Component, OnInit } from '@angular/core';
import { ProductListControllerService } from './_controller/product-list-controller.service';
import { Product } from 'src/app/shared/models/product';
import { SelectItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  selectedProduct: Product;
  displayDialog: boolean;
  sortKey: string;
  sortOptions: SelectItem[];
  sortOrder: number;
  sortField: string;

  sortDistrict: SelectItem[];
  constructor(
    private productListController: ProductListControllerService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.generateData();

    console.log('2: ', this.products);
  }

  public generateData() {
    const results = this.productListController.getProductList();

    if (results) {
      results.subscribe(data => {
        this.products = data.data;
      });
      console.log('1: ', results);
    }
  }

  selectProduct(event: Event, product: Product) {
    this.selectedProduct = product;
    this.router.navigateByUrl(`home/product-detail/${this.selectedProduct.id}`);
    // this.displayDialog = true;
    event.preventDefault();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    } else {
        this.sortOrder = 1;
        this.sortField = value;
    }
  }

  // public onSortDistrict(event) {
  //   const district = event.value;
  //   this.filterByDistrict(district);
  // }

  // public async filterByDistrict(district: string) {
  //   let data: any = [];

  //   if (!district) {
  //     this.generateData();
  //   } else {
  //     const results = await this.productListController.getProductByDistrict(district);

  //     if (results) {
  //       results.forEach(x => {
  //         data.push(x);
  //       })

  //       this.products = data;
  //     }
  //   }
  //}
}
