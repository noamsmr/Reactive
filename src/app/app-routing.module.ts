import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { ReactivationComponent } from './reactivation/reactivation.component';
import { NewCarbonComponent } from './new-carbon/new-carbon.component';
import { StandardsComponent } from './standards/standards.component';
import { ContactComponent } from './contact/contact.component'; 


const routes: Routes = [
  {path: '', redirectTo: 'company' ,pathMatch: 'full'},
  {path: 'company', component: CompanyComponent},
  {path: 'reactivation', component: ReactivationComponent},
  {path: 'new-carbon', component: NewCarbonComponent},
  {path: 'standards', component: StandardsComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
