import { Component, OnInit } from '@angular/core';

interface NavItem {
  title: string;
  icon: string;
  link: string;
}

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  navItems: Array<NavItem> = [
    {
      title: 'customers',
      icon: 'bi bi-briefcase-fill',
      link: '/dashboard/customers',
    },
    {
      title: 'contacts',
      icon: 'bi bi-journal',
      link: 'contacts',
    },
    {
      title: 'leads',
      icon: 'bi bi-person-bounding-box',
      link: 'leads',
    },
    {
      title: 'reports',
      icon: 'bi bi-file-earmark-bar-graph',
      link: 'reports',
    },
    {
      title: 'integrations',
      icon: 'bi bi-layers-fill',
      link: 'integrations',
    },
    {
      title: 'year-end sale',
      icon: 'bi bi-emoji-sunglasses-fill',
      link: 'year-end sale',
    },
    {
      title: 'http tut',
      icon: 'bi bi-journal',
      link: 'tut/http',
    },
    {
      title: 'forms tut',
      icon: 'bi bi-journal',
      link: 'tut/forms',
    },
    {
      title: 'firestore',
      icon: 'bi bi-journal',
      link: 'tut/firestore',
    },
    {
      title: 'auth',
      icon: 'bi bi-journal',
      link: 'tut/auth',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
