import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { AdminComponent } from './admin/admin.component';
import {MatButtonModule} from '@angular/material/button';
import { NursclistComponent } from './nursclist/nursclist.component';
import {MatTableModule} from '@angular/material/table';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatListModule} from '@angular/material/list';
import { GfgComponent } from './gfg/gfg.component';
import { NurseComponent } from './nurse/nurse.component';
import {MatCardModule} from '@angular/material/card'
import { ProfileDoctorComponent } from './profile-doctor/profile-doctor.component';
import { ProfilPatientComponent } from './profil-patient/profil-patient.component';
import { ViewpresriptionComponent } from './viewpresription/viewpresription.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    NursclistComponent,
    GfgComponent,
    NurseComponent,
    ProfileDoctorComponent,
    ProfilPatientComponent,
    ViewpresriptionComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatStepperModule,
    MatInputModule,MatButtonModule,MatTableModule,MatStepperModule,MatDialogModule,FormsModule,MatListModule,MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
