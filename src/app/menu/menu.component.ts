import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  data: DataInfo[] = []

  constructor() { }

  ngOnInit(): void {

    fetch('https://apimenu.herokuapp.com/menu')
    .then(response => response.json())
    .then(json => {
      json.forEach((x:any) => {
        let di = new DataInfo()
        di.imgSrc = x.imgSrc
        di.menu = x.menu
        di.price = x.price
        di.ingredients = x.ingredients
        this.data.push(di)
      });
    })
    console.log(this.data)
  }
}

class DataInfo {
  imgSrc: string = ''
  menu: string = ''
  price: string = ''
  ingredients: string = ''
}
