import {Component} from "@angular/core";
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";

@Component({
	selector: "radial-example1",
	templateUrl: "radial.example1.html"
})
export class RadialExample1Component {
	progressValue: number = 2;
	inputProgressValue: number = 2;
	progressType: string = "percent-progressive";

	step: number = 10;
	max: number = 10;
	color1 = 25;
	color2 = 50;
	color3 = 75;

	squared: boolean = true;

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
}