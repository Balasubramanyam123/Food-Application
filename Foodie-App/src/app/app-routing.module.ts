import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuListComponent } from './admin-menu-list/admin-menu-list.component';
import { AdminGuard } from './admin.guard';
import { AdminviewComponent } from './adminview/adminview.component';
import { FavouriteFoodsComponent } from './favourite-foods/favourite-foods.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginComponent } from './login/login.component';
import { MenulistComponent } from './menulist/menulist.component';
import { SignupComponent } from './signup/signup.component';
import { UserGuard } from './user.guard';
import { UserviewComponent } from './userview/userview.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CartComponent } from './cart/cart.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';


const routes: Routes = [
  {"path":"signupView",component:SignupComponent},
  {"path":"loginView",component:LoginComponent},
  {"path":"userview",component:UserviewComponent,canActivate:[UserGuard]},
  {"path":"home",component:UserviewComponent},
  {"path":"landing-page",component:LandingPageComponent},
  {"path":"adminview",component:AdminviewComponent,canActivate:[UserGuard, AdminGuard]},
  {"path":"favouriteview",component:FavouriteComponent},
  {"path":"menulistview/:id",component:MenulistComponent},
  {"path":"favouritefoodsview",component:FavouriteFoodsComponent},
  {"path":"adminMenuListview/:id",component:AdminMenuListComponent,canActivate:[UserGuard, AdminGuard]},
  {"path":"cartview",component:CartComponent},
  {"path":"profile",component:NavMenuComponent},
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
