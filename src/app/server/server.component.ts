import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  serverId: number = 10000;
  serverStatus: string = 'offline';
  stringyHi: string = 'Hi!';
  getServerStatus() {
    return this.serverStatus;
  }
}
