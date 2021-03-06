import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {cartValueSelector} from '../../../main/store/cart/cart.reducer';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'bs-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public cartValue$: Observable<number>;

  public searchForm: FormGroup;

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.cartValue$ = this.store.select(cartValueSelector);

    this.searchForm = this.formBuilder.group({
      search: this.formBuilder.control('', Validators.required)
    });
  }

  handleSearchClick(): void {
    this.router.navigate(['/', 'books'], {queryParams: {search: this.searchForm.get('search').value}});
  }
}
