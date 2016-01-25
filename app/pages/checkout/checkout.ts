import {Page, Alert, NavController} from 'ionic-framework/ionic';
import {FormBuilder, Validators, FORM_BINDINGS, ControlGroup} from 'angular2/common'
import {CreditCardValidator} from './creditcard';
import {CartService} from '../cart/cartService';

@Page({
    viewBindings: [FORM_BINDINGS],
    templateUrl: 'build/pages/checkout/checkout.html',
})
export class CheckoutPage {
    nav: NavController;
    cart: CartService;
    form: ControlGroup;

    constructor(formBuilder: FormBuilder, nav: NavController, cart: CartService) {
        this.nav = nav;
        this.cart = cart;
        this.form = formBuilder.group({
            number: ["", CreditCardValidator.cardNumber],
            cvc: ["", CreditCardValidator.cvc],
            exp: ["", CreditCardValidator.expiry]
        });
    }

    checkout() {
        var exp = this.form.value.exp.split('/');
        var token = Stripe.createToken({
            number: this.form.value.number,
            cvc: this.form.value.cvc,
            exp_month: exp[0],
            exp_year: exp[1]
        }, (status, response) => {
            if (response.error || !response.id) {
                let popup = Alert.create({
                    title: 'Payment Error',
                    subTitle: 'Please try again',
                    buttons: ['Dismiss']
                });
                this.nav.present(popup);
            } else {
                let popup = Alert.create({
                    title: 'Order Placed',
                    subTitle: 'Thank you for your order!',
                    buttons: ['Dismiss']
                });
                this.nav.present(popup);
                this.cart.clear();
                this.nav.popToRoot();
            }
        });
    }
}
