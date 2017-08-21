import {Component} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	progressValue: number = 50;
	inputProgressValue: number = 50;
	progressType: string = "percent-progressive";

	step: number = 4;
	max: number = 100;

	stripped: boolean = false;
	strippedReverse: boolean = false;
	noAnimate: boolean = false;
	stepped: boolean = false;

	obs: Subject<void> = new Subject<void>();
	$obs: Observable<void> = this.obs.asObservable();

	constructor() {
	}

	sendChanges() {
		this.obs.next();
	}

	onInputProgressEnter() {
		this.progressValue = this.inputProgressValue;
		this.sendChanges();
	}

	getCssClass(): string {
		let cssClass: string[] = [];
		if (this.stripped) cssClass.push("stripped");
		if (this.strippedReverse) cssClass.push("stripped-reverse");
		if (this.noAnimate) cssClass.push("no-animate");
		if (cssClass.length == 0) return "";
		else return cssClass.join(" ");
	}

	getCssClassAttribute(): string {
		let classes: string = this.getCssClass();
		if (classes.length == 0) return "";
		else return "class=\"" + classes + "\"";
	}

}
