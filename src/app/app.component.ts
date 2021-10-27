import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchText = '';

  items: any = [
    {
      title: 'Abc',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqr',
              items_containers: [],
            },
          ],
        },
      ],
    },
    {
      title: 'TTT',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqr',
              items_containers: [],
            },
          ],
        },
      ],
    },
    {
      title: 'ZZZ',
      items_containers: [
        {
          title: 'edf',
          items_containers: [
            {
              title: 'pqrr',
              items_containers: [],
            },
          ],
        },
      ],
    },
  ];

}
