import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EditComponent } from './edit/edit.component';
import { ReviewComponent } from './review/review.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  // { path: '',component: AppComponent },
  // use a colon and parameter name to include a parameter in the url
  // { path: 'gamma/:id', component: GammaComponent },
  // redirect to /alpha if there is nothing in the url
  { path: '', pathMatch: 'full', redirectTo: '/movies' },
  { path: 'cakes/new', component: CreateComponent},
  { path: 'reviews/new/:id', component: ReviewComponent},
  { path: 'movies', component: ListComponent},
  { path: 'movies/:id', component: ViewComponent},
  { path: 'edit/:id', component: EditComponent}
  // the ** will catch anything that did not match any of the above routes

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
