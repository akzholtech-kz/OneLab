import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  name: string = 'This is Glass'
  image: string = "https://www.lrsrecycles.com/wp-content/uploads/2017/10/Glass.png"
  constructor() { }

  ngOnInit(): void {
  }

}
