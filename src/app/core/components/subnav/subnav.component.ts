import {Component, OnDestroy, OnInit} from '@angular/core';
import {Category} from '../../models/category';
import {CategoriesService} from '../../services/categories.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'bs-subnav',
  templateUrl: './subnav.component.html',
  styleUrls: ['./subnav.component.scss']
})
export class SubnavComponent implements OnInit {
  public categories$: BehaviorSubject<Category[]>;

  constructor(private categoriesService: CategoriesService) {
  }

  ngOnInit(): void {
    this.categories$ = this.categoriesService.getCategoriesSubject();
  }
}
