import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  @Input()
  skills!: string[];
  constructor() { }

  ngOnInit(): void {
  }

}
