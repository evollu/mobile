import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {CORE_DIRECTIVES} from 'angular2/common';

@Page({
    directives: [CORE_DIRECTIVES],
    templateUrl: 'build/pages/history/historyDetail.html',
})
export class HistoryDetailPage {
    items: any[];
    nav: NavController;

    constructor(nav: NavController, params: NavParams) {
        this.nav = nav;
        this.items = params.get('items');
    }

}