import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FakeStoreService } from '../../services/fake-store.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private fakeStoreService: FakeStoreService
  ) {}

  ngOnInit() {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.getProduct(productId);
    }
  }

  getProduct(id: string) {
    this.fakeStoreService.getProductById(id).subscribe((data: Product) => {
      this.product = data;
    });
  }
}