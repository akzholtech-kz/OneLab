import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name: string = "This is paper"
  image: string = "https://residentialwastesystems.com/wp-content/uploads/2018/01/recycling-paper.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
