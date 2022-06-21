/* Created By : Sangwin Gawande (https://sangw.in) */
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: VirtualScrollComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/* Created By : Sangwin Gawande (https://sangw.in) */