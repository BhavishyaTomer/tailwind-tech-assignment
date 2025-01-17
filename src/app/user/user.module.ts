import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component'; 
import { IonicModule } from '@ionic/angular';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator'; 
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { HideDetailsPipe } from './pipes/hide-details.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserFormComponent } from './user-form/user-form.component';



@NgModule({
  declarations: [
    UserDetailComponent,
    NavbarComponent,
    DateFormatPipe,
    HideDetailsPipe,
    DashboardComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    IonicModule,
    MatTableModule,
    MatPaginatorModule,
    FontAwesomeModule ,
    FormsModule,
   
  ],
  providers: [MatDatepickerModule],

})
export class UserModule { }
