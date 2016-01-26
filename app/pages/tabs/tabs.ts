import {Page} from 'ionic-framework/ionic';
import {MenuPage} from '../menu/menu';
import {CartPage} from '../cart/cart';
import {CartService} from '../cart/cartService';
import {HistoryPage} from '../history/history';
import {LoginPage} from '../login/login';


@Page({
    templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    tab1Root;
    tab2Root;
    tab3Root; 
    tab4Root;
    
    cartCount: number;

    constructor(cartService: CartService) {

        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = MenuPage;
        this.tab2Root = CartPage;
        this.tab3Root = HistoryPage;
        this.tab4Root = LoginPage;
        
        this.cartCount = _.sumBy(cartService.list(), item => item.count);
        cartService.cartChange.subscribe(list=>{
            this.cartCount = _.sumBy(cartService.list(), item => item.count);
        })
    }
}
