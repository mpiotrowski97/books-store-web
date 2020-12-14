import {Component, OnInit} from '@angular/core';
import {Book} from '../../../core/models/book';
import {Review} from '../../../core/models/review';

@Component({
  selector: 'bs-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss']
})
export class BookPreviewComponent implements OnInit {
  public book: Book = {
    isbn: '1167985749663',
    title: 'Edukacja',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
    author: 'Malcolm XD',
    price: '31.99'
  };

  public reviews: Review[] = [
    {
      id: '1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
      author: 'Lorem ipsum',
      createdAt: '2020-03-12',
      likes: 4
    },
    {
      id: '2',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
      author: 'Lorem ipsum',
      createdAt: '2020-03-12',
      likes: 20
    },
    {
      id: '3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
      author: 'Lorem ipsum',
      createdAt: '2020-03-12',
      likes: 50
    },
    {
      id: '4',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
      author: 'Lorem ipsum',
      createdAt: '2020-03-12',
      likes: 0
    },
    {
      id: '5',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque deleniti dolorem maiores neque rerum! A ab amet aspernatur cum error eum eveniet fuga laboriosam, nam natus neque non odit officiis quam rem repellat repudiandae sapiente sint unde veniam. Ab accusantium consectetur delectus, exercitationem in iure molestias odit repellendus sed veritatis!',
      author: 'Lorem ipsum',
      createdAt: '2020-03-12',
      likes: 100
    },
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  handleRateClick(): void {

  }
}
