import { Validator, NG_VALIDATORS, AbstractControl } from '@angular/forms';
import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[appConfrimEqualValidator]',
    providers: [{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualValidatorDirective implements Validator {
    @Input() appConfrimEqualValidator: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const controlToComapre = control.parent.get(this.appConfrimEqualValidator);
        if (controlToComapre && controlToComapre.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    }
}
