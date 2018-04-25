import { Component, OnInit, OnDestroy } from '@angular/core';
import { ErrorHandlingService } from './error-handling.service';
import { Subscription } from 'rxjs/Subscription';
import { ToasterService, Toast, ToasterConfig } from 'angular2-toaster';
import { ErrorMessage } from './error-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'app';
  errorMessage: string;
  config: ToasterConfig = new ToasterConfig({
    positionClass: 'toast-top-right',
    animation: 'slideUp',
    tapToDismiss: false,
    timeout: 0,
    showCloseButton: true
  });

  subscription: Subscription;

  constructor(
    private toasterService: ToasterService,
    private errorHandlingService: ErrorHandlingService) {
  }

  ngOnInit() {
    this.subscription = this.errorHandlingService.erorrMessage$.subscribe((errorMsg: ErrorMessage) => {
      console.log('init toastr');
      const toast: Toast = {
        type: 'error',
        title: errorMsg.errorTitle,
        body: errorMsg.errorBody
      };
      this.toasterService.pop(toast);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
