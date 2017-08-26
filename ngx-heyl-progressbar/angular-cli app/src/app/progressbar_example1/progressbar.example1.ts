import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
	selector: "progressbar-example1",
	templateUrl: "progressbar.example1.html"
})
export class ProgressbarExample1Component {
	progressValue: number = 2;
	inputProgressValue: number = 2;
	progressType: string = "percent-progressive";

	step: number = 10;
	max: number = 10;
	color1 = 25;
	color2 = 50;
	color3 = 75;

	stripped: boolean = true;
	strippedReverse: boolean = false;
	noAnimate: boolean = false;
	stepped: boolean = true;

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