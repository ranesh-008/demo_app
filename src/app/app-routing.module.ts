import { RouterModule, Routes } from '@angular/router';
import { MatchListComponent } from './match-list/match-list.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo:'match-list', pathMatch:'full' },
  {path: 'match-list', component: MatchListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
