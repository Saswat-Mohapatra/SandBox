import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { CustomValidators } from '../shared/custom.validators';
import { stringify } from 'querystring';


@Component({
  selector: 'app-create-an-employee',
  templateUrl: './create-an-employee.component.html',
  styleUrls: ['./create-an-employee.component.css']
})
export class CreateAnEmployeeComponent implements OnInit {

  employeeForm: FormGroup;
  validationMessages = {
    'fullName': {
      'required': 'Full Name is required.',
      'minlength': 'Full Name must be greater than 2 characters.',
      'maxlength': 'Full Name must be less than 30 characters.'
    },
    'email': {
      'required': 'Email is required.',
      'emailDomain': 'Email domain should be techmahindra.com'
    },
    'confirmEmail': {
      'required': 'Confirm Email is required.',
    },
    'emailGroup': {
      'emailMisMatch': 'Email and Confirm Email do not match'
    },
    'phone': {
      'required': 'Phone is required.',
    },
    // 'skillName': {
    //   'required': 'Skill Name is required.',
    // },
    // 'experienceInYears': {
    //   'required': 'Experience is required.',
    // },
    // 'proficiency': {
    //   'required': 'Proficiency is required.',
    // },
  };

  formErrors = {
    // 'fullName': '',
    // 'email': '',
    // 'confirmEmail': '',
    // 'emailGroup': '',
    // 'phone': '',
    // 'skillName': '',
    // 'experienceInYears': '',
    // 'proficiency': ''
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.employeeForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(30)]],
      contactPreference: ['email'],
      emailGroup: this.fb.group({
        email: ['', [Validators.required, CustomValidators.emailDomain('techmahindra.com')]],
        confirmEmail: ['', Validators.required],
      }, {validators: this.matchEmail}),
      phone: [''],
      skills: this.fb.array([
        this.addSkillFormGroup()
      ])
      // skills: this.fb.group({
      //   skillName: ['', Validators.required],
      //   proficiency: ['', Validators.required],
      //   experienceInYears: ['', Validators.required]
      // })
    });

    this.employeeForm.get('contactPreference').valueChanges.subscribe((data: string) => {
      this.onContactPreferenceChange(data);
    });
    // this.employeeForm.get('fullName').valueChanges.subscribe(
    //   (value: string) => { console.log(JSON.stringify(value));
    // });
    this.employeeForm.valueChanges.subscribe((data) => {
      this.logValidationErrors(this.employeeForm);
    });
  }

  addSkillButtonClick(): void {
    (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());
  }

  removeSkillButtonClick(skillGroupIndex: number): void {
    (<FormArray>this.employeeForm.get('skills')).removeAt(skillGroupIndex);
  }

  logValidationErrors(group: FormGroup = this.employeeForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);

        this.formErrors[key] = '';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];

          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
          }
        }

        if ( abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        }

        // if ( abstractControl instanceof FormArray) {
        //   for (const control of abstractControl.controls) {
        //     if (control instanceof FormGroup) {
        //       this.logValidationErrors(control);
        //     }
        //   }
        // }
    });
  }

  addSkillFormGroup(): FormGroup {
    return this.fb.group({
      skillName: ['', Validators.required],
      proficiency: ['', Validators.required],
      experienceInYears: ['', Validators.required]
    });
  }

  onContactPreferenceChange(selectedValue: string) {
    const phoneControl = this.employeeForm.get('phone');
    if (selectedValue === 'phone') {
      phoneControl.setValidators(Validators.required);
    } else {
      phoneControl.clearValidators();
    }
    phoneControl.updateValueAndValidity();
  }

  onSubmit() {
    console.log(this.employeeForm);
  }

  onLoadDataClick() {
    const formArray1 = this.fb.array([
      new FormControl('John', Validators.required),
      new FormControl('IT', Validators.required),
      new FormControl('Male', Validators.required),
    ]);
    formArray1.push(new FormControl('Mark', Validators.required));
    // console.log(formArray1.at(3).value);
    // const formArray = new FormArray([
    //   new FormControl('John', Validators.required),
    //   new FormGroup({
    //     country: new FormControl('', Validators.required)
    //   }),
    //   new FormArray([])
    // ]);

    // this.logValidationErrors(this.employeeForm);
    // console.log(this.formErrors);

    // this.employeeForm.setValue({
    //   fullName: 'DA',
    //   email: 's@g',
    //   skills: {
    //     skillName: 'C#',
    //     experienceInYears: 4,
    //     proficiency: 'beginner'
    //   }
    // });
  }

  matchEmail(group: AbstractControl): {[key: string]: any} |null {
    const emailControl = group.get('email');
    const confirmEmailControl = group.get('confirmEmail');
    if (confirmEmailControl.value === emailControl.value || confirmEmailControl.pristine) {
      return null;
    } else {
      return { 'emailMisMatch': true };
    }
  }
}
