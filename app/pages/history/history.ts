import {Page, NavController} from 'ionic-framework/ionic';
import {CORE_DIRECTIVES} from 'angular2/common';
import {HistoryDetailPage} from './historyDetail';

@Page({
    directives: [CORE_DIRECTIVES],
    templateUrl: 'build/pages/history/history.html',
})
export class HistoryPage {
    items: any[];
    total: number;
    nav: NavController;

    constructor(nav: NavController) {
        this.nav = nav;
        this.items = [
            {
                id: '4123213123',
                date: new Date('2016-01-01T11:00:00'),
                total: 100,
                status: 'Preparing',
                items: [
                    {
                        id: 1,
                        title: "Item 1",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10,
                        count: 4
                    }, {
                        id: 2,
                        title: "Item 2",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10,
                        count: 6
                    }]
            }, {
                id: '123321123',
                date: new Date('2015-05-05T16:03:00'),
                total: 10,
                status: 'Delivered',
                items: [
                    {
                        id: 1,
                        title: "Item 1",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10,
                        count: 1
                    }]
            }];
    }

    showDetail(item) {
        this.nav.push(HistoryDetailPage, { items: item.items }, {}, null);
    }

}