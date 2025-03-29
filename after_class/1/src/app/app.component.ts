import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsModule } from './products/products.module';
import { TableComponent } from './products/table/table.component';
import { LayoutModule } from './layout/layout.module';
import { NavbarComponent } from './layout/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [ProductsModule, LayoutModule],
})
export class AppComponent {
  title = '1';
}
