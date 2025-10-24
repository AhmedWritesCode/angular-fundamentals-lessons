import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// for some reason we call html as templates
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <h1>If you are reading this...</h1>
    <p>Things have worked out well! 🎉</p>
    <ol>
      <li>Angular (Frontend MAsters)</li>
      <li>Spring Boot (-)</li>
      <li>Automation (AI)</li>
      <li>Machine Learning (FreeCodeCamp)</li>
      <li>FinTech (PodCasts)</li>
    </ol>
  `,
  styles: ``,
})
export class AppComponent {}
