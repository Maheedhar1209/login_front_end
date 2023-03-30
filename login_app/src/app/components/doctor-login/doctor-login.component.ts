import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginserviceService } from 'src/app/loginservice.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.sass']
})
export class DoctorLoginComponent {
  model={username:"",password:""}
  getData:any
  constructor(private loginservice:LoginserviceService,private router : Router) { }

  ngOnInit(): void {
    // TODO document why this method 'ngOnInit' is empty
  

  }
  logindoctor(){
     //console.log("sff");
      let user=this.model.username;
      let password=this.model.password;
      console.log(user);
      if (user== "" || password == "")
         alert("Please fill all the fields");
      else{
      this.loginservice.getDoctorData(user,password).subscribe((res: any) => {
          this.getData=res;
          console.log(this.getData);
          if (this.getData==true){
               this.router.navigate(["/DashBoard"]);
          }
          else{
             alert("Invalid username and password");
          }
      })

  }
}
}
