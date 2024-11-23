import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { MenusComponent } from './menus/menus.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { DetailrestaurantComponent } from './detailrestaurant/detailrestaurant.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Addrest1Component } from './addrest1/addrest1.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    RestaurantComponent,
    MenusComponent,
    AddmenuComponent,
    ConnexionComponent,
    DetailrestaurantComponent,
    Addrest1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }