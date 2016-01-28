import {CartService} from '../cartService';

describe('CartService', () => {

    it('should have cartChange object', () => {
        let service = new CartService();
        expect(service.cartChange).toBeDefined();
    });

    describe('when add item', () => {

        it('should broad cartChange when add item', () => {
            let service = new CartService();
            spyOn(service.cartChange, 'emit');
            service.add({ id: 1 });
            expect(service.cartChange.emit).toHaveBeenCalledWith([{ id: 1, count: 1 }]);
        })

        it('should add count for existing item', () => {
            let service = new CartService();
            service.add({ id: 1 });
            spyOn(service.cartChange, 'emit');
            service.add({ id: 1 });
            expect(service.cartChange.emit).toHaveBeenCalledWith([{ id: 1, count: 2 }]);
        })
        
    });
    
    describe('when remove item', () => {

        it('should broad cartChange when remove item', () => {
            let service = new CartService();
            service.add({ id: 1 });
            service.add({ id: 1 });
            spyOn(service.cartChange, 'emit');
            service.remove({ id: 1 });
            expect(service.cartChange.emit).toHaveBeenCalledWith([{ id: 1, count: 1 }]);
        })

        it('should clear item when item count is zero', () => {
            let service = new CartService();
            service.add({ id: 1 });
            spyOn(service.cartChange, 'emit');
            service.remove({ id: 1 });
            expect(service.cartChange.emit).toHaveBeenCalledWith([]);
        })
        
    });
    
    describe('when clear item', ()=>{
        it('should emit empty array', () => {
            let service = new CartService();
            service.add({ id: 1 });
            spyOn(service.cartChange, 'emit');
            service.clear();
            expect(service.cartChange.emit).toHaveBeenCalledWith([]);
        })
    })
    
});