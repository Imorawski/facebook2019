import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CacheManagerService {

    private _cache = new Map();

    constructor() { }

    save(key, value): void {
        this._cache.set(key, value);
    }

    get(key): any {
        return this._cache.get(key);
    }

    has(key): boolean {
        return this._cache.has(key);
    }

}
