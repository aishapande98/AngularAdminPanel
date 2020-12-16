import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeComponent} from './employee/employee.component';
import {OrganizationComponent } from './organization/organization.component';
import {RolesComponent} from './roles/roles.component';


const routes: Routes = [
  { path:'employee', component:EmployeeComponent},
  { path: 'org', component:OrganizationComponent},
  { path: 'roles', component:RolesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents= [EmployeeComponent,OrganizationComponent,RolesComponent]
