import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { DoctorLoginComponent } from './components/doctor-login/doctor-login.component';
import { PatientLoginComponent } from './components/patient-login/patient-login.component';

const routes: Routes = [{path:'Doctor', component:DoctorLoginComponent},{path:'Patient', component:PatientLoginComponent},{path:'Admin', component:AdminLoginComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
