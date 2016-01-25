import {App, Platform, Config, IonicApp} from 'ionic-framework/ionic';
import {TabsPage} from './pages/tabs/tabs';
import {CartService} from './pages/cart/cartService';
import {MenuService} from './pages/menu/menuService';


@App({
    templateUrl: 'build/app.html',
    // Check out the config API docs for more info
    // http://ionicframework.com/docs/v2/api/config/Config/
    config: {},
    providers: [CartService, MenuService]
})
export class MyApp {
    app: IonicApp;
    tabsPage;

    constructor(platform: Platform, ionicApp: IonicApp) {
        this.app = ionicApp;
        this.tabsPage = TabsPage;

        platform.ready().then(() => {
            // Do any necessary cordova or native calls here now that the platform is ready
        });
        
        Stripe.setPublishableKey('pk_test_xVO5eb5GV62jdSZ0lVvj231n');
    }

    // openPage(page) {
    //     // close the menu when clicking a link from the menu
    //     this.app.getComponent('leftMenu').close();

    //     // Reset the nav controller to have just this page
    //     // we wouldn't want the back button to show in this scenario
    //     this.app.getComponent('nav').setRoot(page);
    // }
}
