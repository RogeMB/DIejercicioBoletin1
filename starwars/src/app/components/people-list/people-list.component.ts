import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/interfaces/people.interface';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
 peopleList: People[]=[];
 numPages = 0;

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe(resp=>{
      this.peopleList = resp.results;
      this.numPages = Math.ceil(resp.count / 10);
      /*
      if(this.numPages == 0) {
        this.numPages = Math.ceil(resp.count / resp.results.length);
      }
      */
    });     
  }

  counter(){
    return new Array (this.numPages);
  }

  getPeopePage(page: number) {
    
  }

}

