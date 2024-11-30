import { Component } from '@angular/core';
import { MenuComponent } from '../../../components/menu/menu.component';

@Component({
  selector: 'fnd-product-page',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

}
