import { Component, OnInit } from '@angular/core';
import { PalsService } from '../../services/pals.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  palform: FormGroup;
  validMessage: string = '';
  constructor(private palsService: PalsService) {}

  ngOnInit(): void {
    this.palform = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      interests: new FormControl('', Validators.required),
    });
  }

  submitRegistration() {
    if (this.palform.valid) {
      this.validMessage =
        "You are now Registered to be a 'Pen - E - Pal' Thank you! ";
      this.palsService.createPalRegistration(this.palform.value).subscribe(
        (data) => {
          this.palform.reset();
          return true;
        },
        (error) => {
          return Observable.throw(error);
        }
      );
    } else {
      this.validMessage =
        'Please fill out all three info fields to register as a Pal. Double check your email';
    }
  }
}
