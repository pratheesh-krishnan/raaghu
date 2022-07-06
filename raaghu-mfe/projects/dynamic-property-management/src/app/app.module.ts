import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxTranslateModule, SharedModule } from '@libs/shared';
import { RdsButtonModule, RdsDropdownlistModule, RdsDropdownModule, RdsInputModule, RdsNavTabModule, RdsOffcanvasModule, RdsSelectListModule } from '@libs/rds-elements';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArrayToTreeConverterService } from 'projects/libs/shared/src/lib/array-to-tree-converter.service';
import { RdsFabMenuModule } from 'projects/libs/rds-elements/src/rds-fab-menu/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RdsDropdownModule,
    RdsButtonModule,
    RdsInputModule,
    RdsFabMenuModule,
    RdsNavTabModule,
    RdsDropdownlistModule,
    RdsSelectListModule,
    FormsModule,
    ReactiveFormsModule,
    RdsOffcanvasModule,
    NgxTranslateModule.forRoot()
  ],
  providers: [ArrayToTreeConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
