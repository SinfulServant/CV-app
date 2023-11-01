import { Injectable } from '@angular/core';

@Injectable()
export class ListsOfSkillsService {

  public hardSkills: string[] = [
    'Basic understanding of Angliar structure',
    'HTTP and RESTful API Interaction',
    'Angular Routing',
    'Forms and Validation',
    'RxJS (Reactive Extensions for JavaScript)',
    'GIT',
    // 'Understanding MVC',
    'Basic understanding OOP, SOLID, DI',
    'Practice of localization (i18n)',
    'Practice of Bootstrap'
  ]
  public softSkills: string[] = [
    'English Intermediate (B1)',
    'Although it\'s hard, I want to improve and optimize my code',
    'Looking for a team for the long term',
    'I strive to create an atmosphere of trust and support in the team',
    'Able to take responsibility for own work and perform it on time',
    'Have the ability to take constructive critical feedback and use it to improve',
    'I like to program 😊'

  ]
  constructor() { }
}
