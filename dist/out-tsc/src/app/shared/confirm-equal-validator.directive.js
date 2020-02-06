import * as tslib_1 from "tslib";
var ConfirmEqualValidatorDirective_1;
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
let ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = class ConfirmEqualValidatorDirective {
    validate(control) {
        const controlToComapre = control.parent.get(this.appConfrimEqualValidator);
        if (controlToComapre && controlToComapre.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], ConfirmEqualValidatorDirective.prototype, "appConfrimEqualValidator", void 0);
ConfirmEqualValidatorDirective = ConfirmEqualValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[appConfrimEqualValidator]',
        providers: [{
                provide: NG_VALIDATORS,
                useExisting: ConfirmEqualValidatorDirective_1,
                multi: true
            }]
    })
], ConfirmEqualValidatorDirective);
export { ConfirmEqualValidatorDirective };
//# sourceMappingURL=confirm-equal-validator.directive.js.map