import { AnimationBuilder, animate, style, AnimationPlayer } from '@angular/animations';
import { Directive, ElementRef, HostBinding, Input } from '@angular/core';

interface SettingsOfElement {
  opacity?: string
}

@Directive({
  selector: '[appAppearAnimation]',
  standalone: true,
})
export class AppearanceAnimationDirective {

  @HostBinding('style.opacity') opacity = '0'
  @HostBinding('style.transform') transform: string | undefined
  @Input() side?: string
  @Input() delay: string = '0'

  private observer!: IntersectionObserver
  private target!: HTMLElement
  private nativeSettingsOfElement!: SettingsOfElement

  constructor(
    private _builder: AnimationBuilder,
    private elementRef: ElementRef,
  ) { }

  ngOnInit() {
    this.defineNativePosition()
    this.defineSide()
    this.makeIntersectionObserve()
  }

  private makeIntersectionObserve(): void {
    this.target = this.elementRef.nativeElement;
    this.observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          console.log('Element is in the viewport');
          this.makeAnimation()
        } else { }
      });
    }, {
      rootMargin: '0px',
      threshold: [0]
    });
    this.observer.observe(this.target);
  }

  private makeAnimation(): void {
    setTimeout(() => {
      const animation = this._builder.build([
        animate('500ms', style(this.defineKindOfAnimation())),
      ]);
      const element = this.elementRef.nativeElement
      const player: AnimationPlayer = animation.create(element);
      player.play();
      console.log(new Date().getSeconds(), new Date().getMilliseconds())
    }, + this.delay)
  }

  private defineKindOfAnimation(): {} {
    const params: any = {
      opacity: this.nativeSettingsOfElement.opacity,
      transform: 'translate(0)'
    }
    return params
  }

  private defineSide() {
    switch (this.side) {
      case 'left':
        this.transform = 'translateX(-100px)'
        break;
      case 'right':
        this.transform = 'translateX(100px)'
        break;
      case 'top':
        this.transform = 'translateY(-100px)'
        break;
      case 'bottom':
        this.transform = 'translateY(100px)'
        break;
    }
  }

  private defineNativePosition(): void {
    const element = this.elementRef.nativeElement;
    this.nativeSettingsOfElement = {
      opacity: window.getComputedStyle(element).getPropertyValue('opacity'),
    }
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }
}
