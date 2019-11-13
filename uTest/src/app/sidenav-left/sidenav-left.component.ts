import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav-left',
  templateUrl: './sidenav-left.component.html',
  styleUrls: ['./sidenav-left.component.css']
})
export class SidenavLeftComponent {
    Profilelinks: string[] = ['BasicData', 'Employment', 'Contact'];
    Productlinks: string[] = ['Card','Loan'];
}
