import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
// Import animation functions
import { 
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger 
} from '@angular/animations';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],

  // This will help animate the user list
  animations: [
    // Define animation "listStagger"
    trigger('listStagger', [
      // Define when the animations will take place from state "*" to state "*"
      transition('* <=> *', [
        // On :enter we apply an initial style that's hidden and moved on the Y axis by -15px,
        // then make a stagger animation for each sequential element
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        // The :leave animation is optional as noted above
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class UsersComponent implements OnInit {

  users$: Object;

  constructor(private data: DataService) { }

  // One of several different lifecycle hooks, executes code on component init
  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data
    );
  }

}
