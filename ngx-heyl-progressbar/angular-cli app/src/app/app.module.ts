import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ProgressbarModule} from 'ngx-heyl-progressbar';
import {HighlightJsModule, HighlightJsService} from "angular2-highlight-js";
import {PrismComponent} from "./prism.component";
import {FormsModule} from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
		PrismComponent,
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
