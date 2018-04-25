import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpCacheService } from './http-cache.service';
import { of } from 'rxjs/observable/of';
import { tap } from 'rxjs/operators/tap';


@Injectable()
export class CacheInterceptor implements HttpInterceptor {

    private ignoreUrls: any = {
        'https://hacker-news.firebaseio.com/v0/topstories.json': true,
        'https://hacker-news.firebaseio.com/v0/beststories.json': true,
        'https://hacker-news.firebaseio.com/v0/showstories.json': true,
        'https://hacker-news.firebaseio.com/v0/jobstories.json': true,
        'https://hacker-news.firebaseio.com/v0/newstories.json': true,
        'https://hacker-news.firebaseio.com/v0/askstories.json': true,
        'https://hacker-news.firebaseio.com/v0/user/': true,
    };

    constructor(private cacheService: HttpCacheService) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req);

        if (this.ignoreUrls[req.url] || this.ignoreUrls[req.url.substring(0, req.url.search('/user/'))]) {
            return next.handle(req);
        }

        if (req.method !== 'GET') {
            this.cacheService.invalidateCache();
            return next.handle(req);
        }

        const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

        if (cachedResponse) {
            return of(cachedResponse);
        }

        return next.handle(req)
            .pipe(
                tap(event => {
                    if (event instanceof HttpResponse) {
                        this.cacheService.put(req.url, event);
                    }
            })
        );
    }
}
