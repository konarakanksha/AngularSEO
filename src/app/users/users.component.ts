import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private metaService: Meta, private titleService: Title) { }

  ngOnInit() {
    // Set page title
    this.titleService.setTitle('Home - ANGULARSEO');

    // Set meta tags for this specific page
    this.metaService.addTags([
      { name: 'description', content: 'This is the homepage of Your App Name, providing a great user experience.' },
      { name: 'keywords', content: 'angular, seo, santi gopal kiritee, ANGULARSEO' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Home - ANGULARSEO' },
      { property: 'og:description', content: 'This is the user page.' },
      { property: 'og:url', content: 'https://konarakanksha.github.io/AngularSEO/' }
    ]);
  }

}
