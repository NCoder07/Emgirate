import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmigrantListComponent } from './emigrant-list/emigrant-list.component';
import { EmigrantComponent } from './emigrant/emigrant.component';
import { HomeComponent } from './home/home.component';
import { RegistrationStatusComponent } from './registration-status/registration-status.component';

const routes: Routes = [
 
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'registrationFrom',
    component: EmigrantComponent
  },
  {
    path: 'getAllEmigrants',
    component: EmigrantListComponent
  },
  {
    path: 'registrationStatus',
    component: RegistrationStatusComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
