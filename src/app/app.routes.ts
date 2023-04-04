import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';
import { DeveloperComponent } from './developer/developer.component';
import { CokctailListComponent } from './cokctail-list/cokctail-list.component';

const ROUTES: Routes = [
  { path: '', component: UserProfileComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'user', component: UserProfileComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'developer', component: DeveloperComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'form', component: MyFormComponent },
  { path: 'cocktails', component: CokctailListComponent },
];

export { ROUTES };
