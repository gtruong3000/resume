import { Component } from '@angular/core';
import resumeJson from '../assets/content/content.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  title = 'resume';
  bioData = resumeJson.bio;
  experienceData = resumeJson.experience;
  skillsData = resumeJson.skills;
  educationData = resumeJson.education;
}
