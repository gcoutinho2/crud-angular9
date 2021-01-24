import { Product } from 'src/app/shared/interfaces/product.interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss'],
})
export class ProductUpdateComponent implements OnInit {
  product: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log('ID', id);
    this.productService.readById(id).subscribe((res) => {
      this.product = res;
    });
  }

  update(): void {
    console.log('Product', this.product);
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado com sucesso!');
      this.navigateToProducts();
    });
  }

  cancel(): void {
    this.navigateToProducts();
  }

  navigateToProducts(): void {
    this.router.navigate(['products']);
  }
}
