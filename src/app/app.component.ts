import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth = false;
  
  lastUpdate = new Date();

  posts = [
    { 
      title: 'Mon premier post',
      content: 'L équipe de France de foot féminin a battu celle de Corée',
      loveIts: 0,
      created_at: new Date()
    },
    { 
      title: 'Mon deuxième post',
      content: 'L équipe de France de foot masculin a perdu contre celle de Turquie',
      loveIts: 0,
      created_at: new Date()
    },
    { 
      title: 'Encore un post',
      content: 'L équipe des USA de foot féminin a écrasé celle de Taillande',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {
    this.isAuth = true;
  }
  
  
}
