import { Component } from '@angular/core';
import { Urls } from 'src/app/interfaces/urls';
import { GetUrlsService } from 'src/app/services/get-urls.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent  {

  public urls!: Urls

  constructor(private getUrlsService: GetUrlsService){
    this.getUrls()
  }

  private getUrls(){
    this.getUrlsService.urls.subscribe((urls: Urls) => this.urls = urls)
  }
}
   