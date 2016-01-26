import {Page, NavController} from 'ionic-framework/ionic';
import {CORE_DIRECTIVES} from 'angular2/common';
import {CartService} from '../cart/cartService';
import {CheckoutPage} from '../checkout/checkout';
import * as _ from 'lodash';
import {Pipe, PipeTransform} from 'angular2/core';

@Pipe({ name: 'values'})
export class ValuesPipe implements PipeTransform {
    transform(value: any, args: any[] = null): any {
        return Object.keys(value).map(key => value[key]);
    }
}

@Page({
    directives: [CORE_DIRECTIVES],
    pipes: [ValuesPipe],
    templateUrl: 'build/pages/cart/cart.html',
})
export class CartPage {
    items: any[];
    cartService: CartService;
    total: number;
    nav: NavController;

    constructor(cartService: CartService, nav: NavController) {
        this.cartService = cartService;
        this.nav = nav;
        this.items = cartService.list();
        this.total = this.calTotal();
        cartService.cartChange.subscribe(list => {
            this.items = list;
            this.total = this.calTotal();
        });
    }

    private calTotal() {
        return _.sumBy(this.items, function(item) {
            return item.price * item.count;
        })
    }

    addItem(item) {
        this.cartService.add(item);
    }

    removeItem(item) {
        this.cartService.remove(item);
    }

    checkout() {
        this.nav.push(CheckoutPage, {}, {}, null);
    }
}