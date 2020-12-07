import { Routes } from '@angular/router';
import { PageUserComponent } from './pages/page-user/page-user.component';
import { PageAdminComponent } from './pages/page-admin/page-admin.component';
import { PageCartComponent } from './pages/page-cart/page-cart.component';
import { PageHomeComponent } from './pages/page-home/page-home.component';
 
export const AppRoutes: Routes = [
    { path: '', component: PageHomeComponent },
    { path: 'admin' , component: PageAdminComponent},
    { path: 'cart' , component: PageCartComponent},
    { path: 'user' , component: PageUserComponent},
  ];
