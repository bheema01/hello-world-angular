import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowServer = false;
  serverCreationStatus = 'Did not create server!';

  constructor() {
    setTimeout (() => {
      this.allowServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer () {
    this.serverCreationStatus = 'Create Sever';
  }

}
