import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { TableFilterPipe } from './table-filter.pipe';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SuppliersComponent } from './components/suppliers/suppliers.component';
import { DetailsComponent } from './components/suppliers/details/details.component';
import { NewComponent } from './components/suppliers/new/new.component';
import { RecipeComponent } from './components/recipe/recipe.component';
import { ADDingredientComponent } from './components/recipe/addingredient/addingredient.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NutritionComponent } from './components/recipe/nutrition/nutrition.component';
import { ADDnutritionComponent } from './components/recipe/addnutrition/addnutrition.component';
import { ExpensesComponent } from './components/dashboard/expenses/expenses.component';
import { ADDexpensesComponent } from './components/dashboard/addexpenses/addexpenses.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { TheMenuComponent } from './components/the-menu/the-menu.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardService } from './services/dashboard.service';
import { MenuService } from './services/menu.service';
import { SuppliersService } from './services/suppliers.service';
import { CompetitorsService } from './services/competitors.service';
import { AddComponent } from './components/dashboard/expenses/add/add.component';
import { CompetitorDetailsComponent } from './components/competitors/competitor-details/competitor-details.component';
import { AddCompetitorComponent } from './components/competitors/add-competitor/add-competitor.component';
import { HomeComponent } from './components/home/home.component';
import { SingleimageComponent } from './components/images/singleimage/singleimage.component';
import { MultiimageComponent } from './components/images/multiimage/multiimage.component';
import { AddrecipeComponent } from './components/recipe/addrecipe/addrecipe.component';
import { RecipeDetailsComponent } from './components/recipe/recipe-details/recipe-details.component';
import { PosComponent } from './components/pos/pos.component';
import { CustomersComponent } from './components/customers/customers.component';
import { AllDetailsComponent } from './components/pos/all-details/all-details.component';
import { NewCustomerComponent } from './components/customers/new-customer/new-customer.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { NewInventoryComponent } from './components/inventory/new-inventory/new-inventory.component';
import { ListInventoryComponent } from './components/inventory/list-inventory/list-inventory.component';
import { CustomerDetailsComponent } from './components/customers/customer-details/customer-details.component';
import { InvINComponent } from './components/inventory/inv-in/inv-in.component';
import { InvOUTComponent } from './components/inventory/inv-out/inv-out.component';
import { PurchaseInvoiceComponent } from './components/inventory/purchase-invoice/purchase-invoice.component';
import { SingleItemStockViewComponent } from './components/inventory/stock/single-item-stock-view/single-item-stock-view.component';
import { BrandsComponent } from './components/brands/brands.component';
import { NewBrandComponent } from './components/brands/new-brand/new-brand.component';
import { BrandDetailsComponent } from './components/brands/brand-details/brand-details.component';
import { AdminComponent } from './components/admin/admin.component';
import { CartComponent } from './components/pos/cart/cart.component';
import { CartItemComponent } from './components/pos/cart/cart-item/cart-item.component';
import { ProductListComponent } from './components/pos/product-list/product-list.component';
import { ProductItemComponent } from './components/pos/product-list/product-item/product-item.component';
import { MenuCategoriesComponent } from './components/pos/product-list/menu-categories/menu-categories.component';
import { CartHeaderComponent } from './components/pos/cart/cart-header/cart-header.component';
import { InvShowComponent } from './components/inventory/inv-show/inv-show.component';
import { TempInvoicesComponent } from './components/pos/temp-invoices/temp-invoices.component';
import { ListTempComponent } from './components/pos/temp-invoices/list-temp/list-temp.component';
import { InventoryItemComponent } from './components/inventory/inventory-item/inventory-item.component';
import { MenuItemComponent } from './components/the-menu/menu-item/menu-item.component';
import { CheckoutComponent } from './components/pos/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    TableFilterPipe,
    LoginComponent,
    DashboardComponent,
    SuppliersComponent,
    DetailsComponent,
    NewComponent,
    RecipeComponent,
    ADDingredientComponent,
    NavbarComponent,
    NutritionComponent,
    ADDnutritionComponent,
    ExpensesComponent,
    ADDexpensesComponent,
    CompetitorsComponent,
    TheMenuComponent,
    AddComponent,
    CompetitorDetailsComponent,
    AddCompetitorComponent,
    HomeComponent,
    SingleimageComponent,
    MultiimageComponent,
    AddrecipeComponent,
    RecipeDetailsComponent,
    PosComponent,
    CustomersComponent,
    AllDetailsComponent,
    NewCustomerComponent,
    InventoryComponent,
    NewInventoryComponent,
    ListInventoryComponent,
    CustomerDetailsComponent,
    InvINComponent,
    InvOUTComponent,
    PurchaseInvoiceComponent,
    SingleItemStockViewComponent,
    BrandsComponent,
    NewBrandComponent,
    BrandDetailsComponent,
    AdminComponent,
    CartComponent,
    CartItemComponent,
    ProductListComponent,
    ProductItemComponent,
    MenuCategoriesComponent,
    CartHeaderComponent,
    InvShowComponent,
    TempInvoicesComponent,
    ListTempComponent,
    InventoryItemComponent,
    MenuItemComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AuthService, AuthGuard, DashboardService, MenuService, SuppliersService, CompetitorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
