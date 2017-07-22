import { Directive, Input, Renderer, ElementRef } from '@angular/core';

@Directive({
    selector: '[MyHightlight]'
})

export class hightlight {
    constructor(el: ElementRef, renderer: Renderer) {
        renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'blue ')
    }
}