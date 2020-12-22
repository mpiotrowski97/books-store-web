import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ShippingMethod} from '../../../../core/models/shipping-method';
import {ShippingMethodService} from '../../../services/shipping-method.service';
import {finalize, take, tap} from 'rxjs/operators';
import {AuthService} from '../../../../auth/services/auth.service';
import {Store} from '@ngrx/store';
import {loggedUserSelector} from '../../../../auth/store/auth.reducer';

@Component({
  selector: 'bs-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.scss']
})
export class ShippingComponent implements OnInit {
  form: FormGroup;
  shippingMethods: ShippingMethod[];
  isLoading = true;

  constructor(
    private formBuilder: FormBuilder,
    private shippingMethodService: ShippingMethodService,
    private authService: AuthService,
    private store: Store
  ) {
  }

  ngOnInit(): void {
    this.store.select(loggedUserSelector)
      .pipe(
        take(1),
        tap(loggedUser => {
          this.form = this.formBuilder.group({
            street: this.formBuilder.control(loggedUser.street, [Validators.required]),
            houseNumber: this.formBuilder.control(loggedUser.houseNumber, [Validators.required]),
            city: this.formBuilder.control(loggedUser.city, [Validators.required]),
            postcode: this.formBuilder.control(loggedUser.postcode, [Validators.required]),
            province: this.formBuilder.control(loggedUser.province, [Validators.required]),
            country: this.formBuilder.control(loggedUser.country, [Validators.required]),
            shippingMethod: this.formBuilder.control('', [Validators.required])
          });
        })
      )
      .subscribe();

    this.shippingMethodService.getAll()
      .pipe(
        finalize(() => this.isLoading = false)
      )
      .subscribe(methods => this.shippingMethods = methods);
  }

  handleSubmitEvent(): void {
    //
  }
}
