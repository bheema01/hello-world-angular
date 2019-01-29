import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: []
})

export class ServersComponent {
  serverId: number = 101;
  serverStatus: string = "Online";

  getServerStatus () {
    return this.serverStatus;
  }
}
