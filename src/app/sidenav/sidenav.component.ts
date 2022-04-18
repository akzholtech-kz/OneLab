import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  item: string = ''
  name: string = ''
  constructor() { }

  ngOnInit(): void {
  }

  servers = [
    {
      name: "First Server",
      status: 'online',
      channel: 'Alma TV' 
    },
    {
      name: "Second Server",
      status: 'offline',
      channel: 'Kaz TV'
    },
    {
      name: "Third Server",
      status: "offline",
      channel: 'Kaz Sport'
    }
  ]

  getClassesbyStatus(item: {name: string, status: string, channel: string}) {
    return {
      'list-off' : item.status === "offline",
      'list-on' : item.status === 'online'
    }
  }
 
}
