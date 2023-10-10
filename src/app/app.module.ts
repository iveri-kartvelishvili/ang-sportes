import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { TableheadComponent } from './tablehead/tablehead.component';
import { TablerowComponent } from './tablerow/tablerow.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    TableheadComponent,
    TablerowComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
