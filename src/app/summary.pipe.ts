import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name : 'summary'
})
export class Summary implements PipeTransform {
    transform(value: any, limit?: number) {
        limit = limit ? limit : 20;
        return !value ? value : value.substring(0, limit) + '...';
    }
}
