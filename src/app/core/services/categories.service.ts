import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Category} from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private categoriesSubject: BehaviorSubject<Category[]> = new BehaviorSubject([]);

  public getCategoriesSubject(): BehaviorSubject<Category[]> {
    return this.categoriesSubject;
  }

  public pushCategories(categories: Category[]): void {
    this.categoriesSubject.next(categories);
  }
}
