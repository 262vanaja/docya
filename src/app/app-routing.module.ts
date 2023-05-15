import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NursclistComponent } from './nursclist/nursclist.component';
import { CancelComponent } from './admin/cancel/cancel.component';

const routes: Routes = [
 
  {path:'',component:AdminComponent},
  {path:'nurselist',component:NursclistComponent},
  {path:'cancel',component: CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
