import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KitchenregisterComponent } from './kitchenregister/kitchenregister.component';
import { NewUserComponent } from './new-user/new-user.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {path: 'kitchenregister',component:KitchenregisterComponent},
  {path: 'user-register',component:UserRegisterComponent},
  {path: 'new-user', component:NewUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
