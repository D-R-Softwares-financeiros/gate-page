import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PriceComponent } from './Gates/price/price.component';
import { BodyComponent } from './Gates/body/body.component';
import { FooterComponent } from './Gates/footer/footer.component';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'price', component: PriceComponent },
  {path: 'about', component: BodyComponent },
  {path: 'contact', component: FooterComponent  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [AppComponent , PriceComponent ];
