import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public cards = [{
    name: 'Take away',
    link: '/orders',
    linkTxt: 'Order'
  },
{
  name: 'Delivery',
  link: '/Delivery',
  linkTxt: 'Order'
},
{
  name: 'Open Invoices',
  link: '/tempInovices',
  linkTxt: 'View'
}
];
  constructor() { }

  ngOnInit(): void {
  }

}
