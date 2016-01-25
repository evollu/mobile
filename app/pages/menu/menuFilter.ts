import {Pipe, PipeTransform} from 'angular2/core';
import * as _ from 'lodash';

@Pipe({
    name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {
    transform(items: any[], args: any[]): any {
        console.log('menu filter');
        // filter items array, items which match and return true will be kept, false will be filtered out
        var reg = new RegExp(_.escapeRegExp(args[0]), "i");
        
        return items.filter(item => {
            return !args[0] || reg.test(item.title) || reg.test(item.description);
        });
    }
}