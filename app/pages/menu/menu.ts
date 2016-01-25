import {Page} from 'ionic-framework/ionic';
import {CORE_DIRECTIVES} from 'angular2/common';
import {CartService} from '../cart/cartService';
import {MenuService} from './menuService';
import * as _ from 'lodash';
import {MenuFilterPipe} from './menuFilter';

@Page({
    pipes: [MenuFilterPipe],
    directives: [CORE_DIRECTIVES],
    templateUrl: 'build/pages/menu/menu.html',
})
export class MenuPage {
    menu;
    cart: CartService;
    searchQuery: string;

    constructor(cart: CartService, menuService: MenuService) {
        this.menu = menuService.getMenu();
        this.searchQuery = '';
        this.cart = cart;
    }
    
    addItem(item) {
        this.cart.add(item);
    }

    removeItem(item) {
        this.cart.remove(item);
    }
}
