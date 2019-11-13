import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';
@Component({
  selector: 'app-sidenav-right',
  templateUrl: './sidenav-right.component.html',
  styleUrls: ['./sidenav-right.component.css']
})
export class SidenavRightComponent implements OnInit {
	
  @Output() resize = new EventEmitter<void>();
  @Output() mdown = new EventEmitter<void>();
  @Output() pictureaspdf = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

}
