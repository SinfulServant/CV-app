import { Component, HostListener } from '@angular/core';
import { GetUrlsService } from './services/get-urls.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(
    private getUrlsService: GetUrlsService
  ){
    this.getUrlsService.getUrls()
  }

}
