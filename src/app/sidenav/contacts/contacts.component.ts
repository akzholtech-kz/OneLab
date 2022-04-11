import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  name: string = 'This is bottle'
  image: string = "https://d3q0fpse3wbo5h.cloudfront.net/production/uploads/innovations/75627424.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
