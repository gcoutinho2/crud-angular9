import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Product } from '../shared/interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  baseUrl = 'http://localhost:3001/products';

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string) {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: 'right',
      verticalPosition: 'top',
    });
  }

  getUrlWithParameter(parameter: string | number) {
    return `${this.baseUrl}/${parameter}`;
  }

  create(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl, product);
  }

  read(): Observable<Product[]> {
    return this.http.get<Product[]>(this.baseUrl);
  }

  readById(id: string): Observable<Product> {
    return this.http.get<Product>(this.getUrlWithParameter(id));
  }

  update(product: Product): Observable<Product> {
    return this.http.put<Product>(this.getUrlWithParameter(product.id), product);
  }

  delete(id: string): Observable<Product> {
    return this.http.delete<Product>(this.getUrlWithParameter(id));
  }
}
