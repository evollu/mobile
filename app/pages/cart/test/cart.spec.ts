import {CartPage} from '../cart.ts';
import {CartService} from '../cartService.ts';
import {Page, NavController} from 'ionic-framework/ionic';

describe('CartPage', () => {
    var cart: CartPage,
        cartService: CartService;

    beforeEach(() => {
        cartService = new CartService();
        let nav = jasmine.createSpyObj('NavController', ['nav']);

        let fakeList = [{ id: 1, price: 2, count: 1 }];

        spyOn(cartService, 'list').and.returnValue(fakeList);

        cart = new CartPage(cartService, nav);
    })
    it('should get value from cart service', () => {

        expect(cart.total).toEqual(2);
        expect(cart.items).toEqual([{ id: 1, price: 2, count: 1 }]);
    })

    it('should watch cart service change', () => {
        cartService.add({ id: 2, price: 1, count: 3 });
        cartService.cartChange.subscribe(() => {
            expect(cart.items).toEqual([{ id: 1, price: 2, count: 1 }, { id: 2, price: 1, count: 3 }])
            expect(cart.total).toEqual(5);
        })
    })
})