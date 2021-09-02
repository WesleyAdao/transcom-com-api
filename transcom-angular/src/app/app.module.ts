import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components//footer/footer.component';
import { HomeComponent } from './shared/components//home/home.component';
import { ServicosComponent } from './shared/components/servicos/servicos.component';
import { ContatoComponent } from './shared/components/contato/contato.component';
import { ErrorComponent } from './shared/components/error/error.component';
import { RastreamentoComponent } from './shared/components/rastreamento/rastreamento.component';
import { AcompanhamentoComponent } from './shared/components/acompanhamento/acompanhamento.component';
import { ConsultaRastreamentoService } from './shared/services/consulta-rastreamento.service';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ServicosComponent,
    ContatoComponent,
    ErrorComponent,
    RastreamentoComponent,
    AcompanhamentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    FormControl,
    ConsultaRastreamentoService,
    HttpClient,
    {
    provide: LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
