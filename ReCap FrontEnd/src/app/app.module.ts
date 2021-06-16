import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { BrandComponent } from './components/brand/brand.component';
import { NaviComponent } from './components/navi/navi.component';
import { ColorComponent } from './components/color/color.component';
import { CustomerComponent } from './components/customer/customer.component';
import { RentalComponent } from './components/rental/rental.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { ToastrModule } from 'ngx-toastr';
import { AdminCarsComponent } from './components/admin-components/admin-cars/admin-cars.component';
import { BrandFilterPipe } from './pipes/brand-filter.pipe';
import { CarFilterPipe } from './pipes/car-filter.pipe';
import { ColorFilterPipe } from './pipes/color-filter.pipe';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { ConfirmationService } from 'primeng/api';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SplitButtonModule } from 'primeng/splitbutton';
import { FooterComponent } from './components/footer/footer.component';
import { UserInfosComponent } from './components/profile-components/user-infos/user-infos.component';
import { ChangePasswordComponent } from './components/profile-components/change-password/change-password.component';
import { LoginComponent } from './components/auth-components/login/login.component';
import { RegisterComponent } from './components/auth-components/register/register.component';
import { AdminBrandsComponent } from './components/admin-components/admin-brands/admin-brands.component';
import { AdminColorsComponent } from './components/admin-components/admin-colors/admin-colors.component';
import { AddBrandComponent } from './components/add-compnents/add-brand/add-brand.component';
import { AddCarComponent } from './components/add-compnents/add-car/add-car.component';
import { AddColorComponent } from './components/add-compnents/add-color/add-color.component';
import { UpdateBrandComponent } from './components/update-components/update-brand/update-brand.component';
import { UpdateCarComponent } from './components/update-components/update-car/update-car.component';
import { UpdateColorComponent } from './components/update-components/update-color/update-color.component';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { CreditcardComponent } from './components/creditcard/creditcard.component';
import { AdminComponent } from './components/pages/admin/admin.component';
import { CarDetailsComponent } from './components/pages/car-details/car-details.component';
import { CarsComponent } from './components/pages/cars/cars.component';
import { HomepageComponent } from './components/pages/homepage/homepage.component';
import { ProfileComponent } from './components/pages/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    CustomerComponent,
    RentalComponent,
    AdminCarsComponent,
    BrandFilterPipe,
    CarFilterPipe,
    ColorFilterPipe,
    CarDetailComponent,
    FooterComponent,
    UserInfosComponent,
    ChangePasswordComponent,
    LoginComponent,
    RegisterComponent,
    AdminBrandsComponent,
    AdminColorsComponent,
    AddBrandComponent,
    AddCarComponent,
    AddColorComponent,
    UpdateBrandComponent,
    UpdateCarComponent,
    UpdateColorComponent,
    CreditcardComponent,
    AdminComponent,
    CarDetailsComponent,
    CarsComponent,
    HomepageComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({ positionClass: 'toast-bottom-right' }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    SplitButtonModule,
    MenuModule,
    TableModule,
    ConfirmDialogModule,
    DropdownModule,
    DynamicDialogModule,
    PasswordModule,
    InputTextModule,
    InputTextareaModule,
    MultiSelectModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    DatePipe,
    ConfirmationService,
    DialogService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
