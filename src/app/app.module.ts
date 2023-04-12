import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { UniversalExchangeComponent } from './universal-exchange/universal-exchange.component';
import { TcpComponent } from './tcp/tcp.component';
import { SociyallComponent } from './sociyall/sociyall.component';
import { ContactComponent } from './contact/contact.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ProductListComponent,
    ArtificialIntelligenceComponent,
    UniversalExchangeComponent,
    TcpComponent,
    SociyallComponent,
    ContactComponent,
    AboutusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
