import {AfterViewChecked, AfterViewInit, Component, ElementRef, Input, ViewEncapsulation} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/takeWhile";
import {Subscription} from "rxjs/Subscription";
//import 'prismjs';
// Changed highlight method on prism.js : while (e[0]==="\n") e=e.slice(1);

declare let Prism: any;

@Component({
	encapsulation: ViewEncapsulation.None,
	selector: 'prism-highlight',
	templateUrl: './prism.component.html'
})
export class PrismComponent implements AfterViewInit, AfterViewChecked {
	@Input() private async = false;
	@Input() private callback?: (element: Element) => void | undefined = undefined;
	@Input() language: string;
	@Input() theme: string = "default";
	@Input() showLines: boolean;

	private bufferNode: any;
	private codeNode: any;

	private obsSubscription: Subscription;

	@Input() set obs(obs: Observable<void>) {
		if (this.obsSubscription != undefined) this.obsSubscription.unsubscribe();
		this.obsSubscription = obs.subscribe(() => {
			setTimeout(() => this.setCode(),0);
		})
	}

	constructor(private el: ElementRef) {
		this.setCode();
	}

	setCode(): void {
//		this.setElements();
		if (!this.bufferNode || !this.codeNode ) return;
		this.codeNode.innerHTML = this.bufferNode.innerHTML;
		this.highlightAll(this.async, this.callback);
	}

	ngAfterViewInit() {
		this.bufferNode = this.el.nativeElement.querySelector(".buffer");
		this.codeNode = this.el.nativeElement.querySelector("pre > code");
		this.setCode();
	}

	ngAfterViewChecked() {
		//this.highlightAll(this.async, this.callback);
	}


	highlightElement(element: any, async: boolean, callback?: (element: Element) => void | undefined) {
		Prism.highlightElement(element, async, callback);
	}

	highlightAll(async: boolean, callback?: (element: Element) => void | undefined) {
		Prism.highlightAll(async, callback);
	}
}