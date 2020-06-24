import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PalsService } from './services/pals.service';
import { PalsViewComponent } from './components/pals-view/pals-view.component'

@NgModule({
  declarations: [
    AppComponent,
    PalsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
