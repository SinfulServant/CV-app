import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, catchError, throwError } from 'rxjs';
import { Urls } from '../interfaces/urls';


const getDateURL = 'https://my-json-server.typicode.com/SinfulServant/JSONPlaceholder/URLS'

@Injectable()
export class GetUrlsService {

  public urls: BehaviorSubject<Urls> = new BehaviorSubject<Urls>({
    instagram: '',
    telegram: '',
    gitlab: '',
    linkedin: '',
    github: '',
    cheng: '',
    chengCode: '',
    resume: '',
    resumeCode: '',
    currencyExchange: '',
    currencyExchangeCode: '',
  });

  constructor(private http: HttpClient) { }

  public getUrls(): void {
    this.http.get<Urls>(getDateURL)
      .pipe(
        catchError(err => throwError(() => console.log(err)))
      )
      .subscribe(
        (urls: Urls) => {
          this.urls.next(urls)
          console.log(this.urls.value)
        }
      )
  }
}
