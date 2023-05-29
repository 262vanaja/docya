import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NursclistComponent } from './nursclist/nursclist.component';
import { CancelComponent } from './admin/cancel/cancel.component';
import { GfgComponent } from './gfg/gfg.component';
import { NurseComponent } from './nurse/nurse.component';
import { ProfileDoctorComponent } from './profile-doctor/profile-doctor.component';
import { ProfilPatientComponent } from './profil-patient/profil-patient.component';
import { ViewpresriptionComponent } from './viewpresription/viewpresription.component';


const routes: Routes = [
 
  {path:'admin',component:AdminComponent},
  {path:'nurselist',component:NursclistComponent},
  {path:'cancel',component: CancelComponent},
  {path:'gfg',component: GfgComponent},
  {path:'',component:AdminComponent},
  {path:"nurse",component:NurseComponent},
  {path:"profile-doctor",component:ProfileDoctorComponent},
  {path:"profile-patient",component:ProfilPatientComponent},
  {path:"viewpresription",component:ViewpresriptionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
