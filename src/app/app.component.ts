import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularSEO';

  constructor(private metaService: Meta, private titleService: Title) {
    // Set page title
    this.titleService.setTitle('Home - ANGULARSEO');

    // Set meta tags for this specific page
    this.metaService.addTags([
      { name: 'description', content: 'This is the homepage of ANGULARSEO, providing a great user experience.' },
      { name: 'keywords', content: 'angular, seo, santi gopal kiritee, ANGULARSEO,angular, seo,' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Home - ANGULARSEO' },
      { property: 'og:description', content: 'This is the App page.' },
      { property: 'og:url', content: 'https://konarakanksha.github.io/AngularSEO/' }
    ]);
  }
}
