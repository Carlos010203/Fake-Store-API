import { Component, OnInit } from '@angular/core';
import { FakeStoreService } from '../../services/fake-store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  products: Product[] = [];

  constructor(private fakeStoreService: FakeStoreService) {}

  ngOnInit() {
    this.loadProducts();
  }

  loadProducts() {
    this.fakeStoreService.getProducts().subscribe((data: Product[]) => {
      this.products = data;
    });
  }
}