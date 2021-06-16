import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CarDetailsComponent } from './components/pages/car-details/car-details.component';
import { CarsComponent } from './components/pages/cars/cars.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RentalComponent } from './components/rental/rental.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {path:"", component:HomepageComponent},
  {path:"cars", component:CarsComponent},
  {path:"cardetails/:carId", component:CarDetailsComponent},
  {path:"rental/:carId", component:RentalComponent,canActivate:[LoginGuard]},
  {path:"creditcard/:rental", component:CreditcardComponent,canActivate:[LoginGuard]},
  {path:"homepage", component:HomepageComponent},
  {path: "admin", component: AdminComponent,canActivate:[AdminGuard]},
  {path: "profile", component:ProfileComponent,canActivate:[LoginGuard]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }