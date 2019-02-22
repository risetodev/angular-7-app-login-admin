import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { ContentComponent } from './content/content.component';
import { PagevalidationComponent } from './pagevalidation/pagevalidation.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin', component: AdminPanelComponent },
  { path: 'content', component: ContentComponent },
  { path: '**', component:  PagevalidationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
