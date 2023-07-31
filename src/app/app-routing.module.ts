import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCooperateComponent } from './add-cooperate/add-cooperate.component';

const routes: Routes = [{ path: '', component: AddCooperateComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
