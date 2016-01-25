import {Injectable} from 'angular2/core';

@Injectable()
export class MenuService {

    constructor() {
    }
    
    getMenu() {
        return [
            {
                group: "Group 1",
                items: [
                    {
                        id: 1,
                        title: "Item 1",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 2,
                        title: "Item 2",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 3,
                        title: "Item 3",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 4,
                        title: "Item 4",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 5,
                        title: "Item 5",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }]
            }, {
                group: "Group 2",
                items: [
                    {
                        id: 1,
                        title: "Item 6",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 2,
                        title: "Item 7",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 3,
                        title: "Item 8",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 4,
                        title: "Item 9",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }, {
                        id: 5,
                        title: "Item 10",
                        description: "Description",
                        img: "http://www.liuskitchen88.com/wp-content/uploads/2015/05/208392.jpg",
                        price: 10
                    }]
            }]
    }
}