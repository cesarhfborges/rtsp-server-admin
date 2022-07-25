import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { CardModule } from 'primeng/card';
import { ConfigurationsComponent } from './configurations/configurations.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';


@NgModule({
  declarations: [
    HomeComponent,
    ConfigurationsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ReactiveFormsModule,
    InputTextModule,
    DropdownModule,
    SelectButtonModule,
    InputSwitchModule,
    TableModule,
    ButtonModule,
    RippleModule
  ]
})
export class PagesModule { }
