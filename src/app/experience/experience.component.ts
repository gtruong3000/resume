import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  @Input() workExperience: any;

  constructor() {}

  ngOnInit(): void { }

  isPresent(): boolean {
    return !this.workExperience.endDate;
  }
}
