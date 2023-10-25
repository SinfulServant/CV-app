import { Component, OnInit } from '@angular/core';
import { ListsOfSkillsService } from './lists-of-skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public listHardSkills!: string[]
  public result: string[] = []

  constructor(
    public list: ListsOfSkillsService
    ) {
    this.listHardSkills = list.hardSkill
  }

  ngOnInit(): void {
    console.log(this.result)
  }

  ngAfterContentInit(){
    console.log(this.result)
    
  }

  public defineAnimationDelay(i: number): string {
    const result: string = i * 1.5 + '00'
    this.result.push(result)
    return result
  }
}
