import { Component, OnInit } from '@angular/core';
import { ListsOfSkillsService } from './lists-of-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
  providers: [ListsOfSkillsService]
})
export class SkillsComponent implements OnInit {

  public listHardSkills!: string[]
  public listSoftSkills!: string[]
  public result: string[] = []

  constructor(
    public list: ListsOfSkillsService
    ) {
      this.listHardSkills = list.hardSkills
      this.listSoftSkills = list.softSkills
    }

  ngOnInit(): void {
  }

  ngAfterContentInit(){
  }

  public defineAnimationDelay(i: number): string {
    const result: string = i * 1.5 + '00'
    this.result.push(result)
    return result
  }
}
