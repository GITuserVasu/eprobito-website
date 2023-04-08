import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ArtificialIntelligenceComponent } from './artificial-intelligence/artificial-intelligence.component';
import { UniversalExchangeComponent } from './universal-exchange/universal-exchange.component';
import { TcpComponent } from './tcp/tcp.component';
import { SociyallComponent } from './sociyall/sociyall.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path:'',
    component:IndexComponent
  },
  {
    path:"products",
    component:ProductListComponent
  },{
    path:'Artificial_Intelligence_powered_Data_Analysis',
    component:ArtificialIntelligenceComponent
  },
  {
    path:"Universal_Exchange",
    component:UniversalExchangeComponent
  }
  ,{
    path:'tcp',
    component:TcpComponent
  },
  {
    path:'Sociyall',
    component:SociyallComponent
  },
  {
    path:'contact',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
