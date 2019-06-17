import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  isAuth = false;
  
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;
 
  constructor() { 
    this.isAuth = true; 
  }

  ngOnInit() {
  }

  getDate() {
    return this.created_at ;
  }
  
  getColor() {
    if(this.loveIts > 0) {
      return 'green';
    } else if(this.loveIts < 0) {
      return 'red';
    }
  }
  
  onLoveIt() {
    console.log('On aime !');
    this.loveIts ++;
  }
  
  onDontLoveIt() {
    console.log('On n aime pas !');
    this.loveIts --;
  }

  isLoveIt() {
    // console.log(this.loveIts.tostring());
    if (this.loveIts > 0) return true; else return false;
  }
  
  isDontLoveIt() {
    // console.log(this.loveIts.tostring());
    if (this.loveIts < 0 ) return true; else return false;
  }
}
