import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BeadsCanvasComponent } from './beads-canvas/beads-canvas.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, BeadsCanvasComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
