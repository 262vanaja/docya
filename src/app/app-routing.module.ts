import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NursclistComponent } from './nursclist/nursclist.component';


const routes: Routes = [
 
  {path:'',component:AdminComponent},
  {path:'nurselist',component:NursclistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
