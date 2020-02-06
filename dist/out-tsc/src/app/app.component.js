import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(_router) {
        this._router = _router;
        this.title = 'AngularCrud';
        this.showLoadingIndicator = true;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof NavigationStart) {
                this.showLoadingIndicator = true;
            }
            if (routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError) {
                this.showLoadingIndicator = false;
            }
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    }),
    tslib_1.__metadata("design:paramtypes", [Router])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map