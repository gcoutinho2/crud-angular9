import { Product } from './../../../shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss'],
})
export class ProductCreateComponent implements OnInit {
  product: Product = {
    name: '',
    price: null,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  create(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado');
      this.navigateToProducts();
    });
  }

  cancel(): void {
    this.navigateToProducts();
  }

  navigateToProducts() {
    this.router.navigate(['products']);
  }
}
