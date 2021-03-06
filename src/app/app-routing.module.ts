import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TheMenuComponent } from './components/the-menu/the-menu.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { NewComponent } from './components/suppliers/new/new.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { AuthGuard } from './services/auth.guard';
import { CompetitorDetailsComponent } from './components/competitors/competitor-details/competitor-details.component';
import { HomeComponent } from './components/home/home.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomerComponent } from './components/customers/new-customer/new-customer.component';
import { PosComponent } from './components/pos/pos.component';
import { AllDetailsComponent } from './components/pos/all-details/all-details.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { NewInventoryComponent } from './components/inventory/new-inventory/new-inventory.component';
import { ListInventoryComponent } from './components/inventory/list-inventory/list-inventory.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { InvINComponent } from './components/inventory/inv-in/inv-in.component';
import { InvOUTComponent } from './components/inventory/inv-out/inv-out.component';
import { SingleItemStockViewComponent } from './components/inventory/stock/single-item-stock-view/single-item-stock-view.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NewBrandComponent } from './components/brands/new-brand/new-brand.component';
import { AdminComponent } from './components/admin/admin.component';
import { TempInvoicesComponent } from './components/pos/temp-invoices/temp-invoices.component';
import { CheckoutComponent } from './components/pos/checkout/checkout.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { StuffComponent } from './components/stuff/stuff.component';
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
    path: 'newsupplier',
    component: NewComponent,
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
  },
  {
    path: 'orders',
    component: PosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'orders/:id',
    component: PosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allInvoicesDetails',
    component: AllDetailsComponent,
    canActivate: [AuthGuard]
  }, {
    path: 'customers',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newcustomer',
    component: NewCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventory',
    component: InventoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newInventoryItem',
    component: NewInventoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listInventory',
    component: ListInventoryComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'customer/:id',
    component: CustomerDetailsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventoryIN',
    component: InvINComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventoryIN/:id',
    component: InvINComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'inventoryOUT',
    component: InvOUTComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'stockItemVS',
    component: SingleItemStockViewComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'brands',
    component: BrandsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'newBrand',
    component: NewBrandComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'tempInovices',
    component: TempInvoicesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkout/:_id',
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },{
    path: 'stuff',
    component: StuffComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: PnfComponent },  // Wildcard route for a 404 page
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
