import { map } from 'rxjs/operators';

export function sortCollection(collection, fn) {
    return collection.sort((p1, p2) => {
        const d1 = fn(p1);
        const d2 = fn(p2);
        if (d1 > d2) {
            return -1;
        } else if (d1 < d2) {
            return 1
        } else {
            return 0;
        }
    })
}

export function sorter(fn) {
    return map((collection) => {
        return sortCollection(collection, fn);
    });
}