import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProgressbarModule} from 'ngx-heyl-progressbar';
import {HighlightJsModule, HighlightJsService} from "angular2-highlight-js";
import {PrismComponent} from "./prism.component";
import {FormsModule} from "@angular/forms";
import {ProgressbarExample1Component} from "./progressbar_example1/progressbar.example1";
import {RadialExample1Component} from "./radial_example1/radial.example1";

@NgModule({
	declarations: [
		AppComponent,
		PrismComponent,
		ProgressbarExample1Component,
		RadialExample1Component
	],
	imports: [
		BrowserModule,
		FormsModule,
		ProgressbarModule,
		HighlightJsModule,
	],
	providers: [HighlightJsService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
