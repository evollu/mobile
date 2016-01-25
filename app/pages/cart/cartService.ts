import {Injectable, EventEmitter} from 'angular2/core';

@Injectable()
export class CartService {
    private cart: any;
    private change: EventEmitter<any[]>;

    constructor() {
        this.cart = {};
        this.change = new EventEmitter<any[]>();
    }

    add(item) {
        if (this.cart[item.id]) {
            this.cart[item.id].count ++;
        } else {
            this.cart[item.id] = item;
            this.cart[item.id].count = 1;
        }
        this.change.emit(this.list());
    }

    remove(item) {
        if (this.cart[item.id]) {
            this.cart[item.id].count --;
            if (!this.cart[item.id].count) {
                delete this.cart[item.id];
            }
        }
        this.change.emit(this.list());
    }
    
    clear(){
        this.cart = {};
        this.change.emit([]);
    }
    
    count(id){
        return this.cart[id] && this.cart[id].count;
    }
    
    list(){
        var list = Object.keys(this.cart).map(key => this.cart[key]);
        return _.sortBy(list, 'title');
    }
    
    cartChange(){
        return this.change;
    }
   
}