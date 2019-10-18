import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpSentEvent } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, filter } from 'rxjs/operators';

import { CacheManagerService } from '../services/cache-manager.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CacheInterceptor implements HttpInterceptor {

    constructor(
        private cache: CacheManagerService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('CacheInterceptor#intercept');

        function isResponseStillValid({ userTime }) {
            return (Date.now() - userTime < environment.cacheTTL);
        }

        if (this.cache.has(req.url)) {
            const cacheRecord = this.cache.get(req.url)

            if (isResponseStillValid(cacheRecord)) {
                // console.log('[+] Returns from cache');
                return of(cacheRecord.response);
            }
        }

        return next.handle(req)
            .pipe(
                // if (event.type === XMLHttpRequest.DONE) {
                filter((event) => event instanceof HttpResponse),
                tap((event: HttpResponse<HttpEvent<HttpSentEvent>>) => {
                        // console.log('[+] Saved in cache');
                    this.cache.save(req.url, {
                        userTime: Date.now(),
                        response: event.clone()
                    });
                })
            )
    }

}
