import {Page, NavController} from 'ionic-framework/ionic';
import {TabsPage} from '../tabs/tabs';


@Page({
    templateUrl: 'build/pages/intro/intro.html'
})
export class IntroPage {
    nav: NavController;

    constructor(nav: NavController) {
        this.nav = nav;
    }

    start() {
        this.nav.setRoot(TabsPage);
    }
}
