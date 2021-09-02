import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './shared/components//home/home.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { ServicosComponent } from './shared/components/servicos/servicos.component';
import { ContatoComponent } from './shared/components/contato/contato.component';
import { RastreamentoComponent } from './shared/components/rastreamento/rastreamento.component';
import { AcompanhamentoComponent } from './shared/components/acompanhamento/acompanhamento.component';

const routes: Routes = [{
  path: '', redirectTo: 'home', pathMatch: 'full'
},
{
  path: 'home', component: HomeComponent
},
{
  path: 'contato', component: ContatoComponent
},
{
  path: 'servicos', component: ServicosComponent
},
{
  path: 'rastreamento', 
  loadChildren: () => import('./reactive-search/reactive-search.module').then(m => m.ReactiveSearchModule)
},
{
  path: 'acompanhamento', component: AcompanhamentoComponent
},
{
  path: '**', component: ErrorComponent,
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
