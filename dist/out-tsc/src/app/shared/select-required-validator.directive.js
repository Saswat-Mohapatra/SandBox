import * as tslib_1 from "tslib";
var SelectRequiredValidatorDirective_1;
import { NG_VALIDATORS } from '@angular/forms';
import { Directive, Input } from '@angular/core';
let SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = class SelectRequiredValidatorDirective {
    validate(control) {
        return control.value === this.defaultValue ? { 'defaultSelected': true } : null;
    }
};
tslib_1.__decorate([
    Input('appSelectValidator'),
    tslib_1.__metadata("design:type", String)
], SelectRequiredValidatorDirective.prototype, "defaultValue", void 0);
SelectRequiredValidatorDirective = SelectRequiredValidatorDirective_1 = tslib_1.__decorate([
    Directive({
        selector: '[appSelectValidator]',
        providers: [{
                provide: NG_VALIDATORS,
                useExisting: SelectRequiredValidatorDirective_1,
                multi: true
            }]
    })
], SelectRequiredValidatorDirective);
export { SelectRequiredValidatorDirective };
//# sourceMappingURL=select-required-validator.directive.js.map