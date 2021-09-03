import { Component, OnInit } from '@angular/core';

interface NavigationItem
{
  path: string,
  title: string
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  navigation: NavigationItem[] = [
    {
      path: '/',
      title: 'Home'
    },
    {
      path: '/about',
      title: 'About'
    },
    {
      path: '/blog',
      title: 'Blog'
    },
    {
      path: '/contact',
      title: 'Contact Us'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
