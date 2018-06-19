import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
// We use ActivatedRoute because of the :id after details/
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  // Change from Object to any to build with ng build --prod
  user$: any;
  
  constructor(private route: ActivatedRoute, private data: DataService) { 
     this.route.params.subscribe( params => this.user$ = params.id );
  }

  ngOnInit() {
    this.data.getUser(this.user$).subscribe(
      data => this.user$ = data 
    );
  }

}
