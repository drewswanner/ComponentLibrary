import { NgModule } from '@angular/core';
import { CustomPrimeNgComponent } from './custom-prime-ng.component';
import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    CustomPrimeNgComponent,
  ],
  imports: [
    TableModule
  ],
  exports: [
    CustomPrimeNgComponent,
    TableModule
  ]
})
export class CustomPrimeNgModule { }
