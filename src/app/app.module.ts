import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { StartComponent } from './start/start.component';
import { DirectiveComponent } from './directive/directive.component';
import { TsdatatypeComponent } from './tsdatatype/tsdatatype.component';
import { PipesComponent } from './pipes/pipes.component';
import { SexPipe } from "./custompipes/sex.pipe";
import { ServiceService } from "./customservice/service";

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    DirectiveComponent,
    TsdatatypeComponent,
    PipesComponent,
    SexPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
