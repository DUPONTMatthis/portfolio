import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { CvComponent } from './pages/cv/cv.component';

const routes: Routes = [
  {
    path: 'accueil',
    component: HomeComponent,
  },
  {
    path: 'cv',
    component: CvComponent,
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
