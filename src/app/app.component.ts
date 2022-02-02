import { Component } from '@angular/core';
import resumeJson from './content/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'resume';
  experienceData = resumeJson.experience;
  skillsData = resumeJson.skills;
}
