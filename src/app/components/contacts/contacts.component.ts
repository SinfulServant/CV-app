import { Component, OnInit } from '@angular/core';
import { GetUrlsService } from '../../services/get-urls.service';
import { Urls } from 'src/app/interfaces/urls';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private urls!: Urls

  constructor(
    private getUrlsService: GetUrlsService,
    ) {
  }

  ngOnInit(): void {
    this.getUrls()
  }

  private getUrls() {
    this.getUrlsService.urls.subscribe((urls: Urls) => this.urls = urls)
  }

  public redirectToSocialMedia(socialMedia: string): void {
    window.open(this.urls[socialMedia as keyof typeof this.urls], '_blanc')
  }

}
