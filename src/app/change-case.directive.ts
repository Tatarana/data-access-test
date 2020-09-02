import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeCase]'
})
export class ChangeCaseDirective {

  @HostListener('blur') onblur() {
    // primeira forma de fazer, mas pode não funcionar dependendo do contexto
    // já que nem sempre você terá acesso ao DOM.
    //this.elRef.nativeElement.value = this.elRef.nativeElement.value.toUpperCase();

    // segunra forma de fazer, parece ser a melhor.
    let changedValue: string = this.elRef.nativeElement.value.toUpperCase();
    this.renderer.setProperty(this.elRef.nativeElement, 'value', changedValue);
  }

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  onInit() {
    console.log(this.elRef.nativeElement.value);
  }

}