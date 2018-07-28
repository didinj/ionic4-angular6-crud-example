import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'detail/:id',
    loadChildren: './detail/detail.module#DetailPageModule'
  },
  {
    path: 'edit/:id',
    loadChildren: './edit/edit.module#EditPageModule'
  },
  {
    path: 'create',
    loadChildren: './create/create.module#CreatePageModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
