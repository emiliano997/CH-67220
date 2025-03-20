import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, DirectivesComponent],
  imports: [FormsModule, BrowserModule, AppRoutingModule, HighlightDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
