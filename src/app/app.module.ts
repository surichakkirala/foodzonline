import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OrderComponent } from './order/order.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReceiptComponent } from './receipt/receipt.component';
import { MenulayoutComponent } from './menulayout/menulayout.component';
import { MenulistComponent } from './menulist/menulist.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OrderComponent,
    ReceiptComponent,
    MenulayoutComponent,
    MenulistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatGridListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
