import { Component } from '@angular/core';

import { AboutPage } from '../discover/discover';
import { ContactPage } from '../feed/feed';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = ContactPage;

  constructor() {

  }
}
