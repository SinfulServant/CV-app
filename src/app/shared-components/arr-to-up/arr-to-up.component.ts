import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-arr-to-up',
  templateUrl: './arr-to-up.component.html',
  styleUrls: ['./arr-to-up.component.css']
})
export class ArrToUpComponent {

  public isArrowToTop: boolean = false

  @HostListener('window:scroll')
  onScroll(): void {
    if (window.scrollY > 400) this.isArrowToTop = true
    else this.isArrowToTop = false
  }

  public navigate(): void {
    document.getElementById('home')?.scrollIntoView({behavior: 'smooth'})
  }

  // public toTop(): void {
  //   let scrollToTop = window.setInterval(() => {
  //     let pos = window.scrollY;
  //     if (pos > 0) {
  //         window.scrollTo(0, pos - 50); // how far to scroll on each step
  //     } else {
  //         window.clearInterval(scrollToTop);
  //     }
  // }, 16);
  // }
}
