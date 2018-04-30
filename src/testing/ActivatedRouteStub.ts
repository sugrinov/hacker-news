import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Route, Params, convertToParamMap, ParamMap } from '@angular/router';

export class ActivatedRouteStub {
    private routeConfig: Route;
    private query = new ReplaySubject<Params>();

    constructor(routeConfig?: Route, queryParams?: Params) {
        this.setRouteConfig(routeConfig);
        this.setQueryParamMap(queryParams);
    }

    // readonly routeConfig = this.route;
    readonly queryParams = this.query.asObservable();
    private snapshot;

    setRouteConfig(routeConfig?: Route) {
        this.snapshot = {
            ...this.snapshot,
            routeConfig
        };
    }

    setParamInSnapshot(paramMap?: ParamMap) {
        this.snapshot = {
            ...this.snapshot,
            paramMap
        };
    }

    setQueryParamMap(queryParams?: Params) {
        const paramMap: ParamMap = convertToParamMap(queryParams);
        this.query.next(paramMap);
        this.setParamInSnapshot(paramMap);
    }
}
