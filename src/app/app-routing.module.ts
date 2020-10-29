import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TheMenuComponent } from './components/the-menu/the-menu.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { AuthGuard } from './services/auth.guard';
import { CompetitorDetailsComponent } from './components/competitors/competitor-details/competitor-details.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { CustomersComponent } from "./components/customers/customers.component";
import { PosComponent } from "./components/pos/pos.component";
import { AllDetailsComponent } from './components/pos/all-details/all-details.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'menu',
    component: TheMenuComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'suppliers',
    component: SuppliersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'competitors',
    component: CompetitorsComponent,
    canActivate: [AuthGuard]
  }
  ,
  {
    path: 'competitorsdetails/:id',
    component: CompetitorDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'recipesdetails/:id',
    component: RecipeDetailsComponent,
    canActivate: [AuthGuard]
  },{
    path: 'orders',
    component: PosComponent,
    canActivate: [AuthGuard]
  },{
    path: 'allInvoicesDetails',
    component: AllDetailsComponent,
    canActivate: [AuthGuard]
  },{
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
