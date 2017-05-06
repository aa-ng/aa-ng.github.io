import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <article>
        <h1>Child</h1>
        <ng-content></ng-content>
    </article>
  `,
  styles: [`
        article 
        {
            border: 1px solid #d8dde2;
            border-radius: 6px;
            margin-bottom: 20px;
            padding: 20px;
        }
  `]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
