import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.sass']
})
export class PatientLoginComponent {
 
  phone_number:any;
  otp:any;
  
  constructor(private loginservice:LoginserviceService,private router : Router) {
   
    }

  
 
  sendOTP() {
    // TODO: Send a request to a back-end service to generate and send OTP to the user's phone number.
    this.loginservice.PatientOTP(this.phone_number)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        if (response==1) {
          // Authenticate user and log them in
          console.log(' successful!');
        } else {
          console.log('OTP sending failed!');
        }
      });
  }

  verifyOTP() {
    // TODO: Send a request to a back-end service to verify the OTP.
    // If the OTP is valid, log the user in.
    this.loginservice.PatientVerifyOTP(this.phone_number,this.otp)
      .subscribe((response:  any) => {
        // Verify OTP entered by user
        if (response['otp']==this.otp) {
          // Authenticate user and log them in
          console.log(' Authentication successful!');
        } else {
          console.log('OTP incorrect');
        }
      });
  }
}
