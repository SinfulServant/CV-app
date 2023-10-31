import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  public textOfBtn: string = ''

  @Input() url: string | undefined = ''

  public redirect(){
    console.log(this.url)
    window.open(this.url, '_blanc')
  }
}
