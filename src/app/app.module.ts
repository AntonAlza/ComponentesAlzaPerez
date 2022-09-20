import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { LugarTuristicosComponent } from './componentes/lugar-turisticos/lugar-turisticos.component';
import { ToolbarComponent } from './componentes/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LugarTuristicosComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
