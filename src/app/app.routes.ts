import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'form', component: MyFormComponent },
];

export { ROUTES };
