import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[myHighlight]'
})

export class highlightDirective {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue ')
    }
}