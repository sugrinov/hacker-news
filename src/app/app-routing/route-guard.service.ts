import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { ErrorHandlingService } from '../error-handling.service';
import { ErrorMessage } from '../error-message';

const errMsg = {
  user: 'Expected parameter of type string.',
  story: 'Expected parameter of type number and greater than 0.'
};

@Injectable()
export class RouteGuardService implements CanActivate {

  constructor(private errorHandlingService: ErrorHandlingService) { }

  canActivate(route: ActivatedRouteSnapshot) {
    const paramName = route.url[0].path;
    const param = route.url[1].path;

    const isValidUserParam = paramName === 'user' && isNaN(+param);
    if (isValidUserParam) {
      return true;
    }

    const isValidStoryParam = paramName === 'story' && !isNaN(+param) && +param > 0;
    if (isValidStoryParam) {
      return true;
    }

    const errorMessage: ErrorMessage = {
      errorTitle: `Invalid parameter '${param}' for ${paramName}`,
      errorBody: errMsg[paramName],
    };

    this.errorHandlingService.createErrorDialog(errorMessage);
    return false;
  }

}
