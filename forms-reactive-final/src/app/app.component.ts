import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReactiveForms';
  defaultCountry = 'india';

  formStatus;

  reactiveForm!: FormGroup;


  ngOnInit() {

    
    this.reactiveForm = new FormGroup({
      personDetails: new FormGroup({
        firstname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        lastname: new FormControl(null, [Validators.required, this.noSpaceAllowed]),
        email: new FormControl(null, [Validators.required, Validators.email], this.emailNotAllowed)
      }),
      gender: new FormControl('male'),
      country: new FormControl('india'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required)
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required),
        // new FormControl(null, Validators.required)
      ])
    });

    // value changes event

    // this.reactiveForm.get('personDetails.firstname').valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // this.reactiveForm.valueChanges.subscribe((value) => {
    //   console.log(value);
    // })

    // status changes events 

    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
      this.formStatus = value;
    })

   // patch value
    setTimeout(() => {
      this.reactiveForm.patchValue({
        personDetails: {
          firstname: 'test',
          lastname: 'test123',
          email: 'test@mail.com'
        },
        
      });
    }, 2000);
    

  }

  // constructor(private fb: FormBuilder) {
  //   this.reactiveForm = this.fb.group({
  //     personDetails: this.fb.group({
  //       firstname: [null, Validators.required],
  //       lastname: [null, Validators.required],
  //       email: [null, [Validators.required, Validators.email]]
  //     }),
  //     gender: ['male'],
  //     country: ['india'],
  //     hobbies: [null],
  //     skills: this.fb.array([
  //       new FormControl(null, Validators.required)
  //     ])
  //   });
  // }

  onSubmit() {
    console.log(this.reactiveForm);

    // Access form control values directly using this.myForm.get('controlName').value

    //this.reactiveForm.reset();
  }

  //formArray

  addSkills() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }

  // custom Error code 

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true }
    }
    return null;
  }

  //async validator

  emailNotAllowed(control: FormControl): Promise<any> | Observable<any> {

    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'uniq@gmail.com') {
          resolve({ emailNotAllowed: true });
        }
        else {
          resolve(null);
        }
      }, 5000)
    });
    return response;
  }
  // addSkills() {
  //   console.log('Adding a skill');
  //   const skillsArray = this.reactiveForm.get('skills') as FormArray;
  //   skillsArray.push(this.fb.control(null)); // Add a new control
  // }
}


