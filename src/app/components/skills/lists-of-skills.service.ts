import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListsOfSkillsService {

  public hardSkill: string[] = [
    'Angular Framework Knowledge',

    'HTTP and RESTful API Interaction',

    'Angular Routing',

    'Forms and Validation',

    'RxJS (Reactive Extensions for JavaScript)',

    'GIT',

    'Understanding Dependency Injection',

    // 'Understanding MVC',
    // https://medium.com/@captofbottles/%D0%B0%D0%BD%D0%B3%D1%83%D0%BB%D1%8F%D1%80-2-%D1%8D%D1%82%D0%BE-mvx-7caf8e7965aa

    'OOP'
    /* Object-oriented programming
    Інкапсуляція (Encapsulation) - у ООП клас є своєрідними "капсулами" для об'єктів. 
      Скривання - якісь процеси у середені класу, що є private.

    Наслідування (Іnheritance) - Можливість створювати нові класи на освнові інших.

    Поліморфізм (Polymorphism багато форм) - 
      Параметричний (істиний Parametric ) - 

      Ad-hoc (Мнимий) -
    */

    // 'Invertion of Control (IoC)'
    /* 
      IoC (Inversion of Control) Container - це контейнер, який використовується в об'єктно-орієнтованому програмуванні для управління створенням та керуванням об'єктами. 
      Основна ідея полягає в тому, що IoC Container відповідає за створення об'єктів і внедрення їхніх залежностей, а не класи, які викликають ці об'єкти. 
      Це дозволяє забезпечити більшу гнучкість і обертаність в програмному коді.
    */ 
  ]
  constructor() { }
}
