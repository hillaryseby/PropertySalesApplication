import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Navroutes } from './constants/navroutes';
import { AddPropertyComponent } from './add-property/add-property.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { BareBoneRegistrationComponent } from './bare-bone-registration/bare-bone-registration.component';

const routes: Routes = [
  { path: '', component: PropertyListComponent },
  { path: Navroutes.addProperty, component: AddPropertyComponent },
  { path: 'PropertyDetail/:id', component: PropertyDetailsComponent },
  {path :Navroutes.userRegistration ,component :BareBoneRegistrationComponent},
  { path: Navroutes.freeProperty, component: AddPropertyComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}