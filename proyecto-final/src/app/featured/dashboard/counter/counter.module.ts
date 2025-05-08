import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CounterComponent],
  imports: [CommonModule, SharedModule, CounterRoutingModule],
})
export class CounterModule {}
