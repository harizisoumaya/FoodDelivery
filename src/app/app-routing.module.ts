import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { DetailrestaurantComponent } from './detailrestaurant/detailrestaurant.component';
import { AddrestaurantComponent } from './addrestaurant/addrestaurant.component';
import { AddmenuComponent } from './addmenu/addmenu.component';
import { MenusComponent } from './menus/menus.component';
import { Addrest1Component } from './addrest1/addrest1.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'restaurants', component: RestaurantComponent },
      { path: 'restaurant/:id', component: DetailrestaurantComponent },
      { path: 'addRestaurant', component: Addrest1Component },
      { path: 'addMenu', component: AddmenuComponent },
      { path: 'menus', component: MenusComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }