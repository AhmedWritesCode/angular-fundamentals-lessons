import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <article>
      <h1>Blog Post</h1>
      <section>
        <label for="title">Post Title</label>
        <!-- add the input -->
        <input type="text" id="title" [(ngModel)]="title"/>
        <label for="body">Post Body</label>
        <!-- add the textarea -->
        <textarea id="body" [(ngModel)]="body"></textarea> <!-- can't use a self-closing label here -->
      </section>
      <section>
        <p>Display title</p>
        {{ title }}
        <p>Display value</p>
        {{ body }}
      </section>
    </article>
  `,
  imports: [
    FormsModule
  ]
})
export class AppComponent {
  title = '09-template-driven-forms';
  body = 'etc';
}
