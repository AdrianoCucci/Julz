import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from 'src/routes';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }