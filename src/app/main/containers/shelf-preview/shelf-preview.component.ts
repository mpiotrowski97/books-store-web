import { Component, OnInit } from '@angular/core';
import {Category} from '../../../core/models/category';
import {Book} from '../../../core/models/book';
import {Shelf} from '../../../core/models/shelf';

@Component({
  selector: 'bs-shelf-preview',
  templateUrl: './shelf-preview.component.html',
  styleUrls: ['./shelf-preview.component.scss']
})
export class ShelfPreviewComponent implements OnInit {
  public shelf: Shelf = {
    id: '1',
    userId: '1',
    name: 'Favourites',
    booksQuantity: 42
  };

  public books: Book[] = [
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    },
    {
      author: 'Kiera Hilll',
      category: 'Adventure',
      description: 'Illo libero est quis consequatur debitis nesciunt molestiae iste quod sit inventore hic sunt molestiae error quidem non aut reprehenderit eos impedit perspiciatis iste quaerat est adipisci veritatis voluptatem veniam beatae minima exercitationem aperiam rerum occaecati saepe ut laboriosam consequatur ad ut et ut eius excepturi cupiditate architecto distinctio aperiam',
      isbn: '1651516983519',
      price: '5.5',
      publishedBy: 'Jerald',
      title: 'Voluptatem'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
