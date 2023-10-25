import { Component } from '@angular/core';

// @Component({
//   selector: 'app-servers',
//   templateUrl: './servers.component.html',
//   styleUrls: ['./servers.component.css'],
// })
// export class ServersComponent {}

@Component({
  selector: 'app-servers', //selected by itself
  //selector: '[app-servers]', //selected by attribute
  //selector: '.app-servers', //selected by class
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent {
  allowNewServer = false;
  serverCreationStatus = 'No server';
  serverName = 'TextServer';
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }
  ngOnInit() {}
  onCreateServer() {
    this.serverCreationStatus = 'server was Created!';
  }
  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
