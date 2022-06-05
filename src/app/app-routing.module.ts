import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientInfoComponent } from './components/client-info/client-info.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'client-info' },
  { path: 'client-info', component: ClientInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
