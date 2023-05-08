import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListcitiesComponent } from './components/listcities.component';
import { AddcityComponent } from './components/addcity.component';
import { DetailsComponent } from './components/details.component';

const routes: Routes = [
  { path: '', component: ListcitiesComponent },
  { path: 'addcity', component: AddcityComponent },
  { path: 'details/:city', component: DetailsComponent },
  { path: '**', redirectTo: '',  pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
