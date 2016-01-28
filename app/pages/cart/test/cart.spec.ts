import {CartPage} from '../cart.ts';
import {CartService} from '../cartService.ts';
import {Page, NavController} from 'ionic-framework/ionic';

describe('CartPage', ()=>{
    it('should', ()=>{
        let cartService = new CartService();
        let nav = jasmine.createSpyObj('NavController', ['nav']);
        let cart = new CartPage(cartService, nav);
    })    
})