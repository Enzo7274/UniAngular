import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabelaComponent } from './tabela/tabela.component';
import { HttpClientModule } from '@angular/common/http';
import { EditacursoComponent } from './editacurso/editacurso.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TabelaComponent,
    EditacursoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
