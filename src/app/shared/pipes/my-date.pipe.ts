import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'myDate'
})
export class MyDatePipe implements PipeTransform {

    transform(dateString: any): any {
        if (!dateString) {
            return '';
        }

        const date = new Date(dateString);
        return date.toLocaleDateString('pl-PL', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit'
        });
    }

}

