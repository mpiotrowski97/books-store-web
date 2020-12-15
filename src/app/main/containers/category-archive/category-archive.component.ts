import {Component, OnInit} from '@angular/core';
import {Category} from '../../../core/models/category';
import {Book} from '../../../core/models/book';

@Component({
  selector: 'bs-category-archive',
  templateUrl: './category-archive.component.html',
  styleUrls: ['./category-archive.component.scss']
})
export class CategoryArchiveComponent implements OnInit {
  public category: Category = {
    id: '1',
    name: 'Adventure'
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

  constructor() {
  }

  ngOnInit(): void {
  }

}
