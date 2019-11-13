import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

/*import {MDCTopAppBar} from '@material/top-app-bar';*/


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

// Instantiation
/*const topAppBarElement = document.querySelector('.mdc-top-app-bar');
const topAppBar = new MDCTopAppBar(topAppBarElement);*/
  @Output() menuToggle = new EventEmitter<void>();
  @Output() listToggle = new EventEmitter<void>();
  @Output() DefaultTheme = new EventEmitter<void>();
  @Output() DarkTheme = new EventEmitter<void>();
  @Output() BlueTheme = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
