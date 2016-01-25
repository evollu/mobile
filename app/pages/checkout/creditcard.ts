import {Control} from 'angular2/common';

export class CreditCardValidator {
    static cardNumber(control: Control) {

        if (!Stripe.validateCardNumber(control.value) ){
            return { 'cardNumber' : true };
        }

        return null;
    }
    
    static cvc(control: Control) {

        if (!Stripe.validateCVC(control.value) ){
            return { 'cvc' : true };
        }

        return null;
    }
    
    static expiry(control: Control) {
        var input = control.value.split('/');
        if(input.length != 2){
            return { 'expiry' : true };
        }
        if (!Stripe.validateExpiry(input[0], input[1]) ){
            return { 'expiry' : true };
        }

        return null;
    }
}