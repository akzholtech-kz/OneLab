import { Pipe, PipeTransform } from "@angular/core";
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform{
    transform(value: any, filterstring: string, prop: string) {
        if(value.length === 0 || filterstring == "") {
            return value;
        }
        const result = []
        for(let i of value) {
            if(filterstring == i[prop]){
                result.push(i)
            }
        }
        return result;
    }
}