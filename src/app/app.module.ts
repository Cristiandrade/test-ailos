import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AddCooperateComponent } from './add-cooperate/add-cooperate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { AddCooperateService } from './add-cooperate/add-cooperate.service';
import { StatusComponent } from './add-cooperate/status/status.component';
import { HeaderComponent } from './add-cooperate/header/header.component';
import { SearchCpfComponent } from './add-cooperate/search-cpf/search-cpf.component';
import { IconLoadingComponent } from './add-cooperate/icon-loading/icon-loading.component';
import { IconPersonalComponent } from './add-cooperate/icon-personal/icon-personal.component';
import { IconCheckComponent } from './add-cooperate/icon-check/icon-check.component';
import { ResultComponent } from './add-cooperate/search-cpf/result/result.component';

@NgModule({
  declarations: [AppComponent, SidenavComponent, AddCooperateComponent, StatusComponent, HeaderComponent, SearchCpfComponent, IconLoadingComponent, IconPersonalComponent, IconCheckComponent, ResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [AddCooperateService],
  bootstrap: [AppComponent],
})
export class AppModule {}
