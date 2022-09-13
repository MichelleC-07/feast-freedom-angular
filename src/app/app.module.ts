import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KitchenregisterComponent } from './kitchenregister/kitchenregister.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { KitchenService } from './services/kitchen.service';
import { HttpClientModule } from '@angular/common/http';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { NewUserComponent } from './new-user/new-user.component';


@NgModule({
  declarations: [
    AppComponent, 
    KitchenregisterComponent, 
    WelcomeComponent, 
    UserRegisterComponent, 
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [KitchenService],
  bootstrap: [AppComponent],
})
export class AppModule {}
