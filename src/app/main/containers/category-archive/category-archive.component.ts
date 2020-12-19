import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../../core/models/category';
import {Book} from '../../../core/models/book';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
  selector: 'bs-category-archive',
  templateUrl: './category-archive.component.html',
  styleUrls: ['./category-archive.component.scss']
})
export class CategoryArchiveComponent implements OnInit, OnDestroy {
  public categoryName: string;

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
  private categoryNameSubscription: Subscription;

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.categoryNameSubscription = this.route.paramMap.subscribe(params => {
      this.categoryName = params.get('id');
    });
  }

  ngOnDestroy(): void {
    this.categoryNameSubscription.unsubscribe();
  }

}
