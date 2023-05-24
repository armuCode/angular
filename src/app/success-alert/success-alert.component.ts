import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
  styles: [
    `
      p {
        padding: 20px;
        background-color: green;
        color: white;
      }
    `,
  ],
})
export class SuccessAlertComponent {}
