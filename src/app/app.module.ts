import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DisplayStockComponent } from './display-stock/display-stock.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { DeleteStockComponent } from './delete-stock/delete-stock.component';
import { RouterModule, Routes } from '@angular/router';
import { MainMenuComponent } from './main-menu/main-menu.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';


  const routes: Routes =[
  {path: "view", component:DisplayStockComponent},
  {path: "add", component:AddStockComponent},
  {path:"del",component:DeleteStockComponent},
  {path: "", component:HomePageComponent},
  {path: "**", component:HomePageComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DisplayStockComponent,
    AddStockComponent,
    DeleteStockComponent,
    MainMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
