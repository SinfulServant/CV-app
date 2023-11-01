import { Component, OnInit } from '@angular/core';
import { GetUrlsService } from '../../services/get-urls.service';
import { Urls } from 'src/app/interfaces/urls';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  private urls!: Urls
  public sides = {
    instagram: 'left',
    telegram: 'bottom',
    gitlab: 'right',
    linkedin: 'left',
    github: 'right'
  }

  constructor(
    private getUrlsService: GetUrlsService,
    public breakpoint: BreakpointObserver
  ) {
  }

  ngOnInit(): void {
    this.getUrls()
    this.checkScreenSize()
  }

  private getUrls() {
    this.getUrlsService.urls.subscribe((urls: Urls) => this.urls = urls)
  }

  public redirectToSocialMedia(socialMedia: string): void {
    window.open(this.urls[socialMedia as keyof typeof this.urls], '_blanc')
  }

  private checkScreenSize() {
    this.breakpoint.observe('(max-width: 600px)')
      .subscribe((state: BreakpointState) => {
        if(state.matches){
          this.sides = {
            instagram: 'left',
            telegram: 'right',
            gitlab: 'left',
            linkedin: 'right',
            github: 'left'
          }
        } else {
          this.sides = {
            instagram: 'left',
            telegram: 'bottom',
            gitlab: 'right',
            linkedin: 'left',
            github: 'right'
          }
        }
      })
  }
}
